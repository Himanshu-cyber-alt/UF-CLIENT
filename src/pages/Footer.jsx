
export default function Footer() {
  const footerLinks = [
    { name: "About", url: "/about" },
    { name: "Help Center", url: "/help-center" },
    { name: "Terms of Service", url: "/term-of-service" },
    { name: "Privacy Policy", url: "/privacy" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 p-4 text-sm flex flex-col items-center text-center">
      <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-3">
        {footerLinks.map((link, idx) => (
          <a key={idx} href={link.url} className="hover:text-white transition">
            {link.name}
          </a>
        ))}
      </div>
      <div className="text-gray-500">&copy; 2025 𐂂 Corp.</div>
    </footer>
  );
}
