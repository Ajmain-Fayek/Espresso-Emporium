import React from "react";
import bg from "../assets/more/15.jpg";
import img from "../assets/more/logo1.png";

const Header = () => {
    return (
        <div style={{ backgroundImage: `url('${bg}')` }} className="flex items-center gap-4 py-4 justify-center bg-cover">
            <img className="h-16" src={img} />
            <p className="text-white text-6xl">Espresso Emporium</p>
        </div>
    );
};

export default Header;
