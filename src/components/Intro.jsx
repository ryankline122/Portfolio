import React from "react";

function Intro(){
    return (
        <div className="flex items-center justify-center 
        flex-col text-center pt-10 pb-6 p-30">
            <h1 className="text-4xl md:text-6xl mb-1 md:mb-5 font-bold">Ryan Kline</h1>
            <h4 className="text-xl mb-1 md:mb-3">4th Year Computer Science Student at Grand Valley State University</h4>
            <h5 className="text-xl mb-1 md:mb-10">Seeking Internship for Summer 2023</h5>

            <div className="p-30 w-1/2">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

            </div>
            


        </div>
    )
}

export default Intro;