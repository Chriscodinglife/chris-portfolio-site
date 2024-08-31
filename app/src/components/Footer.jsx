import React from "react";

const owner = import.meta.env.VITE_OWNER

const Footer = () => {
    return (
        <div className="bg-gray-800">
            <div className="h-auto m-auto w-auto">
                <div className="flex flex-col justify-center">
                    <p className=" text-white text-center m-16 font-monts ">© {owner} 2024</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;