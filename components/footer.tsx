const Footer = () => (
  <footer className="w-full flex justify-center items-center">
    <div className="w-full rounded-none bg-white px-4 md:px-50 py-12 flex flex-col items-center">
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-20 mb-10">
 
        <div className="flex-1 flex-col items-start mb-10 md:mb-0 hidden md:flex">
          <div className="w-30 h-30 bg-[#F3E5F5] rounded-xl flex items-center justify-center mb-4"></div>
          <p className="text-sm text-gray-600 text-left">
            Empowering women through personalized menopause care
          </p>
        </div>

        <div className="flex-1 w-full md:w-auto mb-6 md:mb-0 flex flex-col items-start text-left">
          <h4 className="font-semibold text-gray-600 mb-4 text-left">Company</h4>
          <ul className="space-y-2">
            <li><a href="/about" className="text-gray-600">About Us</a></li>
            <li><a href="/treatments" className="text-gray-600">Treatments</a></li>
          </ul>
        </div>

        <div className="flex-1 w-full md:w-auto mb-6 md:mb-0 flex flex-col items-start text-left">
          <h4 className="font-semibold text-gray-600 mb-4 text-left">Support</h4>
          <ul className="space-y-2">
            <li><a href="/faq" className="text-gray-600">FAQ</a></li>
            <li><a href="/contact" className="text-gray-600">Contact Us</a></li>
          </ul>
        </div> 
        
        <div className="flex-1 w-full md:w-auto flex flex-col items-start text-left">
          <h4 className="font-semibold mb-4 text-gray-600 text-left">Social</h4>
          <div className="flex flex-col gap-2 text-gray-600">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">Instagram</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">LinkedIn</a>
          </div>
        </div>

      </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 text-sm text-gray-500">
            <div>© {new Date().getFullYear()} HormoneFit</div>
            <div className="flex items-center gap-2">
                <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
                <span>|</span>
                <a href="/terms-and-conditions" className="hover:underline">Terms & Conditions</a>
            </div>
        </div>


    </div>
  </footer>
);

export default Footer; 