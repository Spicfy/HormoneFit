import Image from "next/image";
import Link from 'next/link';

const Footer = () => (
  <footer className="w-full bg-[#1A1A2E] text-white py-16 px-4 md:px-24">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="flex flex-col items-start">
        <Link href="/" className="flex items-center mb-4">
          <span className="text-2xl font-bold bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent">HormoneFit</span>
        </Link>
        <p className="text-gray-400 text-sm">
          Specialized menopause care for Canadian women, delivered virtually.
        </p>
      </div>

      <div>
        <h4 className="font-bold text-lg mb-4 text-white">Services</h4>
        <ul className="space-y-3 text-gray-400 text-sm">
          <li><Link href="/services/hormone-therapy" className="hover:text-accent1 transition-colors">Hormone Therapy</Link></li>
          <li><Link href="/services/non-hormonal-options" className="hover:text-accent1 transition-colors">Non-Hormonal Options</Link></li>
          <li><Link href="/services/lifestyle-support" className="hover:text-accent1 transition-colors">Lifestyle Support</Link></li>
          <li><Link href="/services/premium-products" className="hover:text-accent1 transition-colors">Premium Products</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-lg mb-4 text-white">Company</h4>
        <ul className="space-y-3 text-gray-400 text-sm">
          <li><Link href="/about" className="hover:text-accent1 transition-colors">About Us</Link></li>
          <li><Link href="/doctors" className="hover:text-accent1 transition-colors">Our Doctors</Link></li>
          <li><Link href="/careers" className="hover:text-accent1 transition-colors">Careers</Link></li>
          <li><Link href="/press" className="hover:text-accent1 transition-colors">Press</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-lg mb-4 text-white">Legal</h4>
        <ul className="space-y-3 text-gray-400 text-sm">
          <li><Link href="/privacy" className="hover:text-accent1 transition-colors">Privacy Policy</Link></li>
          <li><Link href="/terms" className="hover:text-accent1 transition-colors">Terms of Service</Link></li>
          <li><Link href="/cookie-policy" className="hover:text-accent1 transition-colors">Cookie Policy</Link></li>
        </ul>
      </div>
    </div>

    <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
      <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} HormoneFit. All rights reserved.</p>
      <p>Proudly Canadian-owned and operated.</p>
    </div>
  </footer>
);

export default Footer; 