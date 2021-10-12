import React from "react";
import image from '../../Images/undraw_shopping_app_flsj.png';
import './Home.css';

const Home = () => {
  return (
    <div>
      <section class="relative">
        <div class="relative container mx-auto px-4">
          <img
            class="absolute bottom-0 inset-x-0 w-full h-80 -mb-16 lg:mb-0 md:h-full object-cover"
            src={image}
            alt=""
          />
          <div class="hidden lg:flex absolute right-0 top-1/2 transform -translate-y-1/2 flex-col items-center">
            <span class="mb-5 font-bold font-heading">01</span>
            <div class="mb-5 h-16 w-px bg-gray-100"></div>
            <button class="mb-5">
              <img src="yofte-assets/elements/circle.svg" alt="" />
            </button>
            <button class="mb-6 w-1 h-1 bg-blue-500 rounded-full"></button>
            <button class="mb-6 w-1 h-1 bg-blue-500 rounded-full"></button>
            <div class="h-16 w-px bg-gray-100"></div>
          </div>
          <div class="relative flex flex-wrap -mx-4">
            <div class="w-full md:w-1/2 px-4 mb-12 lg:mb-0 pt-20 lg:pt-32 pb-32 lg:pb-64">
              <div class="max-w-md">
                <h2 class="mb-8 text-5xl lg:text-6xl font-semibold font-heading">
                  Welcome to you to our <span className="text-purple-800">online shopping</span> site
                </h2>
                <p class="mb-20 text-lg text-gray-600">
                  Discover more products and inspiration.
                </p>
                <a
                  class="inline-block bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-6 px-8 rounded-md uppercase transition duration-200"
                  href="/"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="relative bg-gray-100 py-20">
          <div class="container mx-auto px-4">
            <div class="flex lg:-mt-52 mb-20 flex-wrap justify-center">
              <div class="img-1 relative h-64 w-full lg:w-96 mb-6 lg:mb-0 lg:mr-6 bg-no-repeat bg-cover bg-right">
                <a class="absolute inset-0 flex items-end" href="/">
                  <div class="pl-12 pb-12">
                    <h3 class="text-3xl font-bold font-heading text-white">
                      LIFE Bottle 2.0
                    </h3>
                    <p class="text-xl text-white font-bold font-heading">
                      <span>$10.30</span>
                      <span class="text-sm font-normal line-through">
                        11.99
                      </span>
                    </p>
                  </div>
                </a>
              </div>
              <div class="img-2 relative h-64 w-full lg:w-96 bg-no-repeat bg-cover">
                <a class="absolute inset-0 flex items-end" href="/">
                  <div class="pl-12 pb-12">
                    <h3 class="text-3xl font-bold font-heading text-white">
                      Bicycle S20
                    </h3>
                    <p class="text-xl text-white font-bold font-heading">
                      <span>$10.30</span>
                      <span class="text-sm font-normal line-through">
                        11.99
                      </span>
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div class="max-w-5xl mx-auto flex flex-wrap items-center justify-center -mb-12">
              <div class="w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-12">
                <img
                  class="mx-auto h-6"
                  src="yofte-assets/brands/exxon.svg"
                  alt=""
                />
              </div>
              <div class="w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-12">
                <img
                  class="mx-auto h-6"
                  src="yofte-assets/brands/ea-sports.svg"
                  alt=""
                />
              </div>
              <div class="w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-12">
                <img
                  class="mx-auto h-6"
                  src="yofte-assets/brands/eurosport.svg"
                  alt=""
                />
              </div>
              <div class="w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-12">
                <img
                  class="mx-auto h-6"
                  src="yofte-assets/brands/nike.svg"
                  alt=""
                />
              </div>
              <div class="w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-12">
                <img
                  class="mx-auto h-6"
                  src="yofte-assets/brands/aol.svg"
                  alt=""
                />
              </div>
              <div class="w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-12">
                <img
                  class="mx-auto h-6"
                  src="yofte-assets/brands/north-face.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
