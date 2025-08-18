import { useState, useMemo } from "react";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { SearchAndFilters } from "@/components/blog/SearchAndFilters";
import { PostCard } from "@/components/blog/PostCard";
import { PostModal } from "@/components/blog/PostModal";
import { mockPosts, getAllTags } from "@/data/mockPosts";
import type { BlogPost } from "@/components/blog/PostCard";

const Index = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'date' | 'title'>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const availableTags = getAllTags();

  const filteredAndSortedPosts = useMemo(() => {
    let filtered = mockPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.content.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesTags = selectedTags.length === 0 || 
                         selectedTags.some(tag => post.tags.includes(tag));
      
      return matchesSearch && matchesTags;
    });

    return filtered.sort((a, b) => {
      let comparison = 0;
      
      if (sortBy === 'date') {
        comparison = new Date(a.date).getTime() - new Date(b.date).getTime();
      } else {
        comparison = a.title.localeCompare(b.title);
      }
      
      return sortOrder === 'asc' ? comparison : -comparison;
    });
  }, [searchTerm, selectedTags, sortBy, sortOrder]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleSortChange = (newSortBy: 'date' | 'title', newOrder: 'asc' | 'desc') => {
    setSortBy(newSortBy);
    setSortOrder(newOrder);
  };

  const handleReadMore = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const blogConfig = {
    title: "Developer's Corner",
    description: "Thoughts, tutorials, and insights on modern web development, programming patterns, and the ever-evolving tech landscape.",
    githubUrl: "https://github.com/yourusername/your-blog-repo"
  };

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader 
        title={blogConfig.title}
        description={blogConfig.description}
        githubUrl={blogConfig.githubUrl}
      />
      
      <SearchAndFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedTags={selectedTags}
        onTagToggle={handleTagToggle}
        availableTags={availableTags}
        sortBy={sortBy}
        sortOrder={sortOrder}
        onSortChange={handleSortChange}
      />

      <main className="container mx-auto px-4 pb-12">
        {filteredAndSortedPosts.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-muted-foreground mb-4">
              No posts found
            </h2>
            <p className="text-blog-excerpt">
              Try adjusting your search terms or selected tags.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:gap-8">
            {filteredAndSortedPosts.map((post) => (
              <PostCard 
                key={post.id} 
                post={post} 
                onReadMore={handleReadMore}
              />
            ))}
          </div>
        )}
      </main>

      <PostModal
        post={selectedPost}
        isOpen={selectedPost !== null}
        onClose={() => setSelectedPost(null)}
      />
    </div>
  );
};

export default Index;