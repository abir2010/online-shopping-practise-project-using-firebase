import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import imageSix from "../../Images/undraw_welcome_cats_thqn.png";

const Login = () => {
  const { user, signInUsingGoogle, logOut } = useAuth();
  return (
    <div>
      {user.email ? (
        <div className="flex justify-center">
          <div>
            <div className="flex gap-4 justify-center">
              <p className="text-center mt-4 font-bold">
                Hi,{" "}
                <span className="text-3xl text-purple-400">
                  {user.displayName}
                </span>
              </p>
              <button
                onClick={logOut}
                type="submit"
                class=" px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign Out
              </button>
            </div>
            <img className="" src={imageSix} alt="" />
          </div>
        </div>
      ) : (
        <main class="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
          <section>
            <h3 class="font-bold text-2xl">Welcome to Online-Shop</h3>
            <p class="text-gray-600 pt-2">Sign in to your account.</p>
          </section>

          <section class="mt-10">
            <form class="flex flex-col" method="POST" action="#">
              <div class="mb-6 pt-3 rounded bg-gray-200">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2 ml-3"
                  for="email"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                />
              </div>
              <div class="mb-6 pt-3 rounded bg-gray-200">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2 ml-3"
                  for="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                />
              </div>
              <div class="flex justify-end">
                <div class="text-sm text-purple-600 hover:text-purple-700 mb-6">
                  Forgot your password? <br />
                  New here ?{" "}
                  <NavLink
                    to="/register"
                    className="text-red-600 hover:underline"
                  >
                    Register Now
                  </NavLink>
                </div>
              </div>
              <button
                class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200 mb-4"
                type="submit"
              >
                Sign In
              </button>
            </form>
            <button
              onClick={signInUsingGoogle}
              class="w-full bg-green-400 hover:bg-green-500 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
              type="submit"
            >
              Sign In Using Google
            </button>
          </section>
        </main>
      )}
    </div>
  );
};

export default Login;
