import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import { Link } from "react-router";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import Footer from "./Footer";
import CopyRight from "./CopyRight";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const [errorMsg, setErrorMsg] = useState("");
    const [errorMsgGoogle, setErrorMsgGoogle] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const emailRef = useRef();

    const handleSignIn = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
    };

    const handleGoogleSignIn = () => {};
    const handleForgetPassword = () => {};
    return (
        <>
            <Helmet>
                <title>Login | Espresso Emporium</title>
            </Helmet>

            {/* Header */}
            <Header />

            <div
                style={{
                    backgroundImage: `url('https://i.ibb.co.com/tJZwnFF/11.png')`,
                }}
                className="bg-cover bg-left-top pt-6"
            >
                {/* Back to Home */}
                <div className="w-fit mx-auto mt-6">
                    <Link
                        to="/"
                        className="font-rancho mx-auto font-semibold px-6 sm:px-0"
                    >
                        <p className="drop-shadow-[0_0_5px_#374151] flex items-center gap-1.5 hover:bg-[#D2B48C] py-1 px-2">
                            <FaArrowLeft style={{ fontSize: ".7rem" }} /> Back
                            to home
                        </p>
                    </Link>
                </div>

                {/* Login */}
                <div className="max-w-screen-lg mx-auto px-6 py-20">
                    <div className="flex flex-col justify-between space-x-0 sm:flex-row sm:space-x-12">
                        <div className="mb-8 w-full sm:mb-0 sm:w-1/2">
                            {/* Left side form */}
                            <h2 className="mb-6 text-3xl font-semibold tracking-widest drop-shadow-[0_0_5px_#331A15] text-[#331A15] font-rancho">
                                Sign In
                            </h2>
                            <form onSubmit={handleSignIn}>
                                <div className="mb-4 flex flex-col space-y-4 relative">
                                    <input
                                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-1"
                                        placeholder="Username"
                                        type="email"
                                        name="email"
                                        ref={emailRef}
                                    />
                                    <input
                                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-1"
                                        placeholder="Password"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        name="password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        className="p-2 absolute top-11 bg-white hover:bg-white right-2"
                                    >
                                        {showPassword ? (
                                            <FaEyeSlash />
                                        ) : (
                                            <FaEye />
                                        )}
                                    </button>
                                </div>
                                <div className="mb-6 flex items-center space-x-2 accent-sky-600">
                                    <input
                                        name="remember"
                                        type="checkbox"
                                        id="keep_signed_in"
                                    />
                                    <label
                                        className="select-none text-sm font-medium"
                                        htmlFor="keep_signed_in"
                                    >
                                        Keep me signed in
                                    </label>
                                </div>
                                <button className="inline-flex h-10 w-full items-center justify-center rounded-md btn bg-[#D2B48C] hover:bg-[#D2B48C] hover:border-[#331A15] px-4 py-2 text-sm font-medium uppercase ">
                                    Sign In
                                </button>
                            </form>
                            {/* <p className="mt-6 flex gap-1 text-sm">
                                Did you
                                <Link
                                    onClick={handleForgetPassword}
                                    className="text-blue-600 font-semibold underline"
                                >
                                    forget your password?
                                </Link>
                            </p> */}
                            {/* Error */}
                            {errorMsg && (
                                <p className="text-red-700 mt-4 bg-red-50 border border-red-100 px-4 py-1 w-fit rounded-md">
                                    {errorMsg}
                                </p>
                            )}
                        </div>
                        {/* Right side content */}
                        <div className="w-full sm:w-1/2">
                            <p className="mb-6  text-sm">
                                If you don&apos;t already have an account click
                                the button below to create your account.
                            </p>
                            <Link
                                to={"/register"}
                                className="mb-2 inline-flex h-10 w-full items-center justify-center rounded-md  px-4 py-2 text-sm font-medium uppercase btn bg-[#331A15] text-white hover:text-[#331A15] hover:border-[#331A15]"
                            >
                                Create Account
                            </Link>
                            <p className="my-4 text-center">OR</p>
                            <button
                                onClick={handleGoogleSignIn}
                                className="mb-2 btn flex h-10 w-full items-center justify-center gap-1 rounded-md border border-gray-200 bg-base-200 px-4 py-2 text-sm font-medium"
                            >
                                <FcGoogle style={{ fontSize: "1.25rem" }} />
                                SIGN IN WITH GOOGLE
                            </button>
                            {/* Error */}
                            {errorMsgGoogle && (
                                <p className="text-red-700 bg-red-50 border border-red-100 px-4 py-1 w-fit rounded-md">
                                    {errorMsgGoogle}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <Footer />
            <CopyRight />
        </>
    );
};

export default Login;
