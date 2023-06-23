import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full h-screen bg-[#0e141f] text-black flex justify-center items-center p-9"
    >
      <form action="" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-3xl md:text-5xl font-bold inline border-b-8 border-indigo-500 text-indigo-50">
            Contact
          </p>
        </div>
        <input
          className="bg-white p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-white"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-white p-2"
          type="message"
          placeholder="Message"
          rows="6"
        ></textarea>
        <button className="text-white font-bold text-md border-2 px-6 py-3 mt-4 mx-auto flex items-center duration-300 hover:bg-indigo-500 hover:border-indigo-500 hover:duration-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
