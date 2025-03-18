export default function Footer() {
    return (
      <footer className="bg-blue-900 text-white py-8 pt-9">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2023 Job Junction. All rights reserved.</p>
          <div className="mt-4">
            <a href="/about" className="px-3">About Us</a>
            <a href="/contact" className="px-3">Contact</a>
            <a href="/privacy" className="px-3">Privacy Policy</a>
          </div>
        </div>
      </footer>
    );
  }