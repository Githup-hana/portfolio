import { useState } from "react";
import { useTranslation } from "react-i18next";
import webImg from "../../../assets/ webdeweloper2.jpg";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaUser,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

function GetInTouch() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim())
      newErrors.name = t("nameRequired") || "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = t("emailRequired") || "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("emailInvalid") || "Email format is invalid";
    }
    if (!formData.subject.trim())
      newErrors.subject = t("subjectRequired") || "Subject is required";
    if (!formData.message.trim())
      newErrors.message = t("messageRequired") || "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  return (
    <div
      className="min-h-screen relative flex items-center justify-center py-12 px-4"
      style={{
        backgroundImage: `url(${webImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent drop-shadow-2xl mb-4">
                {t("GetInTouch") || "Get In Touch"}
              </h1>

              {/* Animated Underline */}
              <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto lg:mx-0 rounded-full animate-pulse mb-6"></div>

              <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-light">
                {t("contactDescription") ||
                  "Have a project in mind? Let's collaborate and create something amazing!"}
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {/* Email Card */}
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">
                      {t("email") || "Email"}
                    </h3>
                    <a
                      href="mailto:hana.abrham@dci-student.org"
                      className="text-blue-300 hover:text-blue-400 transition-colors"
                    >
                      hanaabrham25@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">
                      {t("location") || "Location"}
                    </h3>
                    <p className="text-gray-300">{t("germany") || "Germany"}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4">
              <a
                href="https://github.com/Githup-hana"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/hana-abrham-212551290"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="mailto:hana.abrham@dci-student.org"
                className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110"
              >
                <FaEnvelope className="text-xl" />
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
            {/* Success Message */}
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3">
                <FaCheckCircle className="text-green-400 text-xl" />
                <div>
                  <h3 className="text-green-400 font-semibold">
                    {t("messageSent") || "Message Sent!"}
                  </h3>
                  <p className="text-green-300 text-sm">
                    {t("messageThankYou") ||
                      "Thank you for your message. I'll get back to you soon!"}
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-white font-medium mb-2">
                  <FaUser className="inline mr-2" />
                  {t("name") || "Name"} *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-4 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                    errors.name ? "border-red-500" : "border-white/30"
                  }`}
                  placeholder={t("namePlaceholder") || "Your full name"}
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-white font-medium mb-2">
                  <FaEnvelope className="inline mr-2" />
                  {t("email") || "Email"} *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-4 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                    errors.email ? "border-red-500" : "border-white/30"
                  }`}
                  placeholder={
                    t("emailPlaceholder") || "your.email@example.com"
                  }
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-white font-medium mb-2">
                  {t("subject") || "Subject"} *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full p-4 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                    errors.subject ? "border-red-500" : "border-white/30"
                  }`}
                  placeholder={t("subjectPlaceholder") || "What's this about?"}
                />
                {errors.subject && (
                  <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-white font-medium mb-2">
                  {t("message") || "Message"} *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full p-4 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none ${
                    errors.message ? "border-red-500" : "border-white/30"
                  }`}
                  placeholder={
                    t("messagePlaceholder") ||
                    "Tell me about your project or idea..."
                  }
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button - Styled like Home page buttons */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full bg-white/10 hover:bg-white/20 backdrop-blur-lg text-white font-semibold py-4 px-8 rounded-xl border border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
              >
                {/* Button Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Button Content */}
                <div className="relative flex items-center gap-3">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>{t("sending") || "Sending..."}</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1" />
                      <span>{t("sendMessage") || "Send Message"}</span>
                    </>
                  )}
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
