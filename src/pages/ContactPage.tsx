import React, { useState } from 'react';
import { Mail, MessageCircle, Clock, MapPin, Phone, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    service: 'general',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Message sent successfully! We\'ll get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      service: 'general',
      budget: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-400">Ready to start your next project? Let's talk!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-red-500 mt-1" />
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-gray-400">hello@spookydevz.com</p>
                    <p className="text-gray-400">support@spookydevz.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MessageCircle className="h-5 w-5 text-red-500 mt-1" />
                  <div>
                    <p className="font-medium text-white">Discord</p>
                    <p className="text-gray-400">discord.gg/spookydevz</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-red-500 mt-1" />
                  <div>
                    <p className="font-medium text-white">Response Time</p>
                    <p className="text-gray-400">Usually within 2-4 hours</p>
                    <p className="text-gray-400">24/7 for urgent matters</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-red-500 mt-1" />
                  <div>
                    <p className="font-medium text-white">Location</p>
                    <p className="text-gray-400">Remote - Global Services</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Services We Offer</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Custom Plugin Development</li>
                <li>• Server Configuration & Setup</li>
                <li>• Website Development</li>
                <li>• Discord Bot Integration</li>
                <li>• Performance Optimization</li>
                <li>• 24/7 Support & Maintenance</li>
              </ul>
            </div>

            {/* Pricing Info */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Free Consultation</h3>
              <p className="text-red-100 text-sm">
                Get a free project consultation and quote. We'll discuss your needs and provide a detailed proposal within 24 hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    placeholder="Project Inquiry - Custom Plugin Development"
                  />
                </div>

                {/* Service Type and Budget */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service Type
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="plugin">Custom Plugin</option>
                      <option value="website">Website Development</option>
                      <option value="configuration">Server Configuration</option>
                      <option value="support">Support & Maintenance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    >
                      <option value="">Select Budget Range</option>
                      <option value="under-500">Under $500</option>
                      <option value="500-1000">$500 - $1,000</option>
                      <option value="1000-2500">$1,000 - $2,500</option>
                      <option value="2500-5000">$2,500 - $5,000</option>
                      <option value="5000-plus">$5,000+</option>
                      <option value="discuss">Let's Discuss</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    placeholder="Please describe your project in detail. Include any specific requirements, timeline, or features you need..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors font-medium flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

              {/* Additional Info */}
              <div className="mt-8 p-4 bg-gray-700 rounded-lg">
                <p className="text-gray-300 text-sm">
                  <strong>What happens next?</strong> We'll review your message and get back to you with a detailed response within 2-4 hours. For urgent matters, please mention it in your message or contact us directly via Discord.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="font-semibold text-white mb-2">How long does a typical project take?</h3>
              <p className="text-gray-400 text-sm">Project timelines vary based on complexity. Simple plugins: 1-2 weeks, complex systems: 4-8 weeks, websites: 2-6 weeks.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="font-semibold text-white mb-2">Do you provide ongoing support?</h3>
              <p className="text-gray-400 text-sm">Yes! We offer 24/7 support packages and maintenance plans to keep your projects running smoothly.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="font-semibold text-white mb-2">What are your payment terms?</h3>
              <p className="text-gray-400 text-sm">We typically work with 50% upfront and 50% on completion. For larger projects, we can arrange milestone-based payments.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="font-semibold text-white mb-2">Can you work with existing code?</h3>
              <p className="text-gray-400 text-sm">Absolutely! We can enhance, fix, or completely refactor existing plugins and websites.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;