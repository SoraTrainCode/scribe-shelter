import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Github, PlusCircle } from "lucide-react";

interface BlogHeaderProps {
  title: string;
  description: string;
  githubUrl?: string;
}

export const BlogHeader = ({ title, description, githubUrl }: BlogHeaderProps) => {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-blog-hero mb-2">
              {title}
            </h1>
            <p className="text-lg text-blog-subtitle max-w-2xl">
              {description}
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <ThemeToggle />
            
            {githubUrl && (
              <Button 
                variant="outline" 
                size="sm" 
                asChild
                className="hidden sm:flex"
              >
                <a 
                  href={githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  View Source
                </a>
              </Button>
            )}
            
            <Button 
              variant="default" 
              size="sm"
              asChild
              className="bg-primary hover:bg-primary-hover"
            >
              <a 
                href={`${githubUrl}/new/main?filename=posts/new-post.md`}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <PlusCircle className="h-4 w-4" />
                <span className="hidden sm:inline">New Post</span>
                <span className="sm:hidden">New</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};