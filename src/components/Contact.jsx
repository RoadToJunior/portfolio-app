import React from "react";

const Contact = () => {
  return (
    <section
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form action="" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8 text-gray-300">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Contact
          </p>
          <p className="py-4">
            &#8725;&#8725; Submit the form below or shoot me an email
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="8"
          placeholder="Message"
        />
        <button
          type="submit"
          className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-4 my-8 mx-auto flex items-center"
        >
          Let&lsquo;s Collaborate
        </button>
      </form>
    </section>
  );
};

export default Contact;
