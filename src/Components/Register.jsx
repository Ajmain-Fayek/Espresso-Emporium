import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";
import Footer from "./Footer";
import CopyRight from "./CopyRight";
import Header from "./Header";
import { AuthContext } from "../Context/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [errorMsg, setErrorMsg] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    // Register user
    const handleRegister = (e) => {
        e.preventDefault();
        const firstName = e.target.firstName.value;
        const LastName = e.target.lastName.value;
        const name = firstName + " " + LastName;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;
        const photoURL = e.target.photoUrl.value;

        // Clear Previous Error messages
        setErrorMsg("");

        // Password validation
        const regexUpperCase = /(?=.*[A-Z])/;
        const regexLowerCase = /(?=.*[a-z])/;
        const regexLength = /.{6,}/;
        if (!regexUpperCase.test(password)) {
            return setErrorMsg("Password Must Contain an UpperCase letter A-Z");
        }
        if (!regexLowerCase.test(password)) {
            return setErrorMsg("Password Must Contain an LowerCase letter a-z");
        }
        if (!regexLength.test(password)) {
            return setErrorMsg("Password Must be at least 6 Character long");
        }
        if (!terms) return setErrorMsg("Accept Terms And Conditions!");
        // Create User
        createUser(email, password)
            .then((data) => {
                const user = data.user;
                const obj = {
                    name,
                    firstName,
                    LastName,
                    email,
                    password,
                    terms,
                    photoURL,
                    emailVerified: user?.emailVerified,
                    phoneNumber: user?.phoneNumber,
                    uid: user?.uid,
                    isAnonymous: user?.isAnonymous,
                    metadata: {
                        createdAt: user?.metadata?.createdAt,
                        creationTime: user?.metadata?.creationTime,
                        lastLoginAt: user?.metadata?.lastLoginAt,
                        lastSignInTime: user?.metadata?.lastSignInTime,
                    },
                };
                fetch("https://espresso-emporium-coffees.vercel.app/users", {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(obj),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.insertedId) {
                            console.log("User Created in DB");
                        }
                    });
                console.log(data.user);
            })
            .catch((err) => setErrorMsg(err));
    };
    return (
        <>
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

                {/* Register */}
                <div className="max-w-md mx-auto space-y-6 rounded-lg py-20 px-6">
                    <Helmet>
                        <title>Register | Espresso Emporium</title>
                    </Helmet>
                    <div className="flex flex-col space-y-1">
                        <h3 className="text-3xl font-bold tracking-widest font-rancho text-[#331A15] drop-shadow-[0_0_5px_#331A15]">
                            Sign Up
                        </h3>
                        <p className="text-sm text-zinc-500 400">
                            Please fill in the form to create an account.
                        </p>
                    </div>
                    <div>
                        <form onSubmit={handleRegister} className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-4 grid-cols-1">
                                <div className="space-y-2 text-sm">
                                    <label
                                        className="text-sm font-medium leading-none text-zinc-700"
                                        htmlFor="first_name"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none"
                                        id="first_name"
                                        placeholder="Enter first name"
                                        name="firstName"
                                        type="text"
                                        required
                                    />
                                </div>
                                <div className="space-y-2 text-sm">
                                    <label
                                        className="text-sm font-medium leading-none text-zinc-700 "
                                        htmlFor="last_name"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none"
                                        id="last_name"
                                        placeholder="Enter last name"
                                        name="lastName"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2 text-sm">
                                <label
                                    className="text-sm font-medium leading-none text-zinc-700 300"
                                    htmlFor="profile_pic"
                                >
                                    Photo URL
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none"
                                    id="profile_pic"
                                    placeholder="Enter a Photo URL"
                                    name="photoUrl"
                                    type="url"
                                />
                            </div>
                            <div className="space-y-2 text-sm">
                                <label
                                    className="text-sm font-medium leading-none text-zinc-700 300"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none"
                                    id="email"
                                    placeholder="Enter your email"
                                    name="email"
                                    type="email"
                                    required
                                />
                            </div>
                            <div className="space-y-2 text-sm relative">
                                <label
                                    className="text-sm font-medium leading-none text-zinc-700"
                                    htmlFor="password_"
                                >
                                    Password
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none"
                                    id="password_"
                                    placeholder="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className="p-2 absolute top-6 bg-white hover:bg-white right-2"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            <div className="mb-6 flex items-center space-x-2 accent-sky-600">
                                <input
                                    name="terms"
                                    type="checkbox"
                                    id="termsAndConditons"
                                />
                                <label
                                    className="select-none text-sm font-medium"
                                    htmlFor="termsAndConditons"
                                >
                                    I accept all terms and conditions.
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="rounded-md btn bg-[#331A15] text-white hover:text-[#331A15] hover:border-[#331A15]"
                            >
                                Register
                            </button>
                        </form>
                    </div>
                    {errorMsg && (
                        <p className="text-red-700 bg-red-50 border border-red-100 px-4 py-1 w-fit rounded-md">
                            {errorMsg}
                        </p>
                    )}
                    <p>
                        Already have an account?{" "}
                        <Link
                            to={"/login"}
                            className="link-hover text-blue-600 underline font-semibold"
                        >
                            Signin
                        </Link>
                    </p>
                </div>
            </div>

            {/* Footer */}
            <Footer />
            <CopyRight />
        </>
    );
};

export default Register;
