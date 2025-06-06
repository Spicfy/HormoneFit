const Footer = () => (
  <footer className="w-full flex justify-center items-center">
    <div className="w-full rounded-none bg-white px-50 py-12 flex flex-col items-center">
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-20 mb-10">
 
        <div className="flex-1 flex flex-col items-center md:items-start mb-20 md:mb-0">
          <div className="w-30 h-30 bg-[#F3E5F5] rounded-xl flex items-center justify-center mb-4">
          </div>
          <p className="text-sm text-gray-600 text-center md:text-left">
            Empowering women through personalized menopause care
          </p>
        </div>

        <div className="flex-1">
          <h4 className="font-semibold text-gray-600 mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="/about" className="text-gray-600">About Us</a></li>
            <li><a href="/treatments" className="text-gray-600">Treatments</a></li>

          </ul>
        </div>

        <div className="flex-1">
          <h4 className="font-semibold text-gray-600 mb-4">Support</h4>
          <ul className="space-y-2">
            <li>
              <a href="/faq" className="text-gray-600">FAQ</a>
            </li>
            <li><a href="#" className="text-gray-600">Contact Us</a></li>
          </ul>
        </div> 

        <div className="flex-1">
          <h4 className="font-semibold mb-4 text-gray-600">Social</h4>
          <div className="flex flex-row gap-4">
            <a href="#" className="text-gray-600"><i className="fab fa-instagram" /></a>
            <a href="#" className="text-gray-600"><i className="fab fa-facebook" /></a>
            <a href="#" className="text-gray-600"><i className="fab fa-twitter" /></a>
            <a href="#" className="text-gray-600"><i className="fab fa-linkedin" /></a>
          </div>
        </div>
      </div>
      <hr className="w-full border-t border-gray-100 my-3" />
      <div className="w-full text-center text-sm text-gray-500">© {new Date().getFullYear()} HormoneFit | All Rights Reserved</div>
    </div>
  </footer>
);

export default Footer; 