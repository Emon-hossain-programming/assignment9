import React, { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../AuthProvaider/AuthContext";
import { toast } from "react-toastify";

const ServiceDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const finalData = data.find((s) => String(s.serviceId) === id);
  console.log(finalData);
  

  // Form state
  const [name, setName] = useState(user?.displayName || "");
  const [email, setEmail] = useState(user?.email || "");

  // Handle Book Service
  const handleBookService = (e) => {
    e.preventDefault();
    if (!name || !email) {
      toast.error("Please fill all fields");
      return;
    }
    toast.success(`Service "${finalData.serviceName}" booked successfully!`);
    setName("");
    setEmail("");
  };

  if (!finalData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-bold">Service not found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-100 via-indigo-100 to-purple-100 p-6">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8">

        {/* Service Image & Details */}
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <img
            src={finalData.image || "https://via.placeholder.com/400x250"}
            alt={finalData.title}
            className="w-full md:w-1/2 rounded-2xl shadow-lg"
          />
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">{finalData.title}</h2>
            <p className="text-gray-700 mb-2">{finalData.description}</p>
            <p className="text-gray-800 font-semibold ">Price: {finalData.price}</p>

            {/* JSON Data */}
            <pre className="bg-gray-100 p-4 rounded mt-4 overflow-x-auto text-sm">
              {JSON.stringify(finalData, null, 2)}
            </pre>
          </div>
        </div>

        {/* Book Service Form */}
        <div className="bg-white p-6 rounded-2xl shadow-md max-w-md mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center">Book This Service</h3>
          <form onSubmit={handleBookService} className="space-y-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="input input-bordered w-full rounded-lg"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="input input-bordered w-full rounded-lg"
              required
            />
            <button
              type="submit"
              className="btn btn-primary w-full rounded-full text-white text-lg"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
