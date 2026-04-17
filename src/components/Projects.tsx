import Image from "next/image";

const projects = [
  {
    title: "勉強時間記録アプリ",
    repo: "study-tracker",
    description:
      "勉強時間を科目別に記録し、グラフで可視化できるWebアプリ。",
    tags: ["TypeScript", "Next.js"],
    link: "https://github.com/hinanahaneishi/study-tracker",
    image: "/project-study.png",
  },
  {
    title: "日記アプリ",
    repo: "diary-app",
    description:
      "日々の出来事を記録して振り返れるシンプルな日記アプリ。",
    tags: ["JavaScript"],
    link: "https://github.com/hinanahaneishi/diary-app",
    image: "/project-diary.png",
  },
  {
    title: "買い物リストアプリ",
    repo: "shopping-list",
    description:
      "買い物リストを追加・管理できるWebアプリ。",
    tags: ["HTML"],
    link: "https://github.com/hinanahaneishi/shopping-list",
    image: "/project-shopping.png",
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
              <div className="relative aspect-video rounded-lg mb-4 overflow-hidden bg-gradient-to-br from-accent-pale/60 to-accent-light/20">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-accent-light font-mono mb-2">
                {project.repo}
              </p>
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
