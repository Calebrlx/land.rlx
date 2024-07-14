'use client';

import { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Update this URL with your specific Spree action URL
    const formAction = 'https://formspree.io/f/xvgppnyk';
    const formDataToSend = new FormData();

    // Here we append data to match the 'name' attribute of your Spree form inputs
    formDataToSend.append('entry.name', formData.name);
    formDataToSend.append('entry.email', formData.email);
    formDataToSend.append('entry.message', formData.message);

    try {
      const response = await fetch(formAction, {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors', // Spree may need this to prevent CORS issues
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form, please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto p-4 space-y-6">
        <section className="p-6 bg-gray-800 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-green-400 mt-8 mb-4">Contact Us</h1>
          <p className="mb-4 text-lg">
            We&apos;re here to help! Feel free to reach out with any questions or comments.
            For additional inquiries, you can also email us directly at <a href="mailto:caleb@relix.ai" className="text-green-400">caleb@relix.ai</a>.
          </p>
          {!submitted ? (
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
                  required
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
                  required
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
                  required
                />
              </div>
              <button type="submit" className="w-full py-2 mt-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </form>
          ) : (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-green-400">Thank You!</h2>
              <p className="mt-4">Your message has been submitted successfully. We will get back to you soon.</p>
            </div>
          )}
        </section>
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

