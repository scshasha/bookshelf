const Footer = () => {
  return (
    <footer className="footer bg-light text-center text-lg-start mt-auto">
      <div className="container mx-auto text-center p-2">
        <p className="text-muted">
          &copy; {new Date().getFullYear()} BookShelf.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
