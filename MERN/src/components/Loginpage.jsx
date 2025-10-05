import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Loginpage() {
  const navigate = useNavigate();

  // State for form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  // State for users fetched from backend
  const [users, setUsers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent form reload

    try {
      // Save user to backend
      const res = await fetch("http://localhost:3000/api/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    username: formData.name,
    useremail: formData.email,
  }),
});


      if (res.ok) {
        const savedUser = await res.json();
        console.log("User saved:", savedUser);
        navigate("/quizapp"); // redirect after login
      } else {
        console.log("Error saving user");
      }
    } catch (err) {
      console.error("Request failed:", err);
    }
  };

  // Fetch all users from backend
  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className="bg- flex flex-col justify-center items-center gap-5 m-4">
      <h2 className="text-white text-xl font-bold">Login Page</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-blue-200 flex flex-col justify-center items-center gap-6 py-5 px-6 m-5 max-w-2xl w-full rounded-lg shadow-md"
      >
        {/* Name Input */}
        <div className="grid-cols-1 m-2 space-x-3 justify-between w-1/1">
          <label className="bg-blue-950 text-white p-2 rounded-md mb-2 min-w-[40%]">
            User Name
          </label>
          <input
            type="text"
            className="bg-white p-2 border rounded-md min-w-[60%]"
            placeholder="Enter your name.."
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        {/* Email Input */}
        <div className="grid-cols-1 m-2 space-x-3 justify-between w-1/1">
          <label className="bg-blue-950 text-white p-2 rounded-md mb-2 min-w-[40%]">
            Email
          </label>
          <input
            type="email"
            className="bg-white p-2 border rounded-md min-w-[60%]"
            placeholder="Enter your email.."
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-800 text-white py-2 px-4 rounded-md w-1/2 hover:bg-blue-900 transition"
        >
          LOGIN
        </button>
      </form>
    </div>
  );
}

export default Loginpage;
