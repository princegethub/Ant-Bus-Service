import React, { useState , useEffect } from "react";
import Video from "../assets/video/from bg.mp4";
import FreeBus from "../assets/Freebus.png";
import "../index.css";
import { Dialog } from "@mui/material";

import InputField from "../components/Booking/inputFiled";
import axios from "axios";



const BusBookingForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [availableSeats, setAvailableSeats] = useState(49); // 🔥 Change available seats

  const [users, setUsers] = useState([]);

  useEffect(() => {
    // API call to fetch users
   axios
     .get("https://ant-bus-service-backend.onrender.com/api/v1/user/userlist")
     .then(res => {
        setUsers(res.data.data);
        setAvailableSeats(49 - res.data.data.length);
     })
     .catch(err => console.error(err));
  }, []);




  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    village: "",
    pickupLocation: "",
    gender: "",
    aadhar: "",
    addharImage: null, // File Upload
  });
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (availableSeats === 0) {
      alert("All seats are booked. No more bookings allowed.");
    }
  }, [availableSeats]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      addharImage: file,
    }));
  };

  const handleVillageChange = (e) => {
    const village = e.target.value;
    let pickupLocation = "";
    switch (village) {
      case "Masand Garhi":
        pickupLocation = "Shiv Mandir, Ekhu Masand Garhi road, Time: 5:30 AM";
        break;
      case "Ekhu":
        pickupLocation = "Shiv Mandir, Ekhu Masand Garhi road, Time: 5:30 AM";
        break;
      default:
        pickupLocation = "";
    }
    setFormData((prevData) => ({
      ...prevData,
      village,
      pickupLocation,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.village ||
      !formData.gender ||
      !formData.aadhar ||
      !formData.addharImage
    ) {
      alert("Please fill all required fields");
      return;
    }

    if(formData.aadhar && formData.aadhar.length !== 12) {
      alert("Please enter a valid 12 digit aadhar number"); 
      return;
    }
    if(formData.phone && formData.phone.length !== 10) {
      alert("Please enter a valid 10 digit phone number");
      return;
    }
    if(formData.email && !formData.email.includes('@') && !formData.email.includes('.') && formData.email.length < 5) {
      alert("Please enter a valid email address");
      return;
    }
    if(formData.addharImage && formData.addharImage.size > 1024 * 1024 * 2) {
      alert("Please upload a file less than 2MB");
      return;
    }
    if(formData.addharImage && formData.addharImage.type !== 'application/pdf') {
      alert("Please upload a pdf file");
      return;
    }
   


    if (availableSeats === 0) {
      alert("Sorry, all seats are already booked.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      const { data } = await axios.post(
        "https://ant-bus-service-backend.onrender.com/api/v1/user/register",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log('data: ', data);

      console.log("Bus booked successfully: ", data);
      setIsSuccess(true);
      setSuccessMessage("");
      setSuccessDialogOpen(true);


       // Reduce available seats by 1
       setAvailableSeats((prevSeats) => prevSeats - 1);

      setFormData({
        name: "",
        phone: "",
        email: "",
        village: "",
        pickupLocation: "",
        gender: "",
        aadhar: "",
        addharImage: '',
      });
    } catch (error) {
      setSuccessMessage(error.response?.data?.message || "");
      console.error("Error while booking bus: ", error);
      setIsSuccess(false);
      setSuccessDialogOpen(true);
      setError("Failed to book the bus. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full h-full max-w-[100vw] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={Video}
        autoPlay
        loop
        muted
      ></video>

      <div className="relative mx-auto w-[80vw] lg:w-[95vw] lg:left-28 z-10  pt-14">
        <div className="py-10">
          <section className="contact_section  w-full">
            <div className=" w-[100w]">
              <form onSubmit={handleSubmit} className="mt-6 flex ">
                <div className="contact_form w-[100%] sm:w-full py-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-3xl font-bold text-orange-900">
                      Book Your Seat
                    </h2>
                    <h2 className="text-3xl font-bold text-green-900">
                    Available seat: {availableSeats}

                    </h2>
                  </div>

                  <div className="form_group mb-6 mt-2 ">
                    <select
                      name="village"
                      value={formData.village}
                      onChange={handleVillageChange}
                      className="w-full px-4 py-3 outline-none focus:outline-none  text-gray-700 bg-gray-100 border-2 border-dotted border-orange-600 rounded-lg"
                      required
                    >
                      <option value="">Select Village</option>
                      <option value="Masand Garhi">Masand Garhi</option>
                      <option value="Ekhu">Ekhu</option>
                    </select>
                  </div>

                  <div className="name_email_form flex flex-wrap gap-4 mb-6">
                    <div className="form_group flex-1 min-w-[calc(50%-10px)]">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-gray-700 bg-gray-100 border-2 border-dotted border-orange-600 rounded-lg focus:outline-none"
                        placeholder="Name"
                        required
                      />
                    </div>

                    <div className="form_group flex-1 min-w-[calc(50%-10px)]">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-gray-700 bg-gray-100 border-2 border-dotted border-orange-600 rounded-lg focus:outline-none"
                        placeholder="Phone Number"
                        required
                      />
                    </div>
                  </div>

                  <div className="form_group flex-1 mb-6 min-w-[calc(50%-10px)]">
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-gray-700 bg-gray-100 border-2 border-dotted border-orange-600 rounded-lg focus:outline-none"
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form_group mb-6">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-gray-700 bg-gray-100 border-2 border-dotted border-orange-600 rounded-lg focus:outline-none"
                      placeholder="Email"
                      required
                    />
                  </div>

                  <div className="name_email_form flex flex-wrap gap-4 mb-6">
                    <div className="form_group flex-1 min-w-[calc(50%-10px)]">
                      <input
                        type="text"
                        name="aadhar"
                        value={formData.aadhar}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-gray-700 bg-gray-100 border-2 border-dotted border-orange-600 rounded-lg focus:outline-none"
                        placeholder="Aadhar Number"
                        required
                      />
                    </div>
                  </div>

                  <div className="form_group mb-6">
                    <input
                      type="text"
                      name="pickupLocation"
                      value={formData.pickupLocation}
                      readOnly
                      className="w-full px-4 py-3 text-gray-700 bg-gray-100 border-2 border-dotted border-orange-600 rounded-lg focus:outline-none"
                      placeholder="Pickup Location"
                    />
                  </div>

                  <div className="form_group mb-6">
                  
                    <input
                      type="file"
                      name="addharImage"
                      placeholder="Upload Aadhar Image"
                      onChange={handleFileChange}
                      className="w-full px-4 py-3 text-gray-700 bg-gray-100 border-2 border-dotted border-orange-600 rounded-lg focus:outline-none"
                      accept=".pdf"
                      required
                    />
                   Upload addhar pdf
                  </div>

                  <button
                    type="submit"
                    className="button-86 w-1/4 px-6 py-3 mt-0 text-white bg-orange-600 hover:scale-110 transition rounded-lg"
                    disabled={loading}
                  >
                    {loading ? "Booking..." : "Book My Seat"}
                  </button>

                  {error && <p className="text-red-600 mt-2">{error}</p>}
                </div>

                <div className="free-bus hidden lg:flex items-center overflow-visible">
                  <img
                    src={FreeBus}
                    alt=""
                    className="h-auto w-full animate-bus"
                    style={{ maxWidth: "800px", transform: "translateX(-20%)" }}
                  />
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>

      <Dialog
        open={successDialogOpen}
        onClose={() => setSuccessDialogOpen(false)}
      >
        <div className="p-4 border-2 border-orange-600 ">
          <h2
            className={`text-xl font-bold ${
              isSuccess ? "text-green-600" : "text-red-600"
            }`}
          >
            {isSuccess ? "Success" : "Error"}
          </h2>
          <p>
            {isSuccess
              ? "Your bus has been booked successfully. We will send you a confirmation email shortly."
              : `Sorry, your bus has not been booked successfully. Please try again. ${successMessage}`}
          </p>
          <button
            onClick={() => setSuccessDialogOpen(false)}
            className="mt-4 px-4 py-2 bg-orange-500 rounded-lg"
          >
            OK
          </button>
        </div>
      </Dialog>
    </div>
  );
};

export default BusBookingForm;
