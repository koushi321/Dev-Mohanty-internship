import React, { useState } from "react";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message Sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="connect"
      className="py-16 flex justify-center items-center"
      style={{ backgroundColor: "#996633" }}
    >
      <div
        className="w-full max-w-md p-8 rounded-lg shadow-lg"
        style={{ backgroundColor: "#855C2F" }}
      >
        <h2 className="text-4xl font-extrabold text-white mb-10 text-center">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white text-lg mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[#704A24] bg-[#704A24] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-200"
              required
            />
          </div>

          <div>
            <label className="block text-white text-lg mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@domain.com"
              className="w-full px-4 py-2 border border-[#704A24] bg-[#704A24] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-200"
              required
            />
          </div>

          <div>
            <label className="block text-white text-lg mb-2">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-2 border border-[#704A24] bg-[#704A24] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-200"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-100 text-black font-bold py-2 rounded-md hover:bg-orange-200 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
