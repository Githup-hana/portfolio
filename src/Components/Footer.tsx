function Footer() {
    return (
        <footer className="flex justify-center items-center py-8 mt-auto bg-app-text dark:bg-app-text-dark text-app-bg dark:text-app-bg-dark  border-app-text/20 dark:border-app-text-dark/20">
            <div className="text-center">
                <p className="text-sm font-medium">
                    Hana Abrham © {new Date().getFullYear()}
                </p>
                <p className="text-xs opacity-80 mt-1">
                    Made with ❤️ using React & TypeScript
                </p>
            </div>
        </footer>
    );
}

export default Footer;