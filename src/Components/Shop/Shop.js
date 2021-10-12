import React from "react";

const Shop = () => {
  return (
    <div>
      <section class="py-20 bg-gray-100">
        <div class="container mx-auto px-4">
          <h2 class="mb-16 md:mb-24 text-4xl md:text-5xl font-bold font-heading">
            Discover our <span className="text-purple-800">products</span>
          </h2>
          <div class="flex flex-wrap -mx-4 mb-24">
            <div class="w-full md:w-1/2 lg:w-1/3 px-4 md:px-10 mb-20">
              <div class="p-6 bg-white">
                <span class="px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">
                  -15%
                </span>
                <a class="block px-6 mt-8 mb-2" href="/shop">
                  <img
                    class="mb-5 mx-auto h-56 w-full object-contain"
                    src="https://photo-cdn2.icons8.com/F57vhs906ZVLPONefR5q_pXfLtLyKTLFdQoXvn8U6h0/rs:fit:1606:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvNTg5L2I5OTBk/NTVkLTVmNWMtNDQ1/Ny04MmJmLTBhMDk2/MmM2ZTE1Yi5qcGc.jpg"
                    alt=""
                  />
                  <h3 class="mb-2 text-xl font-bold font-heading">
                    BRILE water filter
                  </h3>
                  <p class="text-lg font-bold font-heading text-blue-500">
                    <span>$29.89 </span>
                    <span class="text-xs text-gray-500 font-semibold font-heading line-through">
                      $33.69
                    </span>
                  </p>
                  <span>
                    <button
                      type="submit"
                      class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Add to cart
                    </button>
                  </span>
                </a>
                <a
                  class="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500"
                  href="/shop"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="5" width="2" height="12" fill="#161616"></rect>
                    <rect
                      x="12"
                      y="5"
                      width="2"
                      height="12"
                      transform="rotate(90 12 5)"
                      fill="#161616"
                    ></rect>
                  </svg>
                </a>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/3 px-4 md:px-10 mb-20">
              <div class="p-6 bg-white h-full">
                <span class="px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">
                  -10%
                </span>
                <a class="block px-6 mt-8 mb-2" href="/shop">
                  <img
                    class="mb-5 mx-auto h-56 w-full object-contain"
                    src="https://photo-cdn2.icons8.com/rJlsN7aSTuYO-zXG5ovsmosg2WdUVojnh5Lzwluk5BE/rs:fit:1606:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvOTUxLzg3MDQ5/Y2ViLTQ5NWItNDA3/Mi1hMTA1LTY2MWNm/M2JhYjZmYy5qcGc.jpg"
                    alt=""
                  />
                  <h3 class="mb-2 text-xl font-bold font-heading">
                    Bicycle S20
                  </h3>
                  <p class="text-lg font-bold font-heading text-blue-500">
                    <span>$14.30 </span>
                    <span class="text-xs text-gray-500 font-semibold font-heading line-through">
                      $15.90
                    </span>
                  </p>
                  <span>
                    <button
                      type="submit"
                      class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Add to cart
                    </button>
                  </span>
                </a>
                <a
                  class="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500"
                  href="/shop"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="5" width="2" height="12" fill="#161616"></rect>
                    <rect
                      x="12"
                      y="5"
                      width="2"
                      height="12"
                      transform="rotate(90 12 5)"
                      fill="#161616"
                    ></rect>
                  </svg>
                </a>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/3 px-4 md:px-10 mb-20 lg:mb-0">
              <div class="p-6 bg-white">
                <span class="px-2 py-1 text-xs font-bold font-heading border-2 border-blue-300 rounded-full text-blue-300 uppercase bg-white">
                  New
                </span>
                <a class="block px-6 mt-8 mb-2" href="/shop">
                  <img
                    class="mb-5 mx-auto h-56 w-full object-contain"
                    src="https://media.istockphoto.com/vectors/skateboard-template-realistic-black-and-white-skateboard-mockup-on-vector-id1222732029"
                    alt=""
                  />
                  <h3 class="mb-2 text-xl font-bold font-heading">
                    Kiteboard WH-004
                  </h3>
                  <p class="text-lg font-bold font-heading text-blue-500">
                    $199.90
                  </p>
                  <span>
                    <button
                      type="submit"
                      class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Add to cart
                    </button>
                  </span>
                </a>
                <a
                  class="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500"
                  href="/shop"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="5" width="2" height="12" fill="#161616"></rect>
                    <rect
                      x="12"
                      y="5"
                      width="2"
                      height="12"
                      transform="rotate(90 12 5)"
                      fill="#161616"
                    ></rect>
                  </svg>
                </a>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/3 px-4 md:px-10 mb-20 lg:mb-0">
              <div class="p-6 bg-white h-full">
                <span class="px-2 py-1 text-xs font-bold font-heading border-2 border-blue-300 rounded-full text-blue-300 uppercase bg-white">
                  New
                </span>
                <a class="block px-6 mt-8 mb-2" href="/shop">
                  <img
                    class="mb-5 mx-auto h-56 w-full object-contain"
                    src="https://photo-cdn2.icons8.com/hipsbn3C-9zbrFhPmvD8dfDFaWjteKE1Kg-0KmE0Ufc/rs:fit:715:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvNjg0L2RlMWJh/ODI5LTk2NzctNDIw/OC1hMDM0LTFlOWE1/YTQ0Y2E5OS5qcGc.jpg"
                    alt=""
                  />
                  <h3 class="mb-2 text-xl font-bold font-heading">
                    Backpack travel
                  </h3>
                  <p class="text-lg font-bold font-heading text-blue-500">
                    $29.89
                  </p>
                  <span>
                    <button
                      type="submit"
                      class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Add to cart
                    </button>
                  </span>
                </a>
                <a
                  class="ml-auto mr-4 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500"
                  href="/shop"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="5" width="2" height="12" fill="#161616"></rect>
                    <rect
                      x="12"
                      y="5"
                      width="2"
                      height="12"
                      transform="rotate(90 12 5)"
                      fill="#161616"
                    ></rect>
                  </svg>
                </a>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/3 px-4 md:px-10 mb-20 md:mb-0">
              <div class="p-6 bg-white">
                <span class="px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">
                  -15%
                </span>
                <a class="block px-6 mt-8 mb-2" href="/shop">
                  <img
                    class="mb-5 mx-auto h-56 w-full object-contain"
                    src="https://photo-cdn2.icons8.com/F57vhs906ZVLPONefR5q_pXfLtLyKTLFdQoXvn8U6h0/rs:fit:1606:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvNTg5L2I5OTBk/NTVkLTVmNWMtNDQ1/Ny04MmJmLTBhMDk2/MmM2ZTE1Yi5qcGc.jpg"
                    alt=""
                  />
                  <h3 class="mb-2 text-xl font-bold font-heading">
                    BRILE water filter
                  </h3>
                  <p class="text-lg font-bold font-heading text-blue-500">
                    <span>$29.89 </span>
                    <span class="text-xs text-gray-500 font-semibold font-heading line-through">
                      $33.69
                    </span>
                  </p>
                  <span>
                    <button
                      type="submit"
                      class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Add to cart
                    </button>
                  </span>
                </a>
                <a
                  class="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500"
                  href="/shop"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="5" width="2" height="12" fill="#161616"></rect>
                    <rect
                      x="12"
                      y="5"
                      width="2"
                      height="12"
                      transform="rotate(90 12 5)"
                      fill="#161616"
                    ></rect>
                  </svg>
                </a>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/3 px-4 md:px-10">
              <div class="p-6 bg-white h-full">
                <span class="px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">
                  -10%
                </span>
                <a class="block px-6 mt-8 mb-2" href="/shop">
                  <img
                    class="mb-5 mx-auto h-56 w-full object-contain"
                    src="https://media.istockphoto.com/photos/tennis-ball-picture-id105944907"
                    alt=""
                  />
                  <h3 class="mb-2 text-xl font-bold font-heading">
                    Tennis ball (2)
                  </h3>
                  <p class="text-lg font-bold font-heading text-blue-500">
                    <span>$14.30 </span>
                    <span class="text-xs text-gray-500 font-semibold font-heading line-through">
                      $15.90
                    </span>
                  </p>
                  <span>
                    <button
                      type="submit"
                      class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Add to cart
                    </button>
                  </span>
                </a>
                <a
                  class="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500"
                  href="/shop"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="5" width="2" height="12" fill="#161616"></rect>
                    <rect
                      x="12"
                      y="5"
                      width="2"
                      height="12"
                      transform="rotate(90 12 5)"
                      fill="#161616"
                    ></rect>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="text-center">
            <a
              class="inline-block bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-6 px-8 rounded-md uppercase"
              href="/"
            >
              Show More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
