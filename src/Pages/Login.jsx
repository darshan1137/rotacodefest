import React, { useState } from "react";
// import '../App.css'
import { Link, useNavigate } from "react-router-dom";
import { doc, getDoc, serverTimestamp } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { db } from "../Firebase/cofig";
import Navbar from "./../Components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Components/Footer";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // Default role is user
  const navigate = useNavigate();
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleLogin = async () => {
    try {
      if (userName.trim() !== "" && password.trim() !== "") {
        // Use the email to retrieve the document based on selected role
        const documentRef = doc(
          db,
          role === "admin" ? "admin" : "users",
          userName
        );

        const docSnap = await getDoc(documentRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          const dbPass = data.password;
          const dbEmail = data.email;

          if (dbPass === password) {
            // Successful login
            if (role === "admin") {
              localStorage.setItem("isAdmin", true);
              localStorage.setItem("username", userName);
              localStorage.setItem("email", dbEmail);
            } else {
              localStorage.setItem("isAdmin", false);
              localStorage.setItem("username", userName);
              localStorage.setItem("email", dbEmail);
            }
            toast.success("Successful login", 1000);
            navigate("/");
          } else {
            toast.error("Invalid email or password", 1000);
          }
        } else {
          toast.error("User not found", 1000);
        }
      } else {
        toast.error("Please enter all the details", 1000);
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Error during login. Please check your credentials.", 1000);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const userEmail = user.email;
      // console.log('Successful Google login', user);
      localStorage.setItem("email", JSON.stringify(userEmail));
      toast.success("Successful Google login", 1000);
      navigate("/");
    } catch (error) {
      console.error("Error during Google login:", error.message);
      toast.error("Error during Google login. Please try again.", 1000);
    }
  };

  return (
    <div className="overflow-hidden">
      <div>
        <Navbar />
      </div>
      <ToastContainer />
      <div
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1572248525483-6a953490f4b5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          backgroundSize: "cover",
        }}
      >
        <div className="py-6 sm:py-8 lg:py-12 w-screen h-screen flex justify-center items-center ">
          <div className="bg-white/60 max-w-md py-6 px-4 rounded-lg md:px-8 shadow-lg shadow-slate-200 sm:w-full">
            <h2 className="mb-4 text-center text-2xl font-bold text-teal-800 md:mb-8 lg:text-3xl">
              Login
            </h2>

            <form className="mx-auto max-w-lg rounded-lg border border-teal-400">
              <div className="flex flex-col gap-4 p-4 md:p-8">
                <div>
                  <label
                    htmlFor="userName"
                    className="mb-2 inline-block text-md text-teal-800 sm:text-base "
                  >
                    User Name
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={userName}
                    onChange={handleUserNameChange}
                    className="w-full rounded border bg-gray-50 px-3 py-2 text-teal-800 outline-none ring-teal-500 transition duration-100 focus:ring"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 inline-block text-sm text-teal-800 sm:text-base"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-teal-500 transition duration-100 focus:ring"
                  />
                </div>
                <div>
                  <label
                    htmlFor="role"
                    className="mb-2 inline-block text-sm text-teal-800 sm:text-base"
                  >
                    Role
                  </label>
                  <select
                    id="role"
                    value={role}
                    onChange={handleRoleChange}
                    className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-teal-500 transition duration-100 focus:ring"
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>

                <button
                  type="button"
                  onClick={handleLogin}
                  className="block rounded-lg bg-teal-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-teal-500 transition duration-100 hover:bg-teal-700 focus-visible:ring active:bg-teal-600 md:text-base"
                >
                  Log in
                </button>

                <div className="relative flex items-center justify-center">
                  <span className="absolute inset-x-0 h-px bg-teal-300"></span>
                  <span className="relative bg-slate-50 px-4 text-sm text-teal-500">
                    Log in with social
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  className="flex items-center justify-center gap-2 rounded-lg border border-teal-300 bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-gray-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
                >
                  <svg
                    className="h-5 w-5 shrink-0"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    Google icon paths go here
                  </svg>
                  Continue with Google
                </button>
              </div>

              <div className="flex items-center justify-center bg-teal-100 p-4">
                <p className="text-center text-sm text-gray-500">
                  Don't have an account?{" "}
                  <Link to="/signup">
                    {" "}
                    <a className="text-teal-500 transition duration-100 hover:text-teal-600 active:text-teal-700">
                      Register
                    </a>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
