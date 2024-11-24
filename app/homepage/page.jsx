"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import { useAuth } from "../context/AuthProvider.jsx";  

const HomePage = () => {
  const { user } = useAuth();  // Access user from context
  const [authUser, setAuthUser] = useState(null);
  const user_token=sessionStorage.getItem("token")
  console.log("my_token.......................", user_token)

  console.log("user is from context...........................", user.userId)

  // Download certificate function
  const DownloadCertificate = () => {
    window.open("http://127.0.0.1:5555/download/cert", "_blank");
  };

  // Fetch user data when the user is authenticated
  useEffect(() => {
    if (user && user.userId) {
      fetch(`http://127.0.0.1:5555/user/${user.userId}`, {
        headers: {
          Authorization: `Bearer ${user.token}`, // Correct the Authorization header format
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error fetching user data.");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Logged-in user data:", data.access_token);
          setAuthUser(data); // Store user data in the state
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [user]); // Dependency array includes `user` to fetch when user info changes

  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex bg-gradient-to-r from-[#ffe5c8] to-white rounded-xl mt-10 flex-col items-center justify-center w-[1500px]">
        <div className="flex w-[1300px] bg-gradient-to-l from-[#ffe5c8] to-white rounded-xl mt-5 items-center justify-center">
          <Navbar />
        </div>

        <div className="grid grid-cols-2 gap-5 items-center mt-5 justify-center bg-inherit shadow-purple-300">
          <div className="flex flex-col mt-[50px] items-center h-full w-full">
            <div className="text-[#04031f] flex w-full h-full mt-[80px] ml-[200px] flex-col">
              <h1 className="flex items-center font-bold text-[25px]">
                Hi{" "}
                {authUser && (
                  <span className="ml-2 italic text-[25px]"> ~{authUser.name}~ </span>
                )}
              </h1>
              <h1 className="flex text-[50px] font-bold">Felix Here .</h1>
              <p className="flex italic">Product designer and digital content director working in design</p>
              <p className="flex italic">field for over two years being a fullstack engineer</p>

              <button
                onClick={DownloadCertificate}
                className="flex w-[200px] mt-[60px] items-center p-3 italic justify-center bg-gradient-to-l from-[#f79b32] to-[#ffe5c8] hover:bg-gradient-to-l hover:from-[#ff7113] hove:to-[#ffe5c8] rounded-md text-white font-bold"
              >
                Download Certificate
              </button>
            </div>
          </div>
          <div>
            <img src="/homePagePhoto.png" alt="homepage photo" />
          </div>
        </div>

        <div className="flex justify-center items-center h-[200px] w-full bg-gradient-to-l from-white">
          Lower section
        </div>
      </div>
    </div>
  );
};

export default HomePage;
