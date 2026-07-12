import './App.css'
import Header from "./Header.jsx";
import Landing from "./Landing.jsx";
import AboutMe from "./AboutMe.jsx";
import Projects from "./Projects.jsx";
import Experience from "./Experience.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import Skills from "./Skills.jsx";

function App() {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Header/>
                <main className="flex-1 flex flex-col">
                    <Landing/>
                    <AboutMe/>
                    <Projects/>
                    <Experience/>
                    {/*<Skills/>*/}
                    <Contact/>
                </main>
                <Footer/>
            </div>
        </>
    )
}

export default App