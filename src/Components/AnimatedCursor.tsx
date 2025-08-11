import { useEffect, useState } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

const AnimatedCursor = () => {
  const [mousePosition, setMousePosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState<string>('default');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Check if device supports hover (not touch device)
    const hasHover = window.matchMedia('(hover: hover)').matches;
    if (!hasHover) return;

    setIsVisible(true);

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const mouseEnter = () => setIsVisible(true);
    const mouseLeave = () => setIsVisible(false);

    // Add hover effects for interactive elements
    const addCursorListeners = () => {
      // Standard interactive elements
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
      
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => setCursorVariant('hover'));
        el.addEventListener('mouseleave', () => setCursorVariant('default'));
      });

      // Special effects for project cards
      const projectCards = document.querySelectorAll('.group');
      projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => setCursorVariant('project'));
        card.addEventListener('mouseleave', () => setCursorVariant('default'));
      });

      // Special effects for navigation
      const navLinks = document.querySelectorAll('nav a');
      navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => setCursorVariant('nav'));
        link.addEventListener('mouseleave', () => setCursorVariant('default'));
      });
    };

    // Initial setup
    addCursorListeners();

    // Re-add listeners when DOM changes (for dynamic content)
    const observer = new MutationObserver(() => {
      addCursorListeners();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseenter', mouseEnter);
    window.addEventListener('mouseleave', mouseLeave);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseenter', mouseEnter);
      window.removeEventListener('mouseleave', mouseLeave);
      observer.disconnect();
    };
  }, []);

  if (!isVisible) return null;

  const getCursorStyle = () => {
    switch (cursorVariant) {
      case 'hover':
        return {
          scale: 'scale-150',
          gradient: 'from-pink-500 via-purple-500 to-blue-500',
          animation: 'animate-pulse',
          followerScale: 'scale-125',
          followerBorder: 'border-pink-400',
          followerAnimation: 'animate-spin'
        };
      case 'project':
        return {
          scale: 'scale-200',
          gradient: 'from-blue-400 via-cyan-400 to-purple-500',
          animation: 'animate-bounce',
          followerScale: 'scale-150',
          followerBorder: 'border-cyan-400',
          followerAnimation: 'animate-ping'
        };
      case 'nav':
        return {
          scale: 'scale-125',
          gradient: 'from-green-400 via-blue-500 to-purple-600',
          animation: 'animate-pulse',
          followerScale: 'scale-110',
          followerBorder: 'border-green-400',
          followerAnimation: 'animate-spin'
        };
      default:
        return {
          scale: 'scale-100',
          gradient: 'from-blue-500 via-purple-500 to-pink-500',
          animation: 'animate-pulse',
          followerScale: 'scale-100',
          followerBorder: 'border-blue-400/50',
          followerAnimation: ''
        };
    }
  };

  const cursorStyle = getCursorStyle();

  return (
    <>
      {/* Main Cursor */}
      <div
        className={`fixed pointer-events-none z-[9999] transition-all duration-200 ease-out ${cursorStyle.scale}`}
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          transform: `translate3d(0, 0, 0)`,
        }}
      >
        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${cursorStyle.gradient} ${cursorStyle.animation} shadow-lg`} />
      </div>

      {/* Cursor Follower */}
      <div
        className={`fixed pointer-events-none z-[9998] transition-all duration-300 ease-out ${cursorStyle.followerScale}`}
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          transform: `translate3d(0, 0, 0)`,
        }}
      >
        <div className={`w-10 h-10 rounded-full border-2 ${cursorStyle.followerBorder} ${cursorStyle.followerAnimation}`} />
      </div>

      {/* Click Ripple Effect */}
      {cursorVariant === 'hover' && (
        <div
          className="fixed pointer-events-none z-[9997] animate-ping"
          style={{
            left: mousePosition.x - 15,
            top: mousePosition.y - 15,
          }}
        >
          <div className="w-8 h-8 rounded-full bg-white/20 border border-white/30" />
        </div>
      )}
    </>
  );
};

export default AnimatedCursor;