const Footer = () => {
  return (
    <footer className="footer bg-light text-center text-lg-start mt-auto">
      <div className="container mx-auto text-center p-2">
        <p>&copy; 2023 BookShelf. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-gray-400 hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
