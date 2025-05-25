import React from "react";

const Products = () => {
  return (
    <div>
      <div className=" ">
        <h1 className="text-3xl text-center text-[#2C234D]  font-bold poppins-b sm:text-4xl py-2">
          Our Products
        </h1>

        <p className=" lg:text-xl text-center text-[#E0581E] font-semibold   sm:text-4xl py-2">
          WHAT TYPE OF PRODUCT WE CAN OFFER YOU
        </p>
      </div>

      <div class="w-full px-4">
        <div class="flex flex-wrap justify-center gap-2 pb-6 text-center">
          <button
            class="mytablinks bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md mb-1 active"
            onclick="openMytab(event, '12')"
          >
            ATCL Assembled Products
          </button>
          <button
            class="mytablinks bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md mb-1"
            onclick="openMytab(event, '7')"
          >
            CNC Machinery
          </button>
          <button
            class="mytablinks bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md mb-1"
            onclick="openMytab(event, '8')"
          >
            Communication Training Equipments
          </button>
          <button
            class="mytablinks bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md mb-1"
            onclick="openMytab(event, '9')"
          >
            Electrical Training Equipment
          </button>
          <button
            class="mytablinks bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md mb-1"
            onclick="openMytab(event, '13')"
          >
            Fuel Analysis Equipment
          </button>
          <button
            class="mytablinks bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md mb-1"
            onclick="openMytab(event, '11')"
          >
            High Voltage Lab Equipment
          </button>
          <button
            class="mytablinks bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md mb-1"
            onclick="openMytab(event, '1')"
          >
            Land Surveying Instrument
          </button>
          <button
            class="mytablinks bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md mb-1"
            onclick="openMytab(event, '10')"
          >
            Mechanical Heavy Machinery
          </button>
          <button
            class="mytablinks bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md mb-1"
            onclick="openMytab(event, '6')"
          >
            Test & Measuring Instrument
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
