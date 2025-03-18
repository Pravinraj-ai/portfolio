import React, { useState, useContext } from "react";
import emailjs from "@emailjs/browser";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [status, setStatus] = useState(""); // State to show status message

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    // Send email to the user (Acknowledgment)
    emailjs
      .send(
        "service_p30mkri", // Your EmailJS Service ID
        "template_qivwfgb", // User Acknowledgment Email Template
        formData,
        "eEVyk0t_ZjdLQA5kl" // Your Public Key
      )
      .then(
        (response) => {
          console.log("User email sent!", response.status, response.text);
        },
        (error) => {
          console.log("Failed to send user email...", error);
        }
      );

    // Send form data to yourself
    emailjs
      .send(
        "service_p30mkri", // Your EmailJS Service ID
        "template_vrzvf1m", // Admin (You) Email Template
        formData,
        "eEVyk0t_ZjdLQA5kl" // Your Public Key
      )
      .then(
        (response) => {
          console.log("Admin email sent!", response.status, response.text);
          setStatus("Message sent successfully!");
        },
        (error) => {
          console.log("Failed to send admin email...", error);
          setStatus("Message failed to send ❌");
        }
      );

    event.target.reset(); // Reset form fields after submission
  };

  return (
    <div
      id="contact"
      className={darkMode ? "bg-gray-100 pt-24 min-h-screen" : "bg-black pt-24 text-white min-h-screen"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center">Contact</h2>
        <div className="flex justify-between items-center flex-col md:flex-row pb-24">
          <div className="w-full md:pr-8">
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">Connect with me</h4>
            <p className="text-gray-500 text-xl">
              If you want to know more about me or my work, or if you would just like to say hello, send me a message. I'd love to hear from you.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="my-6">
                <label htmlFor="name" className={darkMode ? "block mb-2 text-lg font-medium text-gray-900" : "block mb-2 text-lg font-medium text-white"}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={darkMode ? "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" : "bg-gray-700 border border-gray-600 text-white text-sm rounded-lg block w-full p-2.5"}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className={darkMode ? "block mb-2 text-lg font-medium text-gray-900" : "block mb-2 text-lg font-medium text-white"}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={darkMode ? "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" : "bg-gray-700 border border-gray-600 text-white text-sm rounded-lg block w-full p-2.5"}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className={darkMode ? "block mb-2 text-lg font-medium text-gray-900" : "block mb-2 text-lg font-medium text-white"}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={darkMode ? "bg-gray-50 border border-gray-300 text-gray-900 h-28 w-full text-sm rounded-lg block p-2.5" : "bg-gray-700 border border-gray-600 text-white h-28 w-full text-sm rounded-lg block p-2.5"}
                  placeholder="Enter your message"
                  required
                />
              </div>

              <div className="flex justify-between">
                <button type="submit" className="bg-indigo-500 text-white px-4 py-2 w-40 rounded-md hover:bg-indigo-400">
                  Submit
                </button>
              </div>
            </form>

            {status && <p className="mt-4 text-lg font-semibold">{status}</p>}
          </div>

          <div className="w-full flex flex-col md:items-end mt-12 md:mt-6" style={{ paddingTop: '40px' }}>
            <h1 className="text-3xl font-bold">Phone</h1>
            <a href="tel:+919894511269" className="mb-12 mt-4 font-semibold text-blue-700 block uppercase">
              +91 9894511269
            </a>
            <h1 className="text-3xl font-bold">Email</h1>
            <a href="mailto:perumalpravinraj@gmail.com" className="mb-12 mt-4 font-semibold text-blue-700 block uppercase">
              perumalpravinraj@gmail.com
            </a>
            <h1 className="text-3xl font-bold">Social</h1>
            <ul className="flex">
              {contactLinks.map((el, index) => (
                <a key={index} href={el.link} className="md:ml-6 md:mr-0 mr-6 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center">
                  <img alt="" src={el.url} />
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
