import profileImg from "@/assets/dp.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <p className="font-mono text-primary text-sm">{"// About Me"}</p>
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-foreground">
              Building digital experiences<span className="text-primary">_</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hey there! I'm a passionate developer who loves turning ideas into reality through code. 
                I specialize in full-stack development with a focus on creating clean, efficient, and 
                user-friendly applications.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or learning about the latest trends in web development.
              </p>
              <p>
                I believe in writing code that not only works but is also maintainable and scalable. 
                Every project is an opportunity to learn something new and push the boundaries of what's possible.
              </p>
            </div>
          </div>
          
         <div className="relative animate-scale-in flex justify-center" style={{ animationDelay: "0.3s" }}>
            <div className="w-72 aspect-square rounded-2xl overflow-hidden border-2 border-primary/20 card-shadow">
              <img
                src={profileImg}
                alt="Razel Rollback"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
