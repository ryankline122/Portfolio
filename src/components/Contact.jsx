import React from "react";

function Contact(){
    return (
        <div className="flex flex-col mb-10 mx-auto">
         <div className="flex justify-center items-center mx-5">
            <form action="https://getform.io/f/41c30689-7d73-42b0-b40c-7740d1c659fc" method="POST" className="flex flex-col w-full md:w-7/12"> 
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    required
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
                  required
               />
               <textarea
                  name="message"
                  placeholder="Message"
                  rows="10"
                  className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
                  required
               />
               <button
                  type="submit"
                  className="text-center inline-block px-8 py-3 w-max 
                  text-base font-medium rounded-md text-white bg-slate-800 drop-shadow-md hover:stroke-white"
               >
                  Submit
               </button>
            </form>
         </div>
      </div>
    )
}

export default Contact;