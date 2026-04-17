const projects = [
  {
    title: "study-",
    description:
      "勉強時間を科目別に記録・可視化するNext.jsアプリ。",
    tags: ["TypeScript", "Next.js"],
    link: "https://github.com/hinanahaneishi/study-",
  },
  {
    title: "diary-app",
    description:
      "日々の出来事を記録する日記アプリ。",
    tags: ["JavaScript"],
    link: "https://github.com/hinanahaneishi/diary-app",
  },
  {
    title: "shopping-list",
    description:
      "買い物リストを管理するアプリケーションです。",
    tags: ["HTML"],
    link: "https://github.com/hinanahaneishi/shopping-list",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="section-divider mb-24" />
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-sm tracking-widest text-accent-light uppercase mb-2">
            Projects
          </p>
          <h2 className="text-3xl font-bold tracking-tight">
            <span className="text-gradient">制作物</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass rounded-2xl p-6 hover:shadow-[0_0_32px_rgba(233,30,140,0.12)] transition-all hover:-translate-y-1"
            >
              <div className="aspect-video bg-gradient-to-br from-accent-pale/60 to-accent-light/20 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-sm text-accent-light">Image</span>
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 tag-pink rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
