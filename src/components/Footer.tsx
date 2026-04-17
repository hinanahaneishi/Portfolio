export default function Footer() {
  return (
    <footer className="border-t border-glass-border py-8 px-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          &copy; 2026 <span className="text-gradient font-medium">Hinana Haneishi</span>. All rights reserved.
        </p>
        <a
          href="#"
          className="text-sm text-muted hover:text-accent transition-colors"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}
