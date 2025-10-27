import { NAME } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">{NAME}</p>
          <p className="text-sm text-muted-foreground">
            Built with <span className="text-primary">React</span> +{" "}
            <span className="text-primary">TypeScript</span> +{" "}
            <span className="text-primary">TailwindCSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
