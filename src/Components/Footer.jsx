import React from "react";
import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaLinkedin,
} from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
    const handleForm = (e) => {
        e.preventDefault();
    };
    return (
        <div
            style={{
                backgroundImage: "url('https://i.ibb.co.com/dBTM3mZ/13.jpg')",
            }}
            className="bg-cover bg-center"
        >
            <div className="flex md:items-start md:justify-between flex-col md:flex-row gap-10 md:gap-20 pb-10 pt-24 max-w-screen-2xl px-4 mx-auto w-full">
                {/* About & Nav */}
                <div className="flex flex-col gap-6 md:w-1/2">
                    <img
                        src="https://i.ibb.co.com/1qkrKqP/logo1.png"
                        className="h-[90px] w-[75px]"
                    />
                    <h3 className="font-rancho text-[#331A15] font-semibold text-2xl drop-shadow-[0_0_5px_#331A15]">
                        Espresso Emporium
                    </h3>
                    <p className="max-w-lg">
                        Always ready to be your friend. Come & Contact with us
                        to share your memorable moments, to share with your best
                        companion.
                    </p>
                    <div className="flex items-center gap-4 pb-2">
                        <div className="rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150">
                            <FaInstagramSquare
                                color="#331A15"
                                style={{ fontSize: "2rem" }}
                            />
                        </div>
                        <div className="rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150">
                            <FaFacebookSquare
                                color="#331A15"
                                style={{ fontSize: "2rem" }}
                            />
                        </div>
                        <div className="rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150">
                            <FaLinkedin
                                color="#331A15"
                                style={{ fontSize: "2rem" }}
                            />
                        </div>
                        <div className="rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150">
                            <FaGithubSquare
                                color="#331A15"
                                style={{ fontSize: "2rem" }}
                            />
                        </div>
                    </div>
                    <h5 className="font-rancho text-[#331A15] font-semibold text-2xl drop-shadow-[0_0_5px_#331A15]">
                        Get in Touch
                    </h5>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-4">
                            <div>
                                <IoIosCall color="#331A15" />
                            </div>
                            +88 01533 333 333
                        </li>
                        <li className="flex items-center gap-4">
                            {" "}
                            <div>
                                <MdEmail color="#331A15" />
                            </div>{" "}
                            info@gmail.com
                        </li>
                        <li className="flex items-center gap-4">
                            <div>
                                <MdLocationOn color="#331A15" />
                            </div>
                            72, Wall street, King Road, Dhaka
                        </li>
                    </ul>
                </div>

                {/* Connect with us */}
                <div className="md:mt-[102px] space-y-3 md:w-1/2">
                    <h4 className="font-rancho text-[#331A15] font-semibold text-2xl drop-shadow-[0_0_5px_#331A15]">
                        Connect with US
                    </h4>
                    <form
                        className="flex flex-col gap-4 justify-start"
                        onSubmit={handleForm}
                    >
                        <input
                            className="bg-white py-2 input px-4 rounded-md placeholder:text-gray-500 shadow-sm"
                            type="text"
                            name="name"
                            placeholder="Name"
                        />
                        <input
                            className="bg-white input py-2 px-4 rounded-md placeholder:text-gray-500 shadow-sm"
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                        <textarea
                            placeholder="Message"
                            className="bg-white textarea text-base py-2 px-4 textarea-lg h-[130px] w-full placeholder:text-gray-500 shadow-sm rounded-md"
                        ></textarea>
                        <input
                            type="submit"
                            value="Send Message"
                            className="w-fit font-rancho text-[#331A15] text-lg font-normal btn rounded-full btn-sm  border-[#331A15] bg-transparent hover:bg-[#331A15] hover:text-gray-300"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Footer;
