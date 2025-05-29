import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageServices = () => {


     const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/services/all")
      .then((res) => {
        setServices(res.data);
      })
      .catch((err) => {
        console.error("Error fetching services:", err);
      });
  }, []);
     return (
          <div>
              <div className="overflow-x-auto w-full p-4">
      <table className="table table-zebra w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th>#</th>
            <th>Service Name</th>
            <th>Description</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className='text-black'>
          {services.map((service, index) => (
            <tr key={service._id}>
              <td>{index + 1}</td>
              <td>{service.servicename}</td>
              <td>{service.servicedescription}</td>
              <td>
                <img
                  src={`http://localhost:5000/${service.image}`}
                  alt="Service"
                  className="w-20 h-20 object-cover rounded"
                />
              </td>
              <td>
               <button
                    //   onClick={() => handleDoctorDelete(doctor._id)}
                      className="btn btn-xs"
                    >
                     EDIT
                    </button>
              </td>
              <td>
               <button
                    //   onClick={() => handleDoctorDelete(doctor._id)}
                      className="btn btn-xs"
                    >
                     DELETE
                    </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div> 
          </div>
     );
};

export default ManageServices;