import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-glow mb-6">
              Get In <span className="text-green-500">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mb-8"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Let's discuss your next project. I'm always open to new opportunities 
              and interesting conversations about technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="glassmorphism p-8 card-hover">
              <h3 className="text-2xl font-semibold mb-6 text-green-400">Let's Connect</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-lg bg-green-500/10 text-green-500 mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white">jabeerjabeer1111@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 rounded-lg bg-green-500/10 text-green-500 mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white">+91 9995069523</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 rounded-lg bg-green-500/10 text-green-500 mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white">Kerala, Ernakulam, 686671</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-medium text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="p-3 rounded-lg bg-green-500/10 text-green-500 hover:bg-green-500/20 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="p-3 rounded-lg bg-green-500/10 text-green-500 hover:bg-green-500/20 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glassmorphism p-8 card-hover">
              <h3 className="text-2xl font-semibold mb-6 text-green-400">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-green-500 hover:bg-green-600 text-white btn-glow"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;