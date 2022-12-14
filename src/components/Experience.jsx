import React from "react";
import timeline from "../data/timeline";
import ExperienceItem from "./ExperienceItem";

function Experience(){
    return (
        <div className="flex flex-col md:flex-row justify-center my-20 w-full">
            <div className="w-full md:w-7/12">
                {timeline.map(item => (
                    <ExperienceItem
                        year={item.year}
                        title={item.title}
                        company={item.company}
                        duration={item.duration}
                        location={item.location}
                        details={item.details}
                    />
                ))}
            </div>
        </div>
    )
}

export default Experience;