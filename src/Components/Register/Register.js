import React from "react";
import './Register.css';
import img from '../../Images/undraw_Access_account_re_8spm.png'
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <section class="relative overflow-x-hidden">
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap items-center">
            <div class="w-full lg:w-2/6 px-4 mb-12 lg:mb-0">
              <div class="py-20 text-center">
                <a
                  class="inline-block mb-14 text-3xl font-bold font-heading"
                  href="/"
                >
                  {/* <img
                    class="h-9"
                    src="yofte-assets/logos/yofte-logo.svg"
                    alt=""
                    width="auto"
                  /> */}
                </a>
                <h3 class="mb-8 text-4xl md:text-5xl font-bold font-heading">
                  Signing up with social is super quick
                </h3>
                <p class="mb-10">Please, do not hesitate</p>
                <form action="">
                  <input
                    class="w-full mb-4 px-12 py-6 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                    type="text"
                    placeholder="steven@example.dev"
                  />
                  <input
                    class="w-full mb-4 px-12 py-6 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                    type="password"
                    placeholder="Password"
                  />
                  <input
                    class="w-full mb-10 px-12 py-6 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                    type="password"
                    placeholder="Repeat password"
                  />
                  <label class="flex" for="">
                    <input class="mr-4 mt-1" type="checkbox" />
                    <span class="text-sm">
                      By singning up, you agree to our Terms, Data Policy and
                      Cookies. <br />
                      Already have an account ? <NavLink to="/login" className="text-red-600 hover:underline">Login Here</NavLink>
                    </span>
                  </label>
                  <button class="mt-12 md:mt-16 bg-blue-800 hover:bg-blue-900 text-white font-bold font-heading py-5 px-8 rounded-md uppercase">
                    JOIN yofte
                  </button>
                </form>
              </div>
              {/* <img
                class="lg:hidden h-96 w-full object-cover"
                src={img}
                alt=""
              /> */}
            </div>
          </div>
        </div>
        <div class="hidden lg:block lg:absolute top-0 bottom-0 right-0 lg:w-3/6 bg-center bg-cover bg-no-repeat img-3"></div>
      </section>
    </div>
  );
};

export default Register;
