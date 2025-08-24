export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="max-w-4xl mx-auto px-4 py-6 text-sm text-center text-gray-600">
        © {new Date().getFullYear()} Eden Belanger — built with ❤️
      </div>
    </footer>
  );
}
