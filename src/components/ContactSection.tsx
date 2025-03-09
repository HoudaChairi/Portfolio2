// import React from 'react';
// import { Mail, Github, Phone, Linkedin, Send, MessageSquare } from 'lucide-react';

// export default function ContactSection() {
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//   };

//   return (
//     <section id="contact" className="min-h-screen bg-dark-900 py-20 flex items-center justify-center">
//       <div className="max-w-6xl mx-auto px-4 relative">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-block relative mb-4">
//             <MessageSquare className="w-16 h-16 text-purple-400 animate-float" />
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
//             Let's Connect
//           </h2>
//           <p className="text-gray-400 max-w-xl mx-auto">
//             Have a project in mind or want to collaborate? Feel free to reach out!
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 items-start">
//           {/* Contact Form */}
//           <div className="bg-dark-800 rounded-2xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-gray-400 mb-2 text-sm">
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   className="w-full bg-dark-700 rounded-lg px-4 py-3 text-white border border-dark-700 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 transition-colors duration-300"
//                   placeholder="your full name"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block text-gray-400 mb-2 text-sm">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="w-full bg-dark-700 rounded-lg px-4 py-3 text-white border border-dark-700 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 transition-colors duration-300"
//                   placeholder="contact@example.com"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="message" className="block text-gray-400 mb-2 text-sm">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   rows={4}
//                   className="w-full bg-dark-700 rounded-lg px-4 py-3 text-white border border-dark-700 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 transition-colors duration-300 resize-none"
//                   placeholder="Your message here..."
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-purple-400 to-cyan-400 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity duration-300 flex items-center justify-center space-x-2 group"
//               >
//                 <span>Send Message</span>
//                 <Send className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
//               </button>
//             </form>
//           </div>

//           {/* Right Side Content */}
//           <div className="space-y-8 flex flex-col justify-start">
//             {/* Contact Information */}
//             <div className="bg-dark-800 rounded-2xl p-8 flex-grow">
//               <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
//               <div className="grid grid-cols-2 gap-4">
//                 {[
//                   { icon: <Mail className="w-5 h-5" />, label: 'Email', href: 'mailto:chairihouda13@gmail.com' },
//                   { icon: <Phone className="w-5 h-5" />, label: 'Phone', href: 'tel:+212682428584' },
//                 ].map((contact, index) => (
//                   <a
//                     key={index}
//                     href={contact.href}
//                     className="flex items-center space-x-3 text-gray-400 hover:text-white p-4 rounded-lg bg-dark-700 transition-all duration-300 hover:-translate-y-1"
//                   >
//                     {contact.icon}
//                     <span>{contact.label}</span>
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Connect with me */}
//             <div className="bg-dark-800 rounded-2xl p-8 flex-grow">
//               <h3 className="text-xl font-bold text-white mb-6">Connect with me</h3>
//               <div className="grid grid-cols-2 gap-4">
//                 {[
//                   { icon: <Github className="w-5 h-5" />, label: 'GitHub', href: 'https://github.com/HoudaChairi' },
//                   { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/hchairi/' },
//                 ].map((social, index) => (
//                   <a
//                     key={index}
//                     href={social.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center space-x-3 text-gray-400 hover:text-white p-4 rounded-lg bg-dark-700 transition-all duration-300 hover:-translate-y-1"
//                   >
//                     {social.icon}
//                     <span>{social.label}</span>
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Availability Card */}
//             <div className="bg-dark-800 rounded-2xl p-8 flex-grow">
//               <div className="flex items-center space-x-2">
//                 <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//                 <span className="text-green-400 font-medium">Available for opportunities</span>
//               </div>
//               <p className="text-gray-400 mt-4">
//                 Currently open to internship and full-time positions.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Github, Phone, Linkedin, Send, MessageSquare } from 'lucide-react';

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          'service_91ns1kb', // Your service ID
          'template_9umeugj', // Your template ID
          formRef.current,
          'zyn2tgUNppjgZkbhZ' // Your public key
        )
        .then(
          (result) => {
            console.log('Message sent successfully:', result.text);
            alert('Message sent successfully!');
            formRef.current?.reset();
          },
          (error) => {
            console.error('Error sending message:', error.text);
            alert('Failed to send message. Please try again later.');
          }
        );
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-dark-900 py-20 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block relative mb-4">
            <MessageSquare className="w-16 h-16 text-purple-400 animate-float" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-dark-800 rounded-2xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2 text-sm">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="w-full bg-dark-700 rounded-lg px-4 py-3 text-white border border-dark-700 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 transition-colors duration-300"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2 text-sm">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className="w-full bg-dark-700 rounded-lg px-4 py-3 text-white border border-dark-700 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 transition-colors duration-300"
                  placeholder="contact@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2 text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-dark-700 rounded-lg px-4 py-3 text-white border border-dark-700 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 transition-colors duration-300 resize-none"
                  placeholder="Your message here..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-400 to-cyan-400 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>

          {/* Right Side Content */}
          <div className="space-y-8 flex flex-col justify-start">
            {/* Contact Information */}
            <div className="bg-dark-800 rounded-2xl p-8 flex-grow">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Mail className="w-5 h-5" />, label: 'Email', href: 'mailto:chairihouda13@gmail.com' },
                  { icon: <Phone className="w-5 h-5" />, label: 'Phone', href: 'tel:+212682428584' },
                ].map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-3 text-gray-400 hover:text-white p-4 rounded-lg bg-dark-700 transition-all duration-300 hover:-translate-y-1"
                  >
                    {contact.icon}
                    <span>{contact.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Connect with me */}
            <div className="bg-dark-800 rounded-2xl p-8 flex-grow">
              <h3 className="text-xl font-bold text-white mb-6">Connect with me</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Github className="w-5 h-5" />, label: 'GitHub', href: 'https://github.com/HoudaChairi' },
                  { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/hchairi/' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-400 hover:text-white p-4 rounded-lg bg-dark-700 transition-all duration-300 hover:-translate-y-1"
                  >
                    {social.icon}
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="bg-dark-800 rounded-2xl p-8 flex-grow">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-medium">Available for opportunities</span>
              </div>
              <p className="text-gray-400 mt-4">
                Currently open to internship and full-time positions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
