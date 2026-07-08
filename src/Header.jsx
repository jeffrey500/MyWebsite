import './Header.css'

function Header(){
    return (
        <header className="site-header">
            <nav>
                <ul className="nav-links">
                    <li className="name">Jeffrey Zhu</li>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;