import React from "react";

function Intro(){
    return (
        <div className="flex items-center justify-center 
        flex-col text-center pt-20 pb-6 p-30">
            <div className="border-b-2 mb-10">
                <h1 className="text-4xl md:text-6xl mb-1 md:mb-5 font-bold">Ryan Kline</h1>
                <h4 className="text-xl mb-1 md:mb-3">4th Year Computer Science Student at Grand Valley State University</h4>
                <h5 className="text-xl mb-1 md:mb-10">Incoming Application Developer Intern at Corewell Health</h5>
            </div>
            

            <div className="p-30 mb-10 w-3/5">
                <p>
                My name is Ryan, and I am a fourth year computer science student at Grand Valley State University. 
                During this time, I have gained experience in a variety of programming languages and technologies, 
                including Java, Python, C, Database Management in Oracle, and Mobile Application Development among many others.<br></br> <br></br>
                
                In addition to my studies, I have also had the opportunity to intern as a software engineer at 
                DISHER. During my internship, I worked on a number of projects, including 
                writing software tests for an autonomous rover, an inventory system for our lab, and a device to make hands-on collaboration more
                accessible to remote team members. This experience allowed me to apply my knowledge and skills in a professional setting, and further develop 
                my abilities as a programmer. As I complete my degree, I am eager to continue learning and growing as 
                a software engineer. I am confident in my abilities and am excited to begin my career in the field.
                
                <br></br><br></br>

                I am not seeking any new opportunities at the moment, but you are more than welcome to connect with me on <a class="underline" href="https://www.linkedin.com/in/ryanjkline/">LinkedIn</a> should 
                anything come up in the future!
                </p>
            </div>
        </div>
    )
}

export default Intro;