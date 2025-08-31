"use client";

import { motion } from "framer-motion";
import { Mail, Clock, Linkedin, Github, Twitter } from "lucide-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

// Validation schema
const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  phone: yup.string().required("Phone Number is required"),
  subject: yup.string().required("Subject is required"),
  message: yup
    .string()
    .required("Message is required")
    .min(100, "Message must be at least 100 characters"),
});

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  subject: string;
  message: string;
};

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      toast.success("Message sent successfully! ✅");
      reset();
    } catch (error) {
      toast.error("Failed to send message! ❌");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 sm:px-6 py-12">
      {/* React Hot Toast */}
      <Toaster position="top-right" reverseOrder={false} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 w-full max-w-7xl">
        {/* Left Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          whileHover={{ y: -5 }}
          className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl flex flex-col justify-between transition-all duration-300"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">
            Get in Touch
          </h2>
          <div className="space-y-4 sm:space-y-5 text-gray-200">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-3 rounded-full bg-red-500/20 border border-red-400/40 hover:bg-red-500/30 hover:scale-110 transition-all">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
              </div>
              <span className="text-gray-300 text-sm sm:text-base">
                hetambani541@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-3 rounded-full bg-green-500/20 border border-green-400/40 hover:bg-green-500/30 hover:scale-110 transition-all">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
              </div>
              <span className="text-gray-300 text-sm sm:text-base">
                Responds within 24 hours
              </span>
            </div>
          </div>

          <div className="flex gap-4 sm:gap-6 mt-8 sm:mt-12">
            <a
              href="#"
              target="_blank"
              className="p-3 sm:p-4 rounded-full bg-blue-500/20 border border-blue-400/40 hover:bg-blue-500/30 hover:scale-110 transition-all"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
            </a>
            <a
              href="#"
              target="_blank"
              className="p-3 sm:p-4 rounded-full bg-gray-500/20 border border-gray-400/40 hover:bg-gray-500/30 hover:scale-110 transition-all"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300" />
            </a>
            <a
              href="#"
              target="_blank"
              className="p-3 sm:p-4 rounded-full bg-sky-500/20 border border-sky-400/40 hover:bg-sky-500/30 hover:scale-110 transition-all"
            >
              <Twitter className="w-5 h-5 sm:w-6 sm:h-6 text-sky-400" />
            </a>
          </div>
        </motion.div>

        {/* Right Card - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          whileHover={{ y: -5 }}
          className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl transition-all duration-300"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">
            Send a Message
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 sm:space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <input
                  {...register("firstName")}
                  placeholder="First Name"
                  className="w-full p-3 sm:p-4 rounded-xl bg-white/10 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-sm sm:text-base"
                />
                {errors.firstName && (
                  <span className="text-red-400 text-sm mt-1">
                    {errors.firstName.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  {...register("lastName")}
                  placeholder="Last Name"
                  className="w-full p-3 sm:p-4 rounded-xl bg-white/10 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-sm sm:text-base"
                />
                {errors.lastName && (
                  <span className="text-red-400 text-sm mt-1">
                    {errors.lastName.message}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col">
              <input
                {...register("phone")}
                placeholder="Phone Number"
                className="w-full p-3 sm:p-4 rounded-xl bg-white/10 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-sm sm:text-base"
              />
              {errors.phone && (
                <span className="text-red-400 text-sm mt-1">
                  {errors.phone.message}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <input
                {...register("subject")}
                placeholder="Subject"
                className="w-full p-3 sm:p-4 rounded-xl bg-white/10 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-sm sm:text-base"
              />
              {errors.subject && (
                <span className="text-red-400 text-sm mt-1">
                  {errors.subject.message}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <textarea
                {...register("message")}
                placeholder="Your Message (min 100 characters)"
                className="w-full p-3 sm:p-4 rounded-xl bg-white/10 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 h-32 sm:h-36 transition resize-none text-sm sm:text-base"
              />
              {errors.message && (
                <span className="text-red-400 text-sm mt-1">
                  {errors.message.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-600 hover:bg-blue-700 transition py-3 sm:py-4 rounded-xl text-white font-semibold text-lg sm:text-xl ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
