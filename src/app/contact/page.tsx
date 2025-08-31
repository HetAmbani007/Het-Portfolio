import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-gray-900 via-gray-800 to-black px-6 py-32"
    >
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Let&apos;s Connect
        </h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          I love connecting with new people! Whether it’s a project, a
          collaboration, or just a friendly hello, your message is always
          welcome. Let’s make something great together.
        </p>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-7xl">
        <ContactForm />
      </div>
    </section>
  );
}
