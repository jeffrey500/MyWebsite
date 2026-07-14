function Contact(){
    return(
        <section id="contact" className="scroll-mt-15 static flex flex-1 flex-col items-center justify-center bg-gray-100">
            <div className="max-w-4xl w-full max-auto mb-20">
                <h2 className="text-black text-6xl font-mono font-bold tracking-tight mt-20 mb-10">Contact</h2>
                <div className={`flex flex-col bg-white rounded-4xl shadow-sm hover:shadow-2xl duration-500 border-6 border-gray-500 p-7 pb-8 my-7 gap-2`}>
                    <h2 className="text-3xl font-bold text-left">Let's Connect</h2>
                    <div className={"grid grid-cols-2 mt-4"}>
                        <div>
                            <h2 className="text-xl text-left font-bold text-gray-600">General Inquiries</h2>
                            <p className={"hover hover:text-sky-600"}>jeffrey@jzhu.ca</p>
                            <h2 className="text-xl text-left font-bold text-gray-600 pt-5">Academic Email</h2>
                            <p className={"hover hover:text-sky-600"}>jeffr.zhu@mail.utoronto.ca</p>
                        </div>
                        <div>
                            <h2 className="text-xl text-left font-bold text-gray-600">Github</h2>
                            <a href={"https://github.com/jeffrey500"} target="_blank" className={"hover hover:text-sky-600"}>jeffrey500</a>
                            <h2 className="text-xl text-left font-bold text-gray-600 pt-5">Linkedin (not maintained)</h2>
                            <a href={"https://www.linkedin.com/in/jeffrey-zhu-a6b8a9281"} target="_blank" className={"hover hover:text-sky-600"}>Jeffrey Zhu</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;