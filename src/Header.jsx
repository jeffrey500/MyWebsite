function Header(){
    return (
        <header class="sticky top-0 left-0 w-full z-50 bg-black py-6 px-6">
            <nav class={"max-w-7xl mx-auto"}>
                <ul class="w-full flex items-center gap-5 flex-wrap text-white text-2xl font-mono font-bold">
                    <li class="mr-auto text-blue-300">Jeffrey Z.</li>
                    <li><a href="#home" class="text-blue-100 hover:text-blue-300 transition-colors duration-500">Home</a></li>
                    <li><a href="#about" class="text-blue-100 hover:text-blue-300 transition-colors duration-500">About Me</a></li>
                    <li><a href="#projects" class="text-blue-100 hover:text-blue-300 transition-colors duration-500">Projects</a></li>
                    <li><a href="#contact" class="text-blue-100 hover:text-blue-300 transition-colors duration-500">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;