import React, { useState } from "react";
import axios from "axios";
export const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    console.log(
      `Username: ${formData.username}\nPassword: ${formData.password}`
    );
    const data = {
      ...formData,
      expiresInMins: 30,
    };
    axios
      .post(`https://dummyjson.com/auth/login`,data)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  
     
  };
  
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-lg rounded-[25px]">
        <h2 className="text-3xl font-bold text-center text-[#343C6A] mb-4">
          Login
        </h2>
        <div className="mb-4">
          <label className="block text-2xl py-3 text-gray-700 font-semibold">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-3 py-3 border  rounded-[10px] focus:outline-none "
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-4 lg:w-[450px] h-[100px]">
          <label className="block text-2xl py-3 text-gray-700 font-semibold">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-3  rounded-[10px] focus:outline-none border "
            placeholder="Enter your password"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white mt-5  py-3 px-4 rounded-[10px] hover:bg-blue-600 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
};

// import React from "react";
// export const Login = () => {

//   return (
//     <div className="  pt-10 lg:w-[500px] lg:h-[500px] m-auto ">
//       <div className="text-center font-bold text-[#343C6A] text-[35px] pt-5 py-8">
//         <h1>Login Page</h1>
//       </div>
//       <div className="bg-gray-100 rounded-[25px] p-5 justify-center items-center m-auto ">
//         <div className="relative sm:w-auto w-[100%]  p-2">
//           <h1 className="p-2 text-[20px] text-[#343C6A]">User Name</h1>
//           <input
//             type="search"
//             id="default-search"
//             className=" px-6 lg:p-3 p-2.5  w-[100%] text-lm placeholder:text-[#718EBF]
//                         text-gray-900 border border-[#DFEAF2] rounded-[15px]  outline-none "
//             placeholder="E-mail or Username"
//             required
//           />
//         </div>
//         <div className="relative sm:w-auto w-[100%]  p-2">
//           <h1 className="p-2 text-[20px] text-[#343C6A]">Password</h1>

//           <input
//             type="search"
//             id="default-search"
//             className=" px-6 lg:p-3 p-2.5  w-[100%] text-lm placeholder:text-[#718EBF]
//                         text-gray-900 border border-[#DFEAF2] rounded-[15px]  outline-none "
//             placeholder="Pasword "
//             required
//           />
//         </div>
//         <div className="lg:text-center button ">
//           <button
//             type="button"
//             class="lg:mx-5 mt-5 text-white bg-[#1814E3] hover:bg-blue-800
//                    font-medium rounded-[15px] text-lm px-[45%] lg:px-[70px] py-2.5 lg:py-3.5  "
//           >
//             Login
//           </button>
//         </div>
//         <div className="text-center text-[15px] text-[#343C6A] pt-3 py-3">
//           <h1>Create your Account</h1>
//         </div>
//       </div>
//     </div>
//   );
// };
