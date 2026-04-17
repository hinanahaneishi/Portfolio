export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="section-divider mb-24" />
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-sm tracking-widest text-accent-light uppercase mb-2">
              About
            </p>
            <h2 className="text-3xl font-bold tracking-tight">
              <span className="text-gradient">自己紹介</span>
            </h2>
          </div>
          <div className="md:col-span-8">
            <div className="glass rounded-2xl p-8 pink-glow space-y-6">
              <p className="text-muted leading-relaxed">
                羽石陽凪です。現在、エンジニアを目指して学習中の学生です。
                東京理科大学創域情報学部情報理工学科に通っている１年生です。
                Webアプリケーション開発やデータサイエンスなどに興味を持っています。
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4 border-t border-glass-border">
                <div>
                  <p className="text-sm text-accent-light mb-1">所在地</p>
                  <p className="font-medium">日本</p>
                </div>
                <div>
                  <p className="text-sm text-accent-light mb-1">興味分野</p>
                  <p className="font-medium">Web開発 / データ分析</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
