import { useState } from "react";
import { Search, SortAsc, SortDesc, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SearchAndFiltersProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
  availableTags: string[];
  sortBy: 'date' | 'title';
  sortOrder: 'asc' | 'desc';
  onSortChange: (sortBy: 'date' | 'title', order: 'asc' | 'desc') => void;
}

export const SearchAndFilters = ({
  searchTerm,
  onSearchChange,
  selectedTags,
  onTagToggle,
  availableTags,
  sortBy,
  sortOrder,
  onSortChange,
}: SearchAndFiltersProps) => {
  const [isTagsExpanded, setIsTagsExpanded] = useState(false);

  return (
    <div className="container mx-auto px-4 py-6 space-y-4">
      {/* Search Bar */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 bg-card border-border shadow-sm focus:shadow-search transition-shadow"
        />
      </div>

      {/* Filters Row */}
      <div className="flex flex-wrap items-center gap-3 justify-between">
        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">Tags:</span>
          {availableTags.slice(0, isTagsExpanded ? availableTags.length : 6).map((tag) => (
            <Badge
              key={tag}
              variant={selectedTags.includes(tag) ? "default" : "secondary"}
              className={`cursor-pointer transition-colors ${
                selectedTags.includes(tag)
                  ? "bg-blog-tag text-white hover:bg-blog-tag/90"
                  : "bg-blog-tag-bg text-blog-tag hover:bg-blog-tag-bg/80"
              }`}
              onClick={() => onTagToggle(tag)}
            >
              {tag}
            </Badge>
          ))}
          {availableTags.length > 6 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsTagsExpanded(!isTagsExpanded)}
              className="text-xs"
            >
              {isTagsExpanded ? "Show Less" : `+${availableTags.length - 6} more`}
            </Button>
          )}
        </div>

        {/* Sort Options */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              {sortOrder === 'asc' ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />}
              Sort by {sortBy}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onSortChange('date', 'desc')}>
              Newest First
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onSortChange('date', 'asc')}>
              Oldest First
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onSortChange('title', 'asc')}>
              Title A-Z
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onSortChange('title', 'desc')}>
              Title Z-A
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Active Filters */}
      {selectedTags.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-muted-foreground">Active filters:</span>
          {selectedTags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-accent text-accent-foreground cursor-pointer"
              onClick={() => onTagToggle(tag)}
            >
              {tag} ×
            </Badge>
          ))}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => selectedTags.forEach(tag => onTagToggle(tag))}
            className="text-xs"
          >
            Clear all
          </Button>
        </div>
      )}
    </div>
  );
};