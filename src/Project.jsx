
import React from 'react'

function Project() {
  return (
    <section className="  max-w-screen-xl mx-auto px-4 relative pb-8 sm:pb-16">

        <h2
        className="text-3xl sm:text-[40px] bg-[#111] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#1788ae] sm:border-b-2 border-[#1788ae]">
        Latest Works
      </h2>
         
      <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[80px] items-center sm:mt-20 relative">
        <div className="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
        <div
          className="w-4 h-4 rounded-full border-[3px] border-[#459bd5] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block">
        </div>
        <a href="https://youtube-clone9193.netlify.app/" className="flex w-full relative justify-center sm:justify-start">
          <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200">
            <img className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
              src="youtube.png" alt="" />
            <span
              className="flex group-hover:-top-14 ease-jump duration-200 bg-[#459bd5] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">YouTube
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                className="feather feather-external-link">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
          </div>
        </a>
  
        <div className="w-full text-white">
          <h3 className="text-[#459bd5] font-bold text-2xl md:text-4xl">
            Youtube Clone
          </h3>
          <span className="text-[#459bd5] text-base md:text-lg">(with react)</span>
          <p className="text-justify text-sm md:text-base mt-2">
            This YouTube clone is a dynamic web application built using React.js and the RapidAPI YouTube Data API. It replicates the core functionalities of YouTube, allowing users to search for videos, view video details, and explore related content. The application demonstrates seamless integration of APIs, efficient state management with React hooks, and a user-friendly interface.
          </p>
  
          <ul className="flex flex-wrap gap-2 mt-2">
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #react.js
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #rapid api
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #tailwind css
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #useContext 
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #routing
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #jsx
            </li>
           
          </ul>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
        <div className="order-2 sm:order-1 w-full text-white">
          <h3 className="text-[#ffe578] font-bold text-2xl md:text-4xl">
            Digital Marketing
          </h3>
          <span className="text-[#ffe578] text-base md:text-lg">( with animation )</span>
          <p className="text-justify text-sm md:text-base mt-2">
            This project is a fully responsive Digital Marketing Website designed to help businesses enhance their online presence. Built using HTML, CSS, and JavaScript, the website delivers a seamless user experience across all devices—desktops, tablets, and mobile phones. The site features a modern, clean design with easy navigation, allowing potential clients to quickly explore services, read about the agency, and get in touch for consultations.
          </p>
  
          <ul className="flex flex-wrap gap-2 mt-2">
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #hmtl
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #css
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #javascript
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #jquery
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #slickslider
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #animation
            </li>
           
          </ul>
        </div>
        <div className="h-[1px] left-1/2 right-1/4 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
        <div
          className="w-4 h-4 rounded-full border-[3px] border-[#ffe578] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block">
        </div>
        <a href="https://digitalwebsite.netlify.app/" className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start">
          <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto">
            <img className="max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
              src="digital.png" alt="" />
            <span
              className="flex group-hover:-top-14 ease-jump duration-200 text-black bg-[#ffe578] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">digital
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                className="feather feather-external-link">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
          </div>
        </a>
      </div>

<div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
    <div className="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
    <div
      className="w-4 h-4 rounded-full border-[3px] border-[#fc815c] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block">
    </div>
    <a href="https://weather9193.netlify.app/" className="flex w-full relative justify-center sm:justify-start">
      <div className="flex flex-col items-center relative group hover:scale-105 ease-in-out sm:mr-auto duration-200">
        <img className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
          src="weather.png" alt="" />
        <span
          className="flex group-hover:-top-14 ease-jump duration-200 bg-[#fc815c] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">Weather
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            className="feather feather-external-link">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </span>
      </div>
    </a>

    <div className="w-full text-white">
      <h3 className="text-[#fc815c] font-bold text-2xl md:text-4xl">
       Weather Application
      </h3>
      <span className="text-[#fc815c] text-base md:text-lg">(live location)</span>
      <p className="text-justify text-sm md:text-base mt-2">
        This Live Weather Application provides users with real-time weather information based on their current location. The project leverages the Geolocation API to detect the user’s location and the OpenWeather API to fetch accurate weather data. With a user-friendly interface, the application is responsive and works seamlessly across all devices, including smartphones, tablets, and desktops.
      </p>

      <ul className="flex flex-wrap gap-2 mt-2">
        <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
          #react.js
        </li>
        <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
          #routing
        </li>
        <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
          #weatherapi
        </li>
        <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
            #usegeolacation
          </li>
        <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
          #axios
        </li>
        <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
            #responsive
          </li>
      </ul>
    </div>
  </div>


<div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
    <div className="order-2 sm:order-1 w-full text-white">
      <h3 className="text-[#47afa1] font-bold text-2xl md:text-4xl">
        Educity Application
      </h3>
      <span className="text-[#47afa1] text-base md:text-lg">(Coaching and study)</span>
      <p className="text-justify text-sm md:text-base mt-2">
        EduCity is an innovative online educational platform designed to provide students and educators with a comprehensive and interactive learning experience. The platform offers a variety of courses, resources, and tools to facilitate learning and teaching in an engaging environment. Built using React,  EduCity is scalable, user-friendly, and accessible across various devices.
      </p>

      <ul className="flex flex-wrap gap-2 mt-2">
        <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
          #react.js
        </li>
        <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
          #routing
        </li>
        <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
          #useemailapi
        </li>
        <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
          #slider
        </li>
        <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
          #hooks
        </li>
       
      </ul>
    </div>
    <div className="h-[1px] left-1/2 right-1/4 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
    <div
      className="w-4 h-4 rounded-full border-[3px] border-[#47afa1] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block">
    </div>
    <a href="https://educity9193.netlify.app/" className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start">
      <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto">
        <img className="max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
          src="educity.png" alt="" />
        <span
          className="flex group-hover:-top-14 ease-jump duration-200 bg-[#47afa1] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">Educity
          
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            className="feather feather-external-link">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </span>
      </div>
    </a>
  </div>


<div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
    <div className="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
    <div
      className="w-4 h-4 rounded-full border-[3px] border-[#fc815c] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block">
    </div>
    <a href="https://rupesh-baghel.github.io/bootstrap/" className="flex w-full relative justify-center sm:justify-start">
      <div className="flex flex-col items-center relative group hover:scale-105 ease-in-out sm:mr-auto duration-200">
        <img className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
          src="bootstrap.png" alt="" />
        <span
          className="flex group-hover:-top-14 ease-jump duration-200 bg-[#fc815c] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"> Business 
          
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            className="feather feather-external-link">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </span>
      </div>
    </a>

    <div className="w-full text-white">
      <h3 className="text-[#fc815c] font-bold text-2xl md:text-4xl">
        Business Application
      </h3>
      <span className="text-[#fc815c] text-base md:text-lg">(business purpose)</span>
      <p className="text-justify text-sm md:text-base mt-2">
        The Business project is a modern, responsive website developed using Bootstrap to showcase our services and establish a strong online presence. The website is designed to be user-friendly, visually appealing, and optimized for all devices, ensuring an excellent browsing experience for potential clients.
      </p>

      <ul className="flex flex-wrap gap-2 mt-2">
        <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
          #html
        </li>
        <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
          #css
        </li>
        <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
          #javascript
        </li>
        <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
          #bootstrap
        </li>
      
      </ul>
    </div>
  </div>


  <div className="w-[2px] hidden sm:block bg-[#1788ae] absolute top-0 bottom-0 left-1/2 -translate-x-1/2"> </div>


      </section>

  )
}

export default Project;