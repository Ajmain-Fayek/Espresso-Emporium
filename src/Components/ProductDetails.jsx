import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import CopyRight from "./CopyRight";
import { FaArrowLeft } from "react-icons/fa";

const ProductDetails = () => {
    const { name, chef, taste, category, details, photo, supplier } =
        useLoaderData();
    return (
        <>
            <Helmet>
                <title>Details : {name}</title>
            </Helmet>
            <Header />
            <div
                style={{
                    backgroundImage: `url('https://i.ibb.co.com/tJZwnFF/11.png')`,
                }}
                className="bg-cover bg-left-top pt-6"
            >
                <Link
                    to="/"
                    className="font-rancho flex items-center gap-1 text-lg max-w-screen-2xl mx-auto font-semibold px-6 sm:px-0"
                >
                    <p className="drop-shadow-[0_0_5px_#374151] flex items-center gap-1.5">
                        <FaArrowLeft style={{ fontSize: ".7rem" }} /> Back to
                        home
                    </p>
                </Link>
                <div className="mx-6">
                    <div className="max-w-screen-2xl card flex-col items-center sm:flex-row rounded-md card-side shadow-md bg-[#f5f4f1b6] py-10 my-24 px-6 mx-auto">
                        <figure className="sm:w-1/2">
                            <img
                                className="max-w=[351px] max-h-[455px] mx-auto object-contain"
                                src={photo}
                                alt={name}
                            />
                        </figure>
                        <div className="flex justify-between sm:w-1/2">
                            <div className="flex flex-col justify-center gap-4">
                                <h2 className="drop-shadow-[0_0_5px_#331A15] card-title text-[#331A15] font-rancho text-2xl lg:text-3xl">
                                    {name}
                                </h2>
                                <p>
                                    <b className="text-[#331A15] font-semibold">
                                        Name:
                                    </b>{" "}
                                    {name}
                                </p>
                                <p>
                                    <b className="text-[#331A15] font-semibold">
                                        Chef:
                                    </b>{" "}
                                    {chef}
                                </p>
                                <p>
                                    <b className="text-[#331A15] font-semibold">
                                        Supplier:
                                    </b>{" "}
                                    {supplier}
                                </p>
                                <p>
                                    <b className="text-[#331A15] font-semibold">
                                        Taste:
                                    </b>{" "}
                                    {taste}
                                </p>
                                <p>
                                    <b className="text-[#331A15] font-semibold">
                                        Category:
                                    </b>{" "}
                                    {category}
                                </p>
                                <p>
                                    <b className="text-[#331A15] font-semibold">
                                        Details:
                                    </b>{" "}
                                    {details}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <CopyRight />
        </>
    );
};

export default ProductDetails;
