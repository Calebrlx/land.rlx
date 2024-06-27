'use client';

import Footer from '@/components/footer'
import { Navbar } from "@/components/navbar";
import { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // This URL is the action URL of the Google Form
    // https://app.formbricks.com/s/clxxi6w3100ohs8co8bwj1lkb
    const formAction = 'YOUR_GOOGLE_FORM_ACTION_URL_HERE';
    const formDataToSend = new FormData();

    // Here we append data to match the 'name' attribute of your Google Form inputs
    formDataToSend.append('entry.xxxxxx', formData.name);
    formDataToSend.append('entry.yyyyyy', formData.email);
    formDataToSend.append('entry.zzzzzz', formData.message);

    try {
      const response = await fetch(formAction, {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors', // Google Forms may need this to prevent CORS issues
      });

      if (response.ok) {
        alert('Form submitted successfully.');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form, please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto p-4 space-y-6">
        <Navbar />
        <section className="p-6 bg-gray-800 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-green-400 mt-8 mb-4">Contact Us</h1>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white h-32"
              />
            </div>
            <button type="submit" className="w-full py-2 mt-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded">Submit</button>
          </form>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;


// <section className="p-6 bg-gray-800 rounded-lg shadow-md">
//     <h2 className="text-2xl font-bold text-green-300 mb-4">What is AI?</h2>
//     <p className="mb-4">
//         Artificial Intelligence (AI) represents the cutting-edge of technology, enabling machines to learn from experience, adjust to new inputs, and perform human-like tasks. At Relix.ai, we harness AI to solve complex problems and drive innovation across industries.
//     </p>
// </section>

