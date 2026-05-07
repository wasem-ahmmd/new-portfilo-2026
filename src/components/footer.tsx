export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2 text-white">
              Wasim Ahmed
            </h3>
            <p className="text-gray-400">
              Building beautiful digital experiences
            </p>
          </div>
          
          <div className="flex justify-center gap-8 mb-8">
            <a href="#home" className="text-gray-400 hover:text-[#4F46E5] transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-400 hover:text-[#4F46E5] transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-400 hover:text-[#4F46E5] transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-[#4F46E5] transition-colors">
              Contact
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Wasim Ahmed. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
