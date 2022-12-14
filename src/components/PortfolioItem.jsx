import React from "react";

function PortfolioItem({title, imgUrl, tag, stack, link}){
    return (
        <div className="border-2">
            <img
                src={imgUrl}
                alt="Image text"
                className="w-full h-36 md:h-48 object-cover cursor-pointer"
            />

            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
                    {title}
                </h3>

                <h4 className="border-2 w-fit px-3 rounded-md">{tag}</h4>
                <p>
                    {stack.map(item => (
                        <span className="inline-block px-2 py-1 
                        border-2 border-stone-400 rounded-md mx-1 my-4">
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    )
}

export default PortfolioItem;