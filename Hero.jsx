import React from 'react'

const Hero = () => {
  return (
    <div class="font-sans bg-gray-800 px-6 py-12 overflow-hidden">
      <div class="max-w-7xl max-md:max-w-md mx-auto">
        <div class="grid md:grid-cols-2 items-center gap-12">
          <div>
            <h2 class="text-white lg:text-5xl md:text-4xl text-3xl font-bold mb-4 lg:!leading-[55px]">All your business finances in one app.</h2>
            <p class="text-white mt-6 text-base leading-relaxed">Explore a curated collection of ready-to-use components and design blocks, empowering you to create stunning, responsive interfaces with ease. Streamline your workflow, amplify your creativity, and discover the future of web development, all at your fingertips.</p>
            <div class="mt-12">
              <button type='button'
                class="bg-white hover:bg-gray-100 transition-all text-gray-800 font-bold text-sm rounded px-5 py-3">Getting Started</button>
              <a href="javascript:void(0)" class="text-white text-sm font-bold underline sm:ml-6 max-sm:mt-4 max-sm:block whitespace-nowrap">API Documentation</a>
            </div>
          </div>

          <div>
            <img src='https://readymadeui.com/readymadeui_banner.webp' class="shrink-0 w-full h-full md:skew-x-[-22deg] md:-rotate-1 rounded-md object-contain" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero