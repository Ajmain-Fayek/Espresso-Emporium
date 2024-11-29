import React from "react";
import Footer from "./Footer";
import CopyRight from "./CopyRight";
import Header from "./Header";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const Error404 = () => {
    return (
        <div>
            <Header />
            <div className="w-fit mx-auto mt-6">
                <Link
                    to="/"
                    className="font-rancho mx-auto font-semibold px-6 sm:px-0"
                >
                    <p className="drop-shadow-[0_0_5px_#374151] flex items-center gap-1.5 hover:bg-[#D2B48C] py-1 px-2">
                        <FaArrowLeft style={{ fontSize: ".7rem" }} /> Back to
                        home
                    </p>
                </Link>
            </div>
            <img
                className="mx-auto  max-h-[800px] block"
                src="https://i.ibb.co.com/j59KPbB/404.gif"
            />
            <Footer />
            <CopyRight />
        </div>
    );
};

export default Error404;
