function Header(){
    return (
        <header className="sticky top-0 left-0 w-full z-50 bg-black py-6 px-6">
            <nav className={"max-w-7xl mx-auto"}>
                <ul className="w-full flex items-center gap-5 flex-wrap text-white text-2xl font-mono font-bold">
                    <li className="mr-auto text-blue-300">Jeffrey Z.</li>
                    <li><a href="#home" className="text-blue-100 hover:text-blue-300 transition-colors duration-500">Home</a></li>
                    <li><a href="#about" className="text-blue-100 hover:text-blue-300 transition-colors duration-500">About Me</a></li>
                    <li><a href="#projects" className="text-blue-100 hover:text-blue-300 transition-colors duration-500">Projects</a></li>
                    <li><a href="#contact" className="text-blue-100 hover:text-blue-300 transition-colors duration-500">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;