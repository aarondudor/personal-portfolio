import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mzblpkzp");
  if (state.succeeded) {
    return (
      <div
        id="contact"
        className="w-full h-screen bg-[#0e141f] flex justify-center items-center p-9"
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
      className="w-full h-screen bg-[#0e141f] text-black flex justify-center items-center p-9"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <label
            htmlFor="email"
            className="text-3xl md:text-5xl font-bold inline border-b-8 border-indigo-500 text-white"
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
    </div>
  );
};
/*<div
      id="contact"
      className="w-full h-screen bg-[#0e141f] text-black flex justify-center items-center p-9"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-3xl md:text-5xl font-bold inline border-b-8 border-indigo-500 text-white">
            Contact
          </p>
        </div>
        <input
          className="bg-white p-2"
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required={true}
        />
        <input
          className="my-4 p-2 bg-white"
          type="email"
          placeholder="Email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required={true}
        />
        <textarea
          className="bg-white p-2"
          type="message"
          placeholder="Message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required={true}
          rows="6"
        ></textarea>
        <button
          type="submit"
          disabled={state.submitting}
          className="text-white font-bold text-md border-2 px-6 py-3 mt-4 mx-auto flex items-center duration-300 hover:bg-indigo-500 hover:border-indigo-500 hover:duration-300"
        >
          Submit
        </button>
      </form>
      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
  */

export default Contact;
