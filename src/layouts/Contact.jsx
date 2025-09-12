import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
        Let's{" "}
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Connect
        </span>
      </h2>

      <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
        I'm always interested in new opportunities and interesting projects.
        Let's discuss how we can work together to bring your ideas to life.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <a
          href="mailto:lutfirobbani369@gmail.com"
          className="group block text-center"
        >
          {/* Lingkaran Icon */}
          <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
            <Mail className="text-white" size={24} />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
          <div className="opacity-0 -translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
            <p className="text-gray-300">lutfirobbani369@gmail.com</p>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/lutfi-robbani"
          target="_blank"
          rel="noopener noreferrer"
          className="group block text-center"
        >
          {/* Lingkaran Icon */}
          <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
            <Linkedin className="text-white" size={24} />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
          <div className="opacity-0 -translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
            <p className="text-gray-300 font-[cursive]">
              www.linkedin.com/in/lutfi-robbani
            </p>
          </div>
        </a>

        <a
          href="https://github.com/Lutfi1412"
          target="_blank"
          rel="noopener noreferrer"
          className="group block text-center"
        >
          {/* Lingkaran Icon */}
          <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
            <Github className="text-white" size={24} />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
          <div className="opacity-0 -translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
            <p className="text-gray-300 font-[cursive]">github.com/Lutfi1412</p>
          </div>
        </a>
      </div>

      <a
        href="https://wa.me/6288294159975"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
      >
        Send Message
      </a>
    </div>
  );
}
