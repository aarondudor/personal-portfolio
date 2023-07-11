import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineContactPage } from "react-icons/md";
import Resume from "../assets/Resume_AaronDudor_2023.pdf";

const Contact = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  const [state, handleSubmit] = useForm("mzblpkzp");
  if (state.succeeded) {
    return (
      <div
        id="contact"
        className="w-full h-screen bg-[#0e141f] flex flex-col justify-center items-center p-9"
      >
        <p className="text-white font-bold text-xl text-center md:text-3xl">
          Your form has been submitted, thank you for reaching out!
        </p>
      </div>
    );
  }

  return (
    <div
      id="contact"
      className="w-full h-screen bg-[#0e141f] text-black flex flex-col justify-center items-center p-9"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <label
            htmlFor="email"
            className="text-3xl md:text-4xl lg:text-5xl font-bold inline border-b-8 border-indigo-500 text-white"
          >
            Contact
          </label>
        </div>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          className="bg-white p-2"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          className="bg-white p-2 mt-2"
          rows="6"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          type="submit"
          disabled={state.submitting}
          className="text-white font-bold text-md border-2 px-6 py-3 mt-4 mx-auto flex items-center duration-300 hover:bg-indigo-500 hover:border-indigo-500 hover:duration-300"
        >
          Submit
        </button>
      </form>
      <div className="lg:hidden flex left-1 pt-6">
        <ul className="flex flex-col md:flex-row gap-4 text-white">
          <li>
            <div
              onClick={() =>
                openInNewTab("https://www.linkedin.com/in/aarondudor/")
              }
              className="w-48 h-16 bg-indigo-400 rounded-full flex gap-4 items-center justify-center transform hover:duration-200 hover:bg-indigo-600 duration-200"
            >
              <FaGithub size={25} />
              <a className="text-xl font-bold">
                <p>LinkedIn</p>
              </a>
            </div>
          </li>
          <li>
            <div
              onClick={() => openInNewTab("https://www.github.com/aarondudor")}
              className="w-48 h-16 bg-indigo-400 rounded-full flex gap-4 items-center justify-center transform hover:duration-200 hover:bg-indigo-600 duration-200"
            >
              <FaLinkedin size={25} />
              <a className="text-xl font-bold">
                <p>Github</p>
              </a>
            </div>
          </li>
          <li>
            <div
              onClick={() => openInNewTab(Resume)}
              className="w-48 h-16 bg-indigo-400 rounded-full flex gap-4 items-center justify-center transform hover:duration-200 hover:bg-indigo-600 duration-200"
            >
              <MdOutlineContactPage size={25} />
              <a className="text-xl font-bold">
                <p>Resume</p>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
