import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { doc, getDoc, serverTimestamp } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { db } from '../Firebase/cofig.js'


function Login() {
  const [userName, setuserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const handleuserNameChange = (e) => {
    setuserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      if (userName.trim() !== '' && password.trim() !== '') {
        // Use the email to retrieve the document
        const documentRef = doc(db, 'users', userName);

        const docSnap = await getDoc(documentRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          const dbPass = data.password;
          const dbemail=data.email

          if (dbPass === password) {
            // Successful login
            localStorage.setItem('email', JSON.stringify(dbemail));
            console.log('Successful login');
            alert('Successful login');
            navigate('/');
          } else {
            alert('Invalid email or password');
          }
        } else {
          alert('User not found');
        }
      } else {
        alert('Please enter all the details');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Error during login. Please check your credentials.');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const userEmail = user.email;
      // console.log('Successful Google login', user);
      localStorage.setItem('email', JSON.stringify(userEmail));
      alert('Successful Google login');
      navigate('/');
    } catch (error) {
      console.error('Error during Google login:', error.message);
      alert('Error during Google login. Please try again.');
    }
  };

  return (
    <>
      <div className="bg-green-700 ">
        <div className="py-6 sm:py-8 lg:py-12 w-screen h-screen">
          <div className="mx-auto bg-white max-w-xl py-10 px-4  rounded-lg md:px-8 shadow-lg shadow-green-400">
            <h2 className="mb-4 text-center text-2xl font-bold text-green-600 md:mb-8 lg:text-3xl">Login</h2>

            <form className="mx-auto max-w-lg rounded-lg border">
              <div className="flex flex-col gap-4 p-4 md:p-8">
                <div>
                  <label htmlFor="userName" className="mb-2 inline-block text-sm text-green-600 sm:text-base">User Name</label>
                  <input
                    id="email"
                    type="email"
                    value={userName}
                    onChange={handleuserNameChange}
                    className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-300 transition duration-100 focus:ring"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="mb-2 inline-block text-sm text-green-600 sm:text-base">Password</label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-300 transition duration-100 focus:ring"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleLogin}
                  className="block rounded-lg bg-green-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-green-300 transition duration-100 hover:bg-green-700 focus-visible:ring active:bg-green-600 md:text-base"
                >
                  Log in
                </button>

                <div className="relative flex items-center justify-center">
                  <span className="absolute inset-x-0 h-px bg-green-300"></span>
                  <span className="relative bg-white px-4 text-sm text-green-600">Log in with social</span>
                </div>

                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  className="flex items-center justify-center gap-2 rounded-lg border border-green-300 bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-gray-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
                >
                  <svg className="h-5 w-5 shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Google icon paths go here */}
                  </svg>
                  Continue with Google
                </button>
              </div>

              <div className="flex items-center justify-center bg-green-100 p-4">
                <p className="text-center text-sm text-gray-500">Don't have an account? <Link to="/signup"> <a href="#" className="text-green-500 transition duration-100 hover:text-green-600 active:text-green-700">Register</a></Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
