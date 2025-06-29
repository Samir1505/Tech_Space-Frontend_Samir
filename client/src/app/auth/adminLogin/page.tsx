"use client";

import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/app/context/AuthContext";

// import { signInWithPopup } from "firebase/auth";
// import { auth, googleProvider } from "@/firebaseconfigurations/config";




const AdminLoginPage: React.FC = () => {
 
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  // Form-based login
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      login(data.token, data.role);
      Cookies.set("adminToken", data.token);
      localStorage.setItem("adminToken", data.token);
      localStorage.setItem("user", JSON.stringify({ username: data.username, role: data.role }));

      toast.success("Login successful! Redirecting...");

      setTimeout(() => {
        router.push(data.role === "admin" ? "/Dashboard/adminDashboard" : "/Dashboard/userDashboard");
      }, 1500);
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Login failed!");
    } finally {
      setLoading(false);
    }
  };


  /// -----google login in user --------

//   const handleFirebaseGoogleLogin = async () => {
//   try {
//     const result = await signInWithPopup(auth, googleProvider);
   
//     const user = result.user;

//     console.log("User info:", user);

//     // Add user info to localStorage / redirect as needed
//     toast.success("Firebase Google login successful!");

//     setTimeout(() => {
//       router.push("/Dashboard/adminDashboard"); // ✅ Use Next.js router here
//     }, 1500);

//   } catch (error) {
//     console.error("Firebase error:", error);
//     toast.error("Firebase Google login failed!");
//   }
// };




  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <Toaster position="top-right" />
      <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="text-center mb-3">
          <Image
            src="/logo.jpg"
            alt="Krisha Logo"
            width={90}
            height={80}
            className="mb-3"
          />
          <p className="text-muted">Please login to continue</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>

          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-danger" disabled={loading}>
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </button>
          </div>

          <div className="text-end mb-2">
            <Link href="/auth/forgot-password" className="text-danger text-decoration-none">
              Forgot Password?
            </Link>
          </div>

          {/* <div className="d-grid gap-2 mb-3">
           
            <button className="btn btn-outline-danger" onClick={handleFirebaseGoogleLogin} type="button">
              Sign in with Google 
            </button>
          </div> */}

          <p className="text-center">
            <Link href="/" className="text-primary text-decoration-none">← Back to Home</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
