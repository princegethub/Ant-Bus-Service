import React, { useEffect, useState } from "react";
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // API call to fetch users
   axios
     .get("https://ant-bus-service-backend.onrender.com/api/v1/user/userlist")
     .then(res => setUsers(res.data.data))
     .catch(err => console.error(err));
  }, []);

  return (
    <div className="w-full min-h-screen  bg-gray-100 p-8 py-20">
     

    <div className="mt-6 flex w-full b justify-between items-center">
    <div className="">
      <p style={{color: '#ea580c'}} className="text-xl font-bold  text-left text-orange-600 p relative inline-block">
        Users
        </p>
        </div>

        </div>

      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-orange-500 text-white">
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Aadhar</th>
              <th className="py-3 px-6 text-left">Phone</th>
              <th className="py-3 px-6 text-left">Village</th>
              <th className="py-3 px-6 text-left">Pickup Location</th>
              <th className="py-3 px-6 text-left">Gender</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Booking ID</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-b hover:bg-gray-100">
                <td className="py-2 px-6">{user.name}</td>
                <td className="py-2 px-6">{user.aadhar}</td>
                <td className="py-2 px-6">{user.phone}</td>
                <td className="py-2 px-6">{user.village}</td>
                <td className="py-2 px-6">{user.pickupLocation}</td>
                <td className="py-2 px-6">{user.gender}</td>
                <td className="py-2 px-6">{user.email}</td>
                <td className="py-2 px-6">{user.bookingId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
