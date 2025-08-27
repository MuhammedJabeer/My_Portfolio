import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from 'emailjs-com'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);
  setStatus(null);

  try {
    const result = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,   // service ID
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  // template ID
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY    // public key
    );

    console.log("✅ Email sent:", result.text);
    setStatus("success");
    setFormData({ name: "", email: "", message: "" });
  } catch (err) {
    console.error("❌ Email error:", err);
    setStatus("error");
  } finally {
    setLoading(false);
  }
};

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-glow mb-4 sm:mb-6">
              Get In <span className="text-green-500">Touch</span>
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-green-500 mx-auto mb-6 sm:mb-8 rounded-full"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
              Let’s discuss your next project. I’m always open to new
              opportunities and interesting conversations about technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="glassmorphism p-6 sm:p-8 card-hover">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-green-400">
                Let’s Connect
              </h3>

              <div className="space-y-6 break-all">
                {[
                  {
                    icon: <Mail className="h-5 w-5" />,
                    label: "Email",
                    value: "jabeerjabeer1111@gmail.com",
                  },
                  {
                    icon: <Phone className="h-5 w-5" />,
                    label: "Phone",
                    value: "+91 9995069523",
                  },
                  {
                    icon: <MapPin className="h-5 w-5" />,
                    label: "Location",
                    value: "Kerala, Ernakulam, 686671",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start sm:items-center">
                    <div className="p-3 rounded-lg bg-green-500/10 text-green-500 mr-4 flex-shrink-0 hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-400">
                        {item.label}
                      </p>
                      <p className="text-white text-sm sm:text-base break-words">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="text-base sm:text-lg font-medium text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com/in/muhammed-jabeer-203b90331"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 sm:p-4 rounded-lg bg-green-500/10 text-green-500 hover:bg-green-500/20 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                  </a>
                  <a
                    href="https://github.com/MuhammedJabeer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 sm:p-4 rounded-lg bg-green-500/10 text-green-500 hover:bg-green-500/20 transition-colors"
                  >
                    <Github className="h-5 w-5 sm:h-6 sm:w-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glassmorphism p-6 sm:p-8 card-hover">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-green-400">
                Send Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 text-sm sm:text-base"
                />

                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 text-sm sm:text-base"
                />

                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 text-sm sm:text-base"
                />

                <Button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white btn-glow flex justify-center items-center py-2 sm:py-3 text-sm sm:text-base"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>

                {status === "success" && (
                  <p className="text-green-400 text-sm sm:text-base mt-2">
                    ✅ Message sent successfully!
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-400 text-sm sm:text-base mt-2">
                    ❌ Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
