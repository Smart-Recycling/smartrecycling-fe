import { useState } from "react";
import { Link } from "react-router-dom";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="container py-8 px-4 mx-auto max-w-screen lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex flex-col justify-center">
            <div className="flex flex-row gap-5 items-center xl:justify-start lg:justify-start md:justify-center sm:justify-center max-[640px]:justify-center">
              <img src="/logo.png" alt="Logo" width={40} height={40} />
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-textColor md:text-5xl lg:text-6xl">Join Us!</h1>
            </div>
            <p className="mb-4 mt-2 text-lg font-normal text-gray-500 lg:text-xl xl:text-start lg:text-start md:text-center sm:text-center max-[640px]:text-center">Please register your account first</p>
            <Link to={"/"} className="text-textColor hover:underline font-medium text-lg inline-flex items-center xl:justify-start lg:justify-start md:justify-center sm:justify-center max-[640px]:justify-center">
              Back to Home
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </Link>
          </div>
          <div>
            <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl">
              <h2 className="text-2xl font-bold text-textColor">Create Your Account</h2>
              <form className="mt-8 space-y-6" action="#">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-textColor">
                    Your email
                  </label>
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-textColor text-sm rounded-lg-blue-500 block w-full p-2.5" placeholder="name@gmail.com" required />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-textColor">
                    Your password
                  </label>
                  <div className="relative">
                    <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-textColor text-sm rounded-lg pr-10 block w-full p-2.5" required />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 px-3 pb-2 cursor-pointer text-textColor">
                      {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                    </button>
                  </div>
                </div>
                <button type="submit" className="w-full px-5 py-3 text-base font-medium text-center bg-primary hover:bg-green-700 text-white rounded-lg">
                  Sign Up your account
                </button>
                <div className="text-sm font-medium text-gray-900">
                  Already have account?{" "}
                  <a className="text-primary hover:underline" href="/signin">
                    Sign in account
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}