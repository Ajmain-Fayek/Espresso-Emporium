import React from "react";

const Hero = () => {
    return (
        <div
            style={{
                backgroundImage: 'url("https://i.ibb.co.com/1L7sSjt/3.png")',
            }}
            className="py-72 bg-cover bg-center flex justify-end"
        >
            <div className="text-white space-y-6 px-6 2xl:mr-48">
                <h1 className="md:text-6xl text-3xl sm:text-5xl font-rancho font-semibold">
                    Would you like a Cup of Delicious Coffee?
                </h1>
                <p className="max-w-[724px]">
                    It's coffee time - Sip & Savor - Relaxation in every sip!
                    Get the nostalgia back!! Your companion of every moment!!!
                    Enjoy the beautiful moments and make them memorable.
                </p>
                <button
                    className="btn font-rancho rounded-none bg-[#E3B577] text-[#242222]
                hover:bg-transparent hover:text-white border-[#E3B577] hover:border-[#fff]"
                >
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default Hero;
