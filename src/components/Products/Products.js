import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Products = () => {
  const [categories, setCategories] = useState([]);

  const fetchServices = () => {
    axios
      .get("http://localhost:5000/api/categories/all")
      .then((res) => setCategories(res.data))
      .catch((err) => {
        console.error("Fetch error:", err);
        toast.error("Failed to fetch categories.");
      });
  };

  useEffect(() => {
    fetchServices();
  }, []);
  return (
    <div className="bg-gray-50">
      <div className=" ">
        <h1 className="text-3xl text-center text-[#1466C6]  font-bold poppins-b sm:text-4xl py-8">
          Our Products
        </h1>

        <p className=" lg:text-xl text-center text-[#1466C6] font-semibold   sm:text-4xl py-4">
          WHAT TYPE OF PRODUCT WE CAN OFFER YOU
        </p>  
      </div>

      <div className="w-full px-4">
        <div className="flex flex-wrap justify-center gap-2 pb-6 text-center">
          {categories.map((category) => (
            <button
              key={category._id}
              // onClick={() => handleCategoryClick(category._id)}
              className="text-white bg-[#1466C6] hover:bg-white hover:text-[#1466C6] font-medium py-2 px-4 rounded-md mb-1"
            >
              {category.categoryname}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
