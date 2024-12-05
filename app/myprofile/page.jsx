"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthProvider";
import { useRouter } from "next/navigation";

const UserProfile = () => {
  const profileInputRef = useRef();
  const router = useRouter();
  const { user } = useAuth();
  const { setUser } = useAuth();

  const [profilePicture, setProfilePicture] = useState(null);
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    description: "Add a simple description to describe your profile",
    image_url: "", // Add image_url field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevProfileData) => ({
      ...prevProfileData,
      [name]: value,
    }));
  };

  const handleLogOut = () => {
    if (user && user.userId) {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("id");

      console.log("Successfully logged out!");
      router.push("/");
    }
  };

  useEffect(() => {
    if (user && user.userId) {
      fetch(`http://127.0.0.1:5555/user/${user.userId}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error while fetching data");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Profile data:", data);
          setProfileData(data);
        })
        .catch((error) => {
          console.error("Error fetching your data", error);
        });
    }
  }, [user]);

  const handleEPatch = (e) => {
    
    if (user && user.userId) {
      fetch(`http://127.0.0.1:5555/user/${user.userId}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profileData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to edit your profile");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Updated profile data:", data);
          setUser(data);
        })
        .catch((error) => {
          console.error("Failed to edit your profile", error);
        });
    }
  };

  const triggerFileInput = () => {
    profileInputRef.current.click();
  };

  const handlePictureInput = (e) => {
    const file = e.target.files[0];
    if (file){(console.error("cannot upload more than one file", error))}
    else if (!file) return;


    const imageFormData = new FormData();
    imageFormData.append("file", file);
    imageFormData.append("upload_preset", "yqanaohn");
    imageFormData.append("cloud_name", "dnowgdk4r");

    // Upload image to Cloudinary
    fetch("https://api.cloudinary.com/v1_1/dnowgdk4r/image/upload", {
      method: "POST",
      body: imageFormData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error uploading image");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Uploaded image URL:", data.secure_url);
        setProfilePicture(data.secure_url);
        setProfileData((prevData) => ({
          ...prevData,
          image_url: data.secure_url, // Update image_url in the form data
        }));
      })
      .catch((error) => {
        console.error("Failed to upload image", error);
      });
  };

  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex bg-gradient-to-r from-[#101025] to-[#16163a] rounded-xl mt-10 flex-col items-center justify-center w-[1500px] ">
        <div className="flex w-[1300px] bg-gradient-to-l from-[#fff2e2] to-white rounded-xl mt-5 items-center justify-center">
          <Navbar />
        </div>
        <div className="flex w-full items-center  ">
          <div className="flex items-center justify-center rounded-full bg-gray-300 p-1 ml-[100px] mt-[30px] border border-green-700">
            <img
              src={profileData.image_url || "/tom.png"}
              alt="Profile"
              className="h-[150px] rounded-full w-[150px]"
            />
          </div>
          <button
            onClick={triggerFileInput}
            className="flex items-center p-3 justify-center w-[330px] bg-gradient-to-r from-[#ffa569] to-[#ffe5c8] ml-[55px] italic rounded-md"
          >
            Edit profile picture
          </button>
          <input
            ref={profileInputRef}
            type="file"
            accept="image/*"
            onChange={handlePictureInput}
            className="hidden"
          />
          <button
            className="flex items-center p-3 justify-center w-[330px] border bg-gradient-to-l from-[#ffe5c8] to-white border-red-600 ml-[45px] italic rounded-md"
          >
            Delete profile picture
          </button>
          <button
            onClick={handleLogOut}
            className="flex items-center p-3 justify-center w-[330px] bg-gradient-to-r from-[#ffa569] to-[#ffe5c8] ml-[45px] italic rounded-md"
          >
            Sign out
          </button>
        </div>
        <form
          onSubmit={handleEPatch}
          className="flex gap-5 text-white bg-inherit flex-col w-full mt-10 items-center justify-center"
        >
          <div className="flex flex-col">
            <label className="ml-2 text-sm" htmlFor="name">
              My Profile Username
            </label>
            <input
              onChange={handleChange}
              value={profileData.name}
              className="flex bg-inherit border border-gray-400 mt-3 w-[1300px] rounded-md p-3 text-sm italic outline-none"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col">
            <label className="ml-2 text-sm" htmlFor="email">
              My Email Address
            </label>
            <input
              onChange={handleChange}
              value={profileData.email}
              className="flex w-[1300px] bg-inherit border border-gray-400 mt-3 rounded-md p-3 text-sm italic outline-none"
              type="text"
              name="email"
            />
          </div>
          <div className="flex flex-col">
            <label className="ml-2 text-sm" htmlFor="description">
              A short description about me
            </label>
            <textarea
              onChange={handleChange}
              value={profileData.description}
              className="flex h-[150px] bg-inherit border border-gray-400 mt-3 w-[1300px] rounded-md p-3 text-sm italic outline-none"
              name="description"
            />
          </div>
          <div className="flex w-full items-center">
            <button
              type="submit"
              className="flex items-center p-3 justify-center w-[250px] bg-gradient-to-l from-[#ffa569] to-[#ffe5c8] ml-[73.4%] mb-10 italic rounded-md"
            >
              Commit changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
