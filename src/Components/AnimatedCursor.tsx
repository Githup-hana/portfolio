import { useEffect, useState } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}


const AnimatedCursor = () => {
  const [mousePosition, setMousePosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Do not show custom cursor on touch devices
    const hasHover = window.matchMedia('(hover: hover)').matches;
    if (!hasHover) return;

    setIsVisible(true);

    const onMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const onEnter = () => setIsVisible(true);
    const onLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseenter', onEnter);
    window.addEventListener('mouseleave', onLeave);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseenter', onEnter);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: mousePosition.x - 6,
        top: mousePosition.y - 6,
      }}
    >
      <div
        className="w-3 h-3 rounded-full bg-black dark:bg-white shadow-sm"
        style={{ transform: 'translate3d(0,0,0)' }}
      />
    </div>
  );
};

export default AnimatedCursor;