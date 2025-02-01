import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50" id='contact'>
      <div className="container max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#010155] mb-4">Contact Us</h2>
          <p className="text-lg text-gray-700">
            We’d love to hear from you! Get in touch with us for any inquiries or support.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 text-gray-700 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#010155]"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#010155]"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 text-gray-700 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#010155]"
                  placeholder="Enter the subject"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full text-gray-700 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#010155]"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#010155] text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Company Details */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-[#010155] mb-6">
              Our Office
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-2">
                  Address
                </h4>
                <p className="text-gray-600">
                  123 Global Travel Lane, Suite 456<br />
                  Worldwide
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-2">
                  Phone
                </h4>
                <p className="text-gray-600">+1 (123) 456-7890</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-2">
                  Email
                </h4>
                <p className="text-gray-600">info@highpercomsolutions.com</p>
              </div>
            </div>

            {/* Map Integration (Optional) */}
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d144.9537353153166!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d2a2c9d4a1a8!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1622549402999!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;