import React from "react";
import bg from "../assets/more/15.jpg";
import img from "../assets/more/logo1.png";

const Header = () => {
    return (
        <div style={{ backgroundImage: `url('${bg}')` }} className="flex items-center gap-4 py-4 justify-center bg-cover bg-center">
            <img className="h-16" src={img} />
            <p className="text-white md:text-6xl text-3xl sm:text-5xl font-rancho">Espresso Emporium</p>
        </div>
    );
};

export default Header;
