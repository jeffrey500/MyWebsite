import React, {useEffect} from 'react';

function Header(){
    const [isScrolled, setIsScrolled] = React.useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 py-4 px-6 transition-colors duration-700 ${isScrolled ? 'bg-gray-700' : 'bg-transparent'}`}>
            <nav className={`max-w-6xl mx-auto text-2xl font-bold items-center flex justify-between duration-1000 ${isScrolled ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <h1 className={'mr-auto text-blue-300'}>Jeffrey Z.</h1>
                <ul className={`gap-5 flex items-center text-white font-mono transition-opacity duration-500`}>
                    <li><a href="#about"
                           className="text-blue-100 hover:text-blue-300 transition-colors duration-500">About</a></li>
                    <li><a href="#projects"
                           className="text-blue-100 hover:text-blue-300 transition-colors duration-500">Projects</a>
                    </li>
                    <li><a href="#experience"
                           className="text-blue-100 hover:text-blue-300 transition-colors duration-500">Experience</a>
                    </li>
                    {/*<li><a href="#skills"*/}
                    {/*       className="text-blue-100 hover:text-blue-300 transition-colors duration-500">Skills</a>*/}
                    {/*</li>*/}
                    <li><a href="#contact"
                           className="text-blue-100 hover:text-blue-300 transition-colors duration-500">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;