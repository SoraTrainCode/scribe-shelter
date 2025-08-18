import { Calendar, Clock, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
  date: string;
  readTime: string;
  slug: string;
}

interface PostCardProps {
  post: BlogPost;
  onReadMore: (post: BlogPost) => void;
}

export const PostCard = ({ post, onReadMore }: PostCardProps) => {
  return (
    <Card className="group p-6 bg-card hover:bg-card-hover border-border transition-all duration-300 hover:shadow-card-hover cursor-pointer">
      <div onClick={() => onReadMore(post)} className="space-y-4">
        {/* Header */}
        <div className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors">
            {post.title}
          </h2>
          
          {/* Meta information */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-blog-date">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </div>
          </div>
        </div>

        {/* Excerpt */}
        <p className="text-blog-excerpt leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-blog-tag-bg text-blog-tag hover:bg-blog-tag hover:text-white transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Read More Button */}
      <div className="mt-6 pt-4 border-t border-border/50">
        <Button
          variant="ghost"
          className="text-primary hover:text-primary-hover hover:bg-primary/10 transition-colors w-full justify-between group"
          onClick={(e) => {
            e.stopPropagation();
            onReadMore(post);
          }}
        >
          <span>Read full article</span>
          <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </Card>
  );
};