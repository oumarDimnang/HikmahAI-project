const Footer = () => {
  return (
    <footer className="bg-base-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-sm text-base-content/50 font-firaCode">
            © {new Date().getFullYear()} HikmahAI. All rights reserved.
          </div>
          <div className="text-sm text-base-content/50 font-firaCode">
            <p>Every content is AI-generated</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
