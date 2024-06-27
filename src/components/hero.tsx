import Link from "next/link";
// import TypewriterComponent from "typewriter-effect";

export const Hero = () => {

    return (
        <div className="text-white font-bold py-36 text-center space-y-5 mb-20">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
                <h1>The Best AI Tool for</h1>
                <div className="text-green-500"> {/* text-transparent bg-gradient-to-r from-green-400 to-blue-600 */}
                    {/* <TypewriterComponent
                        options={{
                            strings: ["Chatbot.", "Photo Generation.", "Music Generation.", "Code Generation.", "Video Generation."],
                            autoStart: true,
                            loop: true,
                        }}
                    /> */}
                        Chatbot.
                </div>
            </div>
            <div className="text-sm md:text-xl font-light text-zinc-400">Boost your creativity with a touch of AI.</div>
            <div>
                <Link href="/contact">
                    <button className="bg-gradient-to-r from-green-500 via-purple-500 to-blue-500 text-white border-0 md:textlg p-4 md:p-6 rounded-full font-semibold h-10 px-4 py-2 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                        Start Generating For Free
                    </button>
                </Link>
            </div>
            <div className="text-zinc-400">No credit card required. Cancel anytime.</div>
        </div>
    );
};



// import Link from "next/link";

// export const Hero = () => {
//     return (
//         <div className="text-white font-bold py-36 text-center space-y-5 mb-20">
//             <div className="heading-lg space-y-5">
//                 <h1>The Best AI Tool for</h1>
//                 <div className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
//                     {/* If you uncomment the TypewriterComponent, ensure it uses the global styles too */}
//                     Chatbot.
//                 </div>
//             </div>
//             <div className="subheading md:text-xl">Boost your creativity with a touch of AI.</div>
//             <div>
//                 <Link href="https://app.relix.ai">
//                     <button className="btn-gradient md:text-lg p-4 md:p-6 rounded-full">
//                         Start Generating For Free
//                     </button>
//                 </Link>
//             </div>
//             <div className="subheading">No credit card required. Cancel anytime.</div>
//         </div>
//     );
// };




