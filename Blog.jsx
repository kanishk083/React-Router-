import React from 'react'

const Blog = () => {
  return (
    <div class="bg-purple-100 min-h-screen p-4 font-sans">
      <div class="max-w-4xl max-lg:max-w-2xl max-sm:max-w-sm mx-auto">
        <h2 class="text-2xl font-extrabold text-gray-800 mb-8">Explore Posts</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="bg-white rounded-2xl p-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 512 512">
              <g fill-rule="evenodd" clip-rule="evenodd">
                <path fill="#ff405c" d="M255.997.007c-141.156 0-256 114.844-256 256 0 141.16 114.844 256 256 256 141.16 0 256.004-114.84 256.004-256C512 114.851 397.157.007 255.997.007z" data-original="#ff405c" />
                <path fill="#d01273" d="M269.845 511.629c110.122-5.9 201.974-81.716 231.869-183.747l-99.461-99.461a12.002 12.002 0 0 0-1.223-1.135l-137.504-110.9a11.994 11.994 0 0 0-15.061 0l-137.5 110.9a12.01 12.01 0 0 0-3.788 13.337 12.008 12.008 0 0 0 3.109 4.757l39.179 39.186v101.722a11.97 11.97 0 0 0 3.796 8.758z" data-original="#d01273" />
                <path fill="#fff" d="M350.528 224.627c-6.632 0-11.999 5.372-11.999 11.999V374.29h-35.472v-93.423c0-6.627-5.367-11.999-11.999-11.999H220.94c-6.631 0-11.999 5.372-11.999 11.999v93.423h-35.472V236.626c0-6.627-5.372-11.999-11.999-11.999h-8.983l103.509-83.484 103.514 83.484zm50.503 2.659-137.504-110.9a11.992 11.992 0 0 0-15.06 0l-137.5 110.9a12.01 12.01 0 0 0-3.788 13.337 12.008 12.008 0 0 0 11.318 8.006h30.97v137.66c0 6.627 5.372 12.003 12.003 12.003h59.469c6.619 0 11.999-5.376 11.999-12.003v-93.423h46.12v93.423c0 6.627 5.38 12.003 11.999 12.003h59.47c6.631 0 12.003-5.376 12.003-12.003v-137.66h30.97c5.088 0 9.619-3.209 11.318-8.006a12.009 12.009 0 0 0-3.787-13.337z" data-original="#ffffff" />
              </g>
            </svg>
            <div class="mt-6">
              <h3 class="text-lg font-bold text-gray-800 mb-3">Fresh Insights</h3>
              <p class="text-gray-800 text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum reprehenderit in voluptate velit esse cillum dolore...</p>
              <div class="mt-6">
                <button type="button" class="flex items-center flex-wrap justify-between gap-2 border rounded-3xl pl-5 pr-3 h-14 w-full hover:bg-purple-100 transition-all duration-300">
                  Explore
                  <div class="w-11 h-11 rounded-full bg-purple-200 flex justify-center items-center">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <mask x="0" y="0" width="18" height="18">
                        <rect width="18" height="18" fill="#D9D9D9"></rect>
                      </mask>
                      <g mask="url(#mask0_2085_52)">
                        <path d="M12.1313 9.75H3V8.25H12.1313L7.93125 4.05L9 3L15 9L9 15L7.93125 13.95L12.1313 9.75Z" fill="#222222"></path>
                      </g>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24">
              <g data-name="Layer 2">
                <path fill="#54d6c0" d="M23 5.675h-3.3a.825.825 0 0 0-.825.825v14.85a2.475 2.475 0 0 0 4.95 0V6.5A.825.825 0 0 0 23 5.675z" data-original="#54d6c0" />
                <path fill="#1f95f8" d="M21.735 23.726a.744.744 0 0 1-.385.099H4.3A4.126 4.126 0 0 1 .175 19.7V2.1A1.934 1.934 0 0 1 2.1.175h16.5A1.934 1.934 0 0 1 20.525 2.1v19.943a1.771 1.771 0 0 0 1.21 1.683z" data-original="#1f95f8" />
                <g fill="#fff" transform="matrix(1.1 0 0 1.1 -1.2 -1.2)">
                  <rect width="5.5" height="5.5" x="4.25" y="4.75" data-original="#ffffff" rx=".75" />
                  <path d="M16 6.75h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 0 1.5zm0 3h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 0 1.5zm0 4H5a.75.75 0 0 1 0-1.5h11a.75.75 0 0 1 0 1.5zm0 3H5a.75.75 0 0 1 0-1.5h11a.75.75 0 0 1 0 1.5zm0 3H5a.75.75 0 0 1 0-1.5h11a.75.75 0 0 1 0 1.5z" data-original="#ffffff" />
                </g>
              </g>
            </svg>
            <div class="mt-6">
              <h3 class="text-lg font-bold text-gray-800 mb-3">Trending Now</h3>
              <p class="text-gray-800 text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum reprehenderit in voluptate velit esse cillum dolore...</p>
              <div class="mt-6">
                <button type="button" class="flex items-center flex-wrap justify-between gap-2 border rounded-3xl pl-5 pr-3 h-14 w-full hover:bg-purple-100 transition-all duration-300">
                  Explore
                  <div class="w-11 h-11 rounded-full bg-purple-200 flex justify-center items-center">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <mask x="0" y="0" width="18" height="18">
                        <rect width="18" height="18" fill="#D9D9D9"></rect>
                      </mask>
                      <g mask="url(#mask0_2085_52)">
                        <path d="M12.1313 9.75H3V8.25H12.1313L7.93125 4.05L9 3L15 9L9 15L7.93125 13.95L12.1313 9.75Z" fill="#222222"></path>
                      </g>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 512 512">
              <path fill="#64b5f6"
                d="m0 192 246.528 156.896c2.816 2.08 6.144 3.104 9.472 3.104s6.656-1.024 9.472-3.104L512 192 265.6 3.2a16.032 16.032 0 0 0-19.2 0L0 192z"
                data-original="#64b5f6" />
              <path fill="#eceff1"
                d="M416 0H96C78.368 0 64 14.368 64 32v352c0 8.832 7.168 16 16 16h352c8.832 0 16-7.168 16-16V32c0-17.632-14.336-32-32-32z"
                data-original="#eceff1" />
              <path fill="#90a4ae"
                d="M144 96h224c8.832 0 16-7.168 16-16s-7.168-16-16-16H144c-8.832 0-16 7.168-16 16s7.168 16 16 16zm224 32H144c-8.832 0-16 7.168-16 16s7.168 16 16 16h224c8.832 0 16-7.168 16-16s-7.168-16-16-16zm-96 64H144c-8.832 0-16 7.168-16 16s7.168 16 16 16h128c8.832 0 16-7.168 16-16s-7.168-16-16-16z"
                data-original="#90a4ae" />
              <path fill="#1e88e5"
                d="M265.472 348.896c-2.816 2.08-6.144 3.104-9.472 3.104s-6.656-1.024-9.472-3.104L0 192v288c0 17.664 14.336 32 32 32h448c17.664 0 32-14.336 32-32V192L265.472 348.896z"
                data-original="#1e88e5" />
              <path fill="#2196f3"
                d="M480 512H32c-17.952 0-32-14.048-32-32a16.02 16.02 0 0 1 6.528-12.896l240-160c2.816-2.08 6.144-3.104 9.472-3.104s6.656 1.024 9.472 3.104l240 160A16.02 16.02 0 0 1 512 480c0 17.952-14.048 32-32 32z"
                data-original="#2196f3" />
            </svg>
            <div class="mt-6">
              <h3 class="text-lg font-bold text-gray-800 mb-3">Daily Highlights</h3>
              <p class="text-gray-800 text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum reprehenderit in voluptate velit esse cillum dolore...</p>
              <div class="mt-6">
                <button type="button" class="flex items-center flex-wrap justify-between gap-2 border rounded-3xl pl-5 pr-3 h-14 w-full hover:bg-purple-100 transition-all duration-300">
                  Explore
                  <div class="w-11 h-11 rounded-full bg-purple-200 flex justify-center items-center">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <mask x="0" y="0" width="18" height="18">
                        <rect width="18" height="18" fill="#D9D9D9"></rect>
                      </mask>
                      <g mask="url(#mask0_2085_52)">
                        <path d="M12.1313 9.75H3V8.25H12.1313L7.93125 4.05L9 3L15 9L9 15L7.93125 13.95L12.1313 9.75Z" fill="#222222"></path>
                      </g>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 512 512">
              <path fill="#64b5f6"
                d="m0 192 246.528 156.896c2.816 2.08 6.144 3.104 9.472 3.104s6.656-1.024 9.472-3.104L512 192 265.6 3.2a16.032 16.032 0 0 0-19.2 0L0 192z"
                data-original="#64b5f6" />
              <path fill="#eceff1"
                d="M416 0H96C78.368 0 64 14.368 64 32v352c0 8.832 7.168 16 16 16h352c8.832 0 16-7.168 16-16V32c0-17.632-14.336-32-32-32z"
                data-original="#eceff1" />
              <path fill="#90a4ae"
                d="M144 96h224c8.832 0 16-7.168 16-16s-7.168-16-16-16H144c-8.832 0-16 7.168-16 16s7.168 16 16 16zm224 32H144c-8.832 0-16 7.168-16 16s7.168 16 16 16h224c8.832 0 16-7.168 16-16s-7.168-16-16-16zm-96 64H144c-8.832 0-16 7.168-16 16s7.168 16 16 16h128c8.832 0 16-7.168 16-16s-7.168-16-16-16z"
                data-original="#90a4ae" />
              <path fill="#1e88e5"
                d="M265.472 348.896c-2.816 2.08-6.144 3.104-9.472 3.104s-6.656-1.024-9.472-3.104L0 192v288c0 17.664 14.336 32 32 32h448c17.664 0 32-14.336 32-32V192L265.472 348.896z"
                data-original="#1e88e5" />
              <path fill="#2196f3"
                d="M480 512H32c-17.952 0-32-14.048-32-32a16.02 16.02 0 0 1 6.528-12.896l240-160c2.816-2.08 6.144-3.104 9.472-3.104s6.656 1.024 9.472 3.104l240 160A16.02 16.02 0 0 1 512 480c0 17.952-14.048 32-32 32z"
                data-original="#2196f3" />
            </svg>
            <div class="mt-6">
              <h3 class="text-lg font-bold text-gray-800 mb-3">Daily Highlights</h3>
              <p class="text-gray-800 text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum reprehenderit in voluptate velit esse cillum dolore...</p>
              <div class="mt-6">
                <button type="button" class="flex items-center flex-wrap justify-between gap-2 border rounded-3xl pl-5 pr-3 h-14 w-full hover:bg-purple-100 transition-all duration-300">
                  Explore
                  <div class="w-11 h-11 rounded-full bg-purple-200 flex justify-center items-center">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <mask x="0" y="0" width="18" height="18">
                        <rect width="18" height="18" fill="#D9D9D9"></rect>
                      </mask>
                      <g mask="url(#mask0_2085_52)">
                        <path d="M12.1313 9.75H3V8.25H12.1313L7.93125 4.05L9 3L15 9L9 15L7.93125 13.95L12.1313 9.75Z" fill="#222222"></path>
                      </g>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 512 512">
              <g fill-rule="evenodd" clip-rule="evenodd">
                <path fill="#ff405c" d="M255.997.007c-141.156 0-256 114.844-256 256 0 141.16 114.844 256 256 256 141.16 0 256.004-114.84 256.004-256C512 114.851 397.157.007 255.997.007z" data-original="#ff405c" />
                <path fill="#d01273" d="M269.845 511.629c110.122-5.9 201.974-81.716 231.869-183.747l-99.461-99.461a12.002 12.002 0 0 0-1.223-1.135l-137.504-110.9a11.994 11.994 0 0 0-15.061 0l-137.5 110.9a12.01 12.01 0 0 0-3.788 13.337 12.008 12.008 0 0 0 3.109 4.757l39.179 39.186v101.722a11.97 11.97 0 0 0 3.796 8.758z" data-original="#d01273" />
                <path fill="#fff" d="M350.528 224.627c-6.632 0-11.999 5.372-11.999 11.999V374.29h-35.472v-93.423c0-6.627-5.367-11.999-11.999-11.999H220.94c-6.631 0-11.999 5.372-11.999 11.999v93.423h-35.472V236.626c0-6.627-5.372-11.999-11.999-11.999h-8.983l103.509-83.484 103.514 83.484zm50.503 2.659-137.504-110.9a11.992 11.992 0 0 0-15.06 0l-137.5 110.9a12.01 12.01 0 0 0-3.788 13.337 12.008 12.008 0 0 0 11.318 8.006h30.97v137.66c0 6.627 5.372 12.003 12.003 12.003h59.469c6.619 0 11.999-5.376 11.999-12.003v-93.423h46.12v93.423c0 6.627 5.38 12.003 11.999 12.003h59.47c6.631 0 12.003-5.376 12.003-12.003v-137.66h30.97c5.088 0 9.619-3.209 11.318-8.006a12.009 12.009 0 0 0-3.787-13.337z" data-original="#ffffff" />
              </g>
            </svg>
            <div class="mt-6">
              <h3 class="text-lg font-bold text-gray-800 mb-3">Fresh Insights</h3>
              <p class="text-gray-800 text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum reprehenderit in voluptate velit esse cillum dolore...</p>
              <div class="mt-6">
                <button type="button" class="flex items-center flex-wrap justify-between gap-2 border rounded-3xl pl-5 pr-3 h-14 w-full hover:bg-purple-100 transition-all duration-300">
                  Explore
                  <div class="w-11 h-11 rounded-full bg-purple-200 flex justify-center items-center">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <mask x="0" y="0" width="18" height="18">
                        <rect width="18" height="18" fill="#D9D9D9"></rect>
                      </mask>
                      <g mask="url(#mask0_2085_52)">
                        <path d="M12.1313 9.75H3V8.25H12.1313L7.93125 4.05L9 3L15 9L9 15L7.93125 13.95L12.1313 9.75Z" fill="#222222"></path>
                      </g>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24">
              <g data-name="Layer 2">
                <path fill="#54d6c0" d="M23 5.675h-3.3a.825.825 0 0 0-.825.825v14.85a2.475 2.475 0 0 0 4.95 0V6.5A.825.825 0 0 0 23 5.675z" data-original="#54d6c0" />
                <path fill="#1f95f8" d="M21.735 23.726a.744.744 0 0 1-.385.099H4.3A4.126 4.126 0 0 1 .175 19.7V2.1A1.934 1.934 0 0 1 2.1.175h16.5A1.934 1.934 0 0 1 20.525 2.1v19.943a1.771 1.771 0 0 0 1.21 1.683z" data-original="#1f95f8" />
                <g fill="#fff" transform="matrix(1.1 0 0 1.1 -1.2 -1.2)">
                  <rect width="5.5" height="5.5" x="4.25" y="4.75" data-original="#ffffff" rx=".75" />
                  <path d="M16 6.75h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 0 1.5zm0 3h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 0 1.5zm0 4H5a.75.75 0 0 1 0-1.5h11a.75.75 0 0 1 0 1.5zm0 3H5a.75.75 0 0 1 0-1.5h11a.75.75 0 0 1 0 1.5zm0 3H5a.75.75 0 0 1 0-1.5h11a.75.75 0 0 1 0 1.5z" data-original="#ffffff" />
                </g>
              </g>
            </svg>
            <div class="mt-6">
              <h3 class="text-lg font-bold text-gray-800 mb-3">Trending Now</h3>
              <p class="text-gray-800 text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum reprehenderit in voluptate velit esse cillum dolore...</p>
              <div class="mt-6">
                <button type="button" class="flex items-center flex-wrap justify-between gap-2 border rounded-3xl pl-5 pr-3 h-14 w-full hover:bg-purple-100 transition-all duration-300">
                  Explore
                  <div class="w-11 h-11 rounded-full bg-purple-200 flex justify-center items-center">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <mask x="0" y="0" width="18" height="18">
                        <rect width="18" height="18" fill="#D9D9D9"></rect>
                      </mask>
                      <g mask="url(#mask0_2085_52)">
                        <path d="M12.1313 9.75H3V8.25H12.1313L7.93125 4.05L9 3L15 9L9 15L7.93125 13.95L12.1313 9.75Z" fill="#222222"></path>
                      </g>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog