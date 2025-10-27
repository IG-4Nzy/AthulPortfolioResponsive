import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { socialLinks } from "@/lib/constants";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">
              Let's Build Something{" "}
              <span className="text-gradient">Amazing</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Have a project in mind? Let's discuss how we can work together
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="glass-strong rounded-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    required
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="bg-background/50 border-primary/20 focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-primary"
                >
                  Send Message
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="glass-strong rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                <p className="text-muted-foreground mb-6">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a
                        className="font-medium"
                        href="mailto:athulkrishnanas321@gmail.com"
                      >
                        athulkrishnanas321@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-strong rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">Social Links</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, i) => (
                    <Button
                      key={i}
                      variant="outline"
                      size="icon"
                      className="border-primary/20 hover:border-primary hover:bg-primary/10 hover:glow-primary transition-all"
                      asChild
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>

              <div className="glass-strong rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">Availability</h3>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="font-medium text-green-500">
                    Available for work
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Open to freelance projects and full-time opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
