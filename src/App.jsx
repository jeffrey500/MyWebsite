import './App.css'
import Header from "./Header.jsx";
import Landing from "./Landing.jsx";
import AboutMe from "./AboutMe.jsx";

function App() {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Header/>
                <main className="flex-1 flex flex-col">
                    <Landing/>
                </main>
            </div>
            {/*<AboutMe/>*/}
        </>
    )
}

export default App