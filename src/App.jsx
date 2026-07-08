import './App.css'
import Header from "./Header.jsx";
import Landing from "./Landing.jsx";
import AboutMe from "./AboutMe.jsx";

function App() {
    return (
        <>
            <div className="app-layout">
                <Header/>
                <main className="Landing">
                    <Landing/>
                </main>
            </div>
            <AboutMe/>
        </>
    )
}

export default App