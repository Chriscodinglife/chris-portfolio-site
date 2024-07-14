import React from "react";

const Contact = () => {
  return (
    <div className="bg-sky-950">
      <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-16">
        
        <h1 className="py-4 text-5xl font-bold text-center text-white">
          Contact Me
        </h1>
        <div className="flex flex-col m-auto w-1/2 pb-10">
          <form
            action="https://getform.io/f/39d31aca-6a89-432a-bd44-c00a16bce8de"
            method="POST"
            encType="multipart/form-data"
          >
            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
              <div className="flex flex-col">
                <label className="text-sm py-2 text-white font-monts">Name</label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="text"
                  name="name"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm py-2 text-white font-monts">Phone</label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="text"
                  name="phone"
                />
              </div>
            </div>
            <div className="flex flex-col py-2">
              <label className="text-sm py-2 text-white font-monts">Email</label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="email"
                name="email"
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="text-sm py-2 text-white font-monts">Subject</label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
                name="subject"
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="text-sm py-2 text-white font-monts">Message</label>
              <textarea
                className="border-2 rounded-lg p-3 border-gray-300"
                rows="5"
                name="message"
              ></textarea>
            </div>
            <button className="bg-[#1c8bb0] text-gray-100 rounded-lg w-full p-4 mt-4 font-monts text-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
