

import React from 'react'
import { useState } from 'react';
function Contact() {

const [result,setResult]=useState('')

const onSubmit = async (event) => {
  event.preventDefault();
  setResult("Sending....");
  const formData = new FormData(event.target);

  formData.append("access_key", "98defbd4-de97-4aaf-a9c0-6f669a4db029");

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
  });

  const data = await response.json();

  if (data.success) {
    setResult("Form Submitted Successfully");
    event.target.reset();
  } else {
    console.log("Error", data);
    setResult(data.message);
  }
};
  return (
    <section className="max-w-screen-xl mx-auto px-4 pb-12">
    <h2
      className="text-3xl sm:text-[40px] bg-[#111] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#1788ae] sm:border-2 border-[#1788ae] rounded-md">
      Let's Connect
    </h2>
    <div className="flex flex-col md:flex-row items-center mt-10">
      <div className="w-full">
        <img src="contact-me.svg" alt="phone" />
      </div>
      <form className="w-full" action='#' onSubmit={onSubmit} >
        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
        <div className="relative mb-4">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
          </div>
          <input type="text" id="name" name="name"
            className="bg-gray-50 border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Enter your name" />
        </div>
        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
        <div className="relative mb-4">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="currentColor" viewBox="0 0 20 16">
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path
                d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
          </div>
          <input type="text" id="email" name="email"
            className="bg-gray-50 border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="name@procodrr.com" />
        </div>
        <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
        <div className="relative mb-4">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
          <textarea id="message" name="message" rows="8"
            className="bg-gray-50 border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"></textarea>
        </div>
        <button type="submit"
          className="w-full text-white bg-[#1788ae] hover:bg-[#1280a4] focus:ring-4 focus:ring-[#4489a0] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">
          Send
        </button> 
      </form>
      <span>{result}</span>
    </div>
  </section>
  )
}
export default Contact