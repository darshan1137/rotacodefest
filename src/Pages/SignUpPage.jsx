import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { db } from '../Firebase/cofig.js'
import Navbar from './../Components/Navbar';

function SignUpPage() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const handleAddUser = async () => {
    if (userName.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
      if (password === confirmPassword) {
        const userDetails = {
          // userName: userName,
          email: email,
          password: password,
          createdAt: serverTimestamp(),
          visit:{'A':0,'B':0,'C':0},
        };

        try {
          // Use the email as the document ID
          const docRef = doc(db, 'users', userName);

          // Set the user details to Firestore
          await setDoc(docRef, userDetails);

          alert('User added successfully!');
          // Reset input fields after successful addition
          setUserName('');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          navigate('/login');
        } catch (error) {
          console.error('Error adding user:', error.message);
        }
      } else {
        alert('Passwords do not match!');
      }
    } else {
      alert('Please enter all details');
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
      navigate('/login');
    } catch (error) {
      console.error('Error during Google login:', error.message);
      alert('Error during Google login. Please try again.');
    }
  };
  return (
    <>
    <div><Navbar/></div>
       <div style={{ backgroundImage: `url(https://images.unsplash.com/photo-1572248525483-6a953490f4b5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`, backgroundSize: 'cover' }}>
      <div className="py-4 sm:py-6 lg:py-8 w-screen h-screen flex justify-center items-center sm:px-4">
      <div className="bg-white/60 max-w-md py-4 px-4 rounded-lg md:px-8 shadow-lg shadow-slate-200 sm:w-full">
        <h2 className="mb-4 text-center text-2xl font-bold text-teal-800 md:mb-8 lg:text-3xl">Signup</h2>
            <form className="mx-auto max-w-lg rounded-lg border border-teal-400 ">
              <div className="flex flex-col gap-4 p-2 md:p-6">
                <div>
                  <label htmlFor="user-name" className="mb-2 inline-block text-sm text-teal-800 sm:text-base">User name</label>
                  <input
                    id="user-name"
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full rounded border bg-gray-50 px-3 py-2 text-teal-800 outline-none ring-teal-500 transition duration-100 focus:ring"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 inline-block text-sm text-teal-800 sm:text-base">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-teal-500 transition duration-100 focus:ring"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="mb-2 inline-block text-sm text-teal-800 sm:text-base">Password</label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-teal-500 transition duration-100 focus:ring"
                  />
                </div>

                <div>
                  <label htmlFor="confirm-password" className="mb-2 inline-block text-sm text-teal-800 sm:text-base">Confirm password</label>
                  <input
                    id="confirm-password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-teal-500 transition duration-100 focus:ring"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleAddUser}
                  className="block rounded-lg bg-teal-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-teal-500 transition duration-100 hover:bg-teal-700 focus-visible:ring active:bg-teal-600 md:text-base"
                >
                  Sign up
                </button>

                <div className="relative flex items-center justify-center">
                  <span className="absolute inset-x-0 h-px bg-teal-300"></span>
                  <span className="relative bg-white px-4 text-sm text-teal-600">Sign up with social</span>
                </div>

                <button
                  type="button"
                  onClick={handleGoogleLogin}
                 className="flex items-center justify-center gap-2 rounded-lg border border-teal-300 bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-gray-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">
                  <svg className="h-5 w-5 shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    Google icon paths go here
                  </svg>

                  Continue with Google
                </button>
              </div>

              <div className="flex items-center justify-center bg-teal-100 p-4">
                <p className="text-center text-sm text-gray-500">Already have an account? <Link to="/login"> <a href="#" className="text-teal-500 transition duration-100 hover:text-teal-600 active:text-teal-700">Login</a></Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
