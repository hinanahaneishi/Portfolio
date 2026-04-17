import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-6xl w-full text-center">
        <div className="flex justify-center mb-8 animate-fade-in-up">
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden ring-2 ring-accent/30 shadow-[0_0_40px_rgba(233,30,140,0.25)]">
            <Image
              src="/profile.jpg"
              alt="羽石陽凪"
              fill
              sizes="(min-width: 768px) 12rem, 10rem"
              className="object-cover"
              priority
            />
          </div>
        </div>
        <p className="text-sm tracking-widest text-accent-light uppercase mb-4 animate-fade-in-up">
          Portfolio
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up animation-delay-200">
          <span className="text-gradient">羽石</span>{" "}
          <span className="text-foreground">陽凪</span>
        </h1>
        <div className="animate-fade-in-up animation-delay-600 mt-10">
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-sm border border-accent/30 rounded-full px-6 py-3 text-accent hover:bg-accent hover:text-white transition-all hover:shadow-[0_0_24px_rgba(233,30,140,0.25)]"
          >
            View More
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="mt-px"
            >
              <path
                d="M8 3v10m0 0l4-4m-4 4L4 9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
