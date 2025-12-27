import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Send, Mail, MessageSquare, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Test Test Test",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-16 animate-fade-in">
          <p className="font-mono text-primary text-sm mb-4">{"// Contact"}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-foreground">
            Get In Touch<span className="text-primary">_</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Have a project in mind? Let's work together!
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-card p-8 rounded-2xl border border-border card-shadow animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-mono text-foreground">
              <User className="h-4 w-4 text-primary" />
              Name
            </label>
            <Input
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-background border-border focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-mono text-foreground">
              <Mail className="h-4 w-4 text-primary" />
              Email
            </label>
            <Input
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-background border-border focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-mono text-foreground">
              <MessageSquare className="h-4 w-4 text-primary" />
              Message
            </label>
            <Textarea
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              className="bg-background border-border focus:border-primary resize-none"
            />
          </div>

          <Button
            type="submit"
            variant="hero"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                Send Message
                <Send className="h-4 w-4 ml-2" />
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
