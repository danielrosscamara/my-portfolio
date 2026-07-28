import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  // Controlled Inputs State (like [(ngModel)] in Angular)
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevents page refresh on form submit
    console.log({ name, email, message });
    setSubmitted(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-24">
      <div className="container">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <span className="font-mono-custom text-sm text-primary tracking-widest uppercase">03. Contact</span>
          <h2 className="font-heading text-4xl font-bold text-gray-900 dark:text-white mt-2">
            Get in touch
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-md mx-auto text-sm">
            Have a project in mind or just want to say hello?{' '}
            <a href={`mailto:${personalInfo.email}`} className="text-primary hover:underline font-semibold">
              {personalInfo.email}
            </a>
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-xl mx-auto">
          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-3 py-16 text-center animate-fade-in-up">
              <CheckCircle size={48} className="text-green-500" />
              <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white">
                Message sent!
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Thank you for reaching out, {name}. I'll get back to you soon!
              </p>
            </div>
          ) : (
            <form id="contact-form" onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-sm placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-sm placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-sm placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                id="contact-submit-btn"
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors duration-200 shadow-lg shadow-primary/20 cursor-pointer"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          )}

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <a
              href="https://github.com/danielrosscamara"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 rounded-full border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:border-primary dark:hover:border-primary transition-all duration-200 hover:scale-110"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/danielrosscamara"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 rounded-full border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:border-primary dark:hover:border-primary transition-all duration-200 hover:scale-110"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email Contact"
              className="p-3 rounded-full border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:border-primary dark:hover:border-primary transition-all duration-200 hover:scale-110"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
