const skills = [
  {
    category: "Language",
    items: [
      { name: "Python", level: "実務で使用可能" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: "基本操作・ブランチ運用" },
      { name: "GitHub", level: "PR・Issue管理" },
    ],
  },
  {
    category: "Learning",
    items: [
      { name: "HTML / CSS", level: "学習中" },
      { name: "JavaScript", level: "学習中" },
      { name: "React / Next.js", level: "学習中" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="section-divider mb-24" />
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-sm tracking-widest text-accent-light uppercase mb-2">
              Skills
            </p>
            <h2 className="text-3xl font-bold tracking-tight">
              <span className="text-gradient">技術スタック</span>
            </h2>
          </div>
          <div className="md:col-span-8">
            <div className="glass rounded-2xl p-8 pink-glow">
              <div className="space-y-10">
                {skills.map((group) => (
                  <div key={group.category}>
                    <h3 className="text-sm font-semibold tracking-widest uppercase text-accent-light mb-4">
                      {group.category}
                    </h3>
                    <div className="space-y-3">
                      {group.items.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center justify-between py-3 border-b border-glass-border"
                        >
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm tag-pink px-3 py-1 rounded-full">
                            {skill.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
