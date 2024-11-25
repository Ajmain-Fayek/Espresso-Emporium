import { Link, useLoaderData } from "react-router";
import Header from "./Components/Header";
import { MdDelete } from "react-icons/md";
import { FaEye, FaPen } from "react-icons/fa";
import Swal from "sweetalert2";
import { useState } from "react";

function App() {
    const coffees = useLoaderData();
    const [coffee, setCoffee] = useState(coffees);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#EA4744",
            cancelButtonColor: "#D2B48C",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffees/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            setCoffee(coffee.filter((c) => c._id !== id));
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success",
                            });
                        } else {
                            Swal.fire({
                                title: "Failed!",
                                text: "SomeThing went wrong!",
                                icon: "error",
                            });
                        }
                    });
            }
        });
    };

    return (
        <>
            <Header />
            <h1 className="text-6xl text-purple-600 text-center">
                Total Coffees: {coffee.length}
            </h1>
            <Link
                to="/add-coffee"
                className="btn bg-red-900 text-gray-300 hover:bg-red-950"
            >
                Add Coffee
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-10 mx-auto max-w-screen-2xl px-2 gap-6">
                {coffee.map((c) => (
                    <div
                        key={c._id}
                        className="card rounded-md card-side shadow-md bg-[#F5F4F1]"
                    >
                        <figure>
                            <img src={c.photo} alt={c.name} />
                        </figure>
                        <div className="flex justify-between w-full mr-2">
                            <div className="flex flex-col justify-center gap-2">
                                <h2 className="card-title">{c.name}</h2>
                                <p>
                                    <b>Details:</b> {c.details}
                                </p>
                                <p>
                                    <b>Taste:</b> {c.taste}
                                </p>
                                <p>
                                    <b>Category:</b> {c.category}
                                </p>
                            </div>
                            <div className="flex flex-col justify-evenly">
                                <button className="btn bg-[#D2B48C] text-white hover:bg-[#c3976b]">
                                    <FaEye style={{ fontSize: "1.25rem" }} />
                                </button>
                                <Link
                                    to={`/update-coffee/${c._id}`}
                                    className="btn bg-[#3C393B] text-gray-200 hover:bg-[#555154]"
                                >
                                    <FaPen style={{ fontSize: "1.25rem" }} />
                                </Link>
                                <button
                                    onClick={() => handleDelete(c._id)}
                                    className="btn bg-[#EA4744] text-gray-200 hover:bg-[#b33533]"
                                >
                                    <MdDelete style={{ fontSize: "1.5rem" }} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default App;
