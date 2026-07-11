function Header(){
    return (
        <header class="sticky top-0 left-0 w-full z-50 bg-black py-5 px-5">
            <nav class={"max-w-7xl mx-auto"}>
                <ul class="w-full flex items-center gap-5 flex-wrap text-white text-2xl font-sans font-bold">
                    <li class="mr-auto text-blue-300">Jeffrey Z.</li>
                    <li><a href="#home" class="text-white hover:text-blue-300 transition-colors duration-500">Home</a></li>
                    <li><a href="#about" class="text-white hover:text-blue-300 transition-colors duration-500">About Me</a></li>
                    <li><a href="#projects" class="text-white hover:text-blue-300 transition-colors duration-500">Projects</a></li>
                    <li><a href="#contact" class="text-white hover:text-blue-300 transition-colors duration-500">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;