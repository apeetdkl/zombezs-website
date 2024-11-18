import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    userContact: '',
    message: '',
  });
  const [isSent, setIsSent] = useState(null); // null: no action, true: sent successfully, false: error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendUserInquiry = (e) => {
    e.preventDefault();

    // Send the inquiry email to your team using 'template_vtv0pln'
    emailjs
      .sendForm('service_r2ouyj4', 'template_vtv0pln', e.target, 'XTLqnUk7qby0ofIlY')
      .then(
        (result) => {
          setIsSent(true);
          // Send the auto-reply email to the user after the inquiry is sent successfully
          sendAutoReplyToUser(formData);
        },
        (error) => {
          setIsSent(false);
          console.log(error.text);
        }
      );
  };

  const sendAutoReplyToUser = (formData) => {
    // Send the auto-reply to the user using 'template_response_to_user'
    emailjs
      .send('service_r2ouyj4', 'template_response_to_user', {
        userName: formData.userName,
        userEmail: formData.userEmail, // Correctly send to the user's email
        userContact: formData.userContact,
        message: formData.message,
      }, 'XTLqnUk7qby0ofIlY')
      .then(
        (result) => {
          console.log('Auto-reply sent to the user.');
        },
        (error) => {
          console.log('Error sending auto-reply to user:', error.text);
        }
      );
  };
  

  return (
    <div
      id="contact" // Add the ID here for scrolling reference
      //className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800"
    >
    
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <motion.form
        onSubmit={sendUserInquiry}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="p-6 w-full max-w-lg bg-opacity-30 backdrop-blur-md rounded-lg border border-gray-500 shadow-lg text-green-400"
      >
        <motion.h2
          className="text-3xl mb-6 text-green-500 text-center"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Get in Touch
        </motion.h2>

        {/* Name Input */}
        <div className="mb-4">
          <label htmlFor="userName" className="block mb-2 text-lg">
            Your Name
          </label>
          <motion.input
            type="text"
            name="userName"
            id="userName"
            value={formData.userName}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-gray-800 text-white bg-opacity-50 border border-transparent focus:border-green-400 focus:outline-none transition duration-200"
            whileFocus={{ scale: 1.03 }}
            whileHover={{ scale: 1.02 }}
            required
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="userEmail" className="block mb-2 text-lg">
            Your Email
          </label>
          <motion.input
            type="email"
            name="userEmail"
            id="userEmail"
            value={formData.userEmail}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-gray-800 text-white bg-opacity-50 border border-transparent focus:border-green-400 focus:outline-none transition duration-200"
            whileFocus={{ scale: 1.03 }}
            whileHover={{ scale: 1.02 }}
            required
          />
        </div>

        {/* Contact No / WhatsApp Number Input */}
        <div className="mb-4">
          <label htmlFor="userContact" className="block mb-2 text-lg">
            Contact No / WhatsApp Number
          </label>
          <motion.input
            type="text"
            name="userContact"
            id="userContact"
            value={formData.userContact}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-gray-800 text-white bg-opacity-50 border border-transparent focus:border-green-400 focus:outline-none transition duration-200"
            whileFocus={{ scale: 1.03 }}
            whileHover={{ scale: 1.02 }}
            required
          />
        </div>

        {/* Message Textarea */}
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 text-lg">
            Your Message
          </label>
          <motion.textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-gray-800 text-white bg-opacity-50 border border-transparent focus:border-green-400 focus:outline-none transition duration-200"
            rows="5"
            whileFocus={{ scale: 1.03 }}
            whileHover={{ scale: 1.02 }}
            required
          />
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className={`w-full py-2 px-4 rounded transition duration-200 ${
            isSent === null
              ? 'bg-green-500 hover:bg-green-600 text-white'
              : isSent
              ? 'bg-green-600 hover:bg-green-700 text-white'
              : 'bg-red-500 hover:bg-red-600 text-white'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isSent === null
            ? 'Send Inquiry'
            : isSent
            ? 'Message Sent Successfully'
            : 'Error! Try Again'}
        </motion.button>

        {/* Show status message */}
        {isSent !== null && (
          <motion.p
            className={`mt-4 text-center ${
              isSent ? 'text-green-500' : 'text-red-500'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {isSent
              ? 'Thank you! Your message has been sent.'
              : 'Oops! Something went wrong. Please try again.'}
          </motion.p>
        )}
      </motion.form>
    </div>
    </div>
  );
};

export default ContactForm;
