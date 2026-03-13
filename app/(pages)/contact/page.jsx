// "use client";

// import React, { useActionState, useEffect } from "react";
// import { Mail, Github, Linkedin } from "lucide-react";
// import { contactAction } from "./contact.action";
// import toast from "react-hot-toast";

// const Contact = () => {
//     const [state, formAction, isPending] = useActionState(contactAction, null);

//     useEffect(() => {
//         if(state?.success) toast.success(state.message);
//         if(state && !state.success) toast.error(state.message);
//     }, [state])

//     return (
//         <section className="min-h-screen bg-black text-white px-8 py-20 flex items-center">

//             <div className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">

//                 {/* LEFT SIDE */}
//                 <div>
//                     <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
//                         Get In Touch
//                     </h1>

//                     <p className="text-gray-400 mt-4">
//                         Have a project idea or want to collaborate?
//                         Feel free to reach out — I’m always open to new opportunities.
//                     </p>

//                     <div className="mt-8 space-y-4">

//                         <div className="flex items-center gap-4">
//                             <Mail className="text-cyan-400" />
//                             <span>your-email@gmail.com</span>
//                         </div>

//                         <div className="flex items-center gap-4">
//                             <Github className="text-purple-400" />
//                             <span>github.com/MR-Washie</span>
//                         </div>


//                         <div className="flex items-center gap-4">
//                             <Linkedin className="text-cyan-400" />
//                             <span>linkedin.com/in/yourprofile</span>
//                         </div>

//                     </div>
//                 </div>

//                 {/* RIGHT SIDE FORM */}
//                 <form className="space-y-5" action={formAction}>

//                     <input
//                         type="text"
//                         placeholder="Your Name"
//                         name="fullName"
//                         className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-400"
//                     />

//                     <input
//                         type="email"
//                         placeholder="Your Email"
//                         name="email"
//                         className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-400"
//                     />

//                     <textarea
//                         rows="5"
//                         placeholder="Your Message"
//                         name="message"
//                         className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-400"
//                     ></textarea>

//                     <button
//                         disabled={isPending}
//                         className="cursor-alias w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold hover:scale-105 transition">
//                         {
//                             isPending ? (
//                                 <span>loading...</span>
//                             ) : (
//                                 <span>Send Message</span>
//                             )
//                         }
//                     </button>

//                 </form>

//             </div>

//         </section>
//     );
// };

// export default Contact;


"use client";

import React, { useActionState, useEffect } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { contactAction } from "./contact.action";
import toast from "react-hot-toast";

const Contact = () => {
    const [state, formAction, isPending] = useActionState(contactAction, null);

    useEffect(() => {
        if(state?.success) toast.success(state.message);
        if(state && !state.success) toast.error(state.message);
    }, [state])

    return (
        <section className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-10 lg:px-20 py-16 sm:py-20 flex items-center">

            <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10">

                {/* LEFT SIDE */}
                <div className="text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
                        Get In Touch
                    </h1>

                    <p className="text-gray-400 mt-4 text-sm sm:text-base">
                        Have a project idea or want to collaborate?
                        Feel free to reach out — I’m always open to new opportunities.
                    </p>

                    <div className="mt-8 space-y-4 flex flex-col items-center md:items-start">

                        <div className="flex items-center gap-4">
                            <Mail className="text-cyan-400" />
                            <span className="text-sm sm:text-base">your-email@gmail.com</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <Github className="text-purple-400" />
                            <span className="text-sm sm:text-base">github.com/MR-Washie</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <Linkedin className="text-cyan-400" />
                            <span className="text-sm sm:text-base">linkedin.com/in/yourprofile</span>
                        </div>

                    </div>
                </div>

                {/* RIGHT SIDE FORM */}
                <form className="space-y-5" action={formAction}>

                    <input
                        type="text"
                        placeholder="Your Name"
                        name="fullName"
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-400 text-sm sm:text-base"
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-400 text-sm sm:text-base"
                    />

                    <textarea
                        rows="5"
                        placeholder="Your Message"
                        name="message"
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-400 text-sm sm:text-base"
                    ></textarea>

                    <button
                        disabled={isPending}
                        className="cursor-alias w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold hover:scale-105 transition text-sm sm:text-base">
                        {
                            isPending ? (
                                <span>loading...</span>
                            ) : (
                                <span>Send Message</span>
                            )
                        }
                    </button>

                </form>

            </div>

        </section>
    );
};

export default Contact;