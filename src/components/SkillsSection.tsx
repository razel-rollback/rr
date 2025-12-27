const confidentSkills = [
  { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"},
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
];

const experiencedSkills = [
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"},
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"}, 
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
];

const SkillCard = ({ skill }) => (
  <div className="skill-card flex flex-col items-center gap-2 p-4 rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:-translate-y-0.5">
    <img src={skill.icon} alt={skill.name} className="w-16 h-16 object-contain" />
    <span className="font-mono font-medium text-foreground text-center">
      {skill.name}
    </span>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="font-mono text-primary text-sm mb-4">
            {"// Skills"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-foreground">
            What I Work With<span className="text-primary">_</span>
          </h2>
        </div>

        {/* Confident skills (top) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {confidentSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>

        {/* Experienced skills (bottom) */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 opacity-90">
          {experiencedSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.05 + 0.3}s` }}
            >
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
