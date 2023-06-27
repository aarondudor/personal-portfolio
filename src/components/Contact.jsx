import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/send_email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus("Email sent successfully. We will get back to you soon.");
      } else {
        throw new Error("Error sending email.");
      }
    } catch (error) {
      setStatus("Error sending email. Please try again later.");
    }
  };

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
          className="text-white font-bold text-md border-2 px-6 py-3 mt-4 mx-auto flex items-center duration-300 hover:bg-indigo-500 hover:border-indigo-500 hover:duration-300"
        >
          Submit
        </button>
      </form>
      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
  );
};

export default Contact;
