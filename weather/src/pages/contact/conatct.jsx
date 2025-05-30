import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { WiDaySunny, WiStrongWind, WiHumidity, WiThermometer } from 'react-icons/wi';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3lp4x9m', 'template_acgucv2', form.current, {
        publicKey: '8jAG2Wcu1hshYLTJ_',
      })
      .then(
        () => {
          alert('Email sent successfully!');
        },
        (error) => {
          alert('Failed to send email, please try again.');
          console.error(error.text);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-blue-200 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-4xl p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Weather Card Static UI */}
        <div className="bg-gradient-to-br from-sky-400 to-sky-300 rounded-2xl p-8 text-white shadow-inner">
          <h2 className="text-3xl font-bold mb-6">Weather Overview</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <WiDaySunny className="text-4xl" />
                <span className="text-xl">Sunny</span>
              </div>
              <span className="text-xl font-semibold">24°C</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <WiHumidity className="text-3xl" />
                <span>Humidity</span>
              </div>
              <span className="font-medium">60%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <WiStrongWind className="text-3xl" />
                <span>Wind</span>
              </div>
              <span className="font-medium">15 km/h</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white flex flex-col justify-center"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-700">Contact Us</h2>

          <label htmlFor="title" className="block font-medium mb-2 text-gray-700">Subject</label>
          <input
            type="text"
            name="title"
            placeholder="Enter subject here"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label htmlFor="name" className="block font-medium mb-2 text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label htmlFor="email" className="block font-medium mb-2 text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label htmlFor="message" className="block font-medium mb-2 text-gray-700">Message</label>
          <textarea
            name="message"
            placeholder="Write your message here"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input type="hidden" name="time" value={new Date().toISOString()} />

          <input
            type="submit"
            className="w-full bg-blue-600 text-white text-lg font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          />
        </form>
      </div>
    </div>
  );
};
