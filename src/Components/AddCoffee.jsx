import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import bg from "../assets/more/11.png";
import Swal from "sweetalert2";
import Footer from "./Footer";
import CopyRight from "./CopyRight";

const AddCoffee = () => {
    const handleForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.detais.value;
        const photo = form.photo.value;

        const obj = { name, chef, taste, category, details, photo, supplier };

        fetch("http://localhost:5000/coffees", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(obj),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success",
                        text: "Coffee added successfully",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    form.reset();
                }
            });
    };
    return (
        <>
            <div>
                <Helmet>
                    <title>Add Coffee</title>
                </Helmet>
                <Header />
            </div>
            <div
                style={{ backgroundImage: `url('${bg}')` }}
                className="bg-cover bg-top space-y-6 pt-6 mb-16"
            >
                <Link
                    to="/"
                    className="drop-shadow-2xl font-rancho flex items-center gap-1 text-lg max-w-screen-md mx-auto font-semibold px-6 sm:px-0"
                >
                    <FaArrowLeft style={{ fontSize: ".7rem" }} /> Back to home
                </Link>
                <div className="space-y-3 max-w-screen-md mx-auto bg-[#F4F3F0] px-6 py-12 rounded-lg">
                    <div className="text-center max-w-screen-sm mx-auto">
                        <h2 className="font-bold font-rancho text-2xl md:text-3xl mb-4">
                            Add New Coffee
                        </h2>
                        <p>
                            It is a long established fact that a reader will be
                            distraceted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using Content
                            here.
                        </p>
                    </div>
                    <div>
                        <form
                            onSubmit={handleForm}
                            className="space-y-3 max-w-screen-sm mx-auto"
                        >
                            <div className="flex gap-4 justify-center flex-col sm:flex-row">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text font-semibold text-lg">
                                            Coffee Name
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Coffee name"
                                        name="name"
                                        className="input input-bordered w-full"
                                    />
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text font-semibold text-lg">
                                            Chef
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Chef Name"
                                        name="chef"
                                        className="input input-bordered w-full"
                                    />
                                </label>
                            </div>
                            <div className="flex gap-4 justify-center flex-col sm:flex-row">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text font-semibold text-lg">
                                            Supplier
                                        </span>
                                    </div>
                                    <input
                                        name="supplier"
                                        type="text"
                                        placeholder="Cappu Authorizer"
                                        className="input input-bordered w-full"
                                    />
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text font-semibold text-lg">
                                            Taste
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        name="taste"
                                        placeholder="Sweet & Hot"
                                        className="input input-bordered w-full"
                                    />
                                </label>
                            </div>
                            <div className="flex gap-4 justify-center flex-col sm:flex-row">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text font-semibold text-lg">
                                            Category
                                        </span>
                                    </div>
                                    <input
                                        name="category"
                                        type="text"
                                        placeholder="Americano"
                                        className="input input-bordered w-full"
                                    />
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text font-semibold text-lg">
                                            Details
                                        </span>
                                    </div>
                                    <input
                                        name="detais"
                                        type="text"
                                        placeholder="Expresso with hot water"
                                        className="input input-bordered w-full"
                                    />
                                </label>
                            </div>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text font-semibold text-lg">
                                        Photo
                                    </span>
                                </div>
                                <input
                                    name="photo"
                                    type="text"
                                    placeholder="Photo URL"
                                    className="input input-bordered w-full"
                                />
                            </label>
                            <input
                                type="submit"
                                value="Add Coffee"
                                className="btn w-full bg-[#D2B48C] rounded-none"
                            />
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
            <CopyRight/>
        </>
    );
};

export default AddCoffee;
