import { BlogPost } from "@/components/blog/PostCard";

export const mockPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building a Modern Blog with React and TailwindCSS",
    excerpt: "Learn how to create a beautiful, responsive blog using React, TailwindCSS, and modern web development practices. This comprehensive guide covers everything from setup to deployment.",
    content: `# Building a Modern Blog with React and TailwindCSS

In this comprehensive guide, we'll explore how to build a modern, responsive blog using React and TailwindCSS. This approach combines the power of component-based architecture with utility-first CSS for rapid development.

## Why React for Blogging?

React provides several advantages for blog development:

- **Component Reusability**: Create reusable UI components
- **State Management**: Handle complex interactions
- **SEO Friendly**: With proper SSR/SSG setup
- **Performance**: Optimized rendering and bundle splitting

## Getting Started

First, let's set up our development environment:

\`\`\`bash
npm create react-app my-blog
cd my-blog
npm install tailwindcss
\`\`\`

### Setting up TailwindCSS

TailwindCSS offers utility-first styling that makes development faster:

\`\`\`css
@tailwind base;
@tailwind components;
@tailwind utilities;
\`\`\`

## Key Features to Implement

1. **Responsive Design**: Mobile-first approach
2. **Dark Mode**: Theme switching capability
3. **Search & Filtering**: Enhanced user experience
4. **Markdown Support**: Rich content authoring

> Remember: Always prioritize user experience and accessibility when building web applications.

## Advanced Techniques

For production applications, consider implementing:

- Server-side rendering (SSR)
- Static site generation (SSG)
- Progressive Web App (PWA) features
- Advanced SEO optimization

This approach ensures your blog is fast, accessible, and search engine friendly.`,
    tags: ["React", "TailwindCSS", "Web Development", "Tutorial"],
    date: "2024-01-15",
    readTime: "8 min read",
    slug: "building-modern-blog-react-tailwindcss"
  },
  {
    id: "2",
    title: "Mastering TypeScript: Advanced Patterns and Best Practices",
    excerpt: "Dive deep into TypeScript's advanced features including utility types, conditional types, and design patterns that will make your code more robust and maintainable.",
    content: `# Mastering TypeScript: Advanced Patterns and Best Practices

TypeScript has revolutionized how we write JavaScript by adding static type checking. Let's explore advanced patterns that can elevate your TypeScript skills.

## Utility Types

TypeScript provides several built-in utility types:

\`\`\`typescript
// Pick specific properties
type UserBasic = Pick<User, 'id' | 'name'>;

// Omit unwanted properties
type CreateUser = Omit<User, 'id' | 'createdAt'>;

// Make all properties optional
type PartialUser = Partial<User>;
\`\`\`

## Conditional Types

Create types that depend on conditions:

\`\`\`typescript
type ApiResponse<T> = T extends string 
  ? { message: T } 
  : { data: T };
\`\`\`

## Best Practices

1. **Use strict mode**: Enable strict TypeScript settings
2. **Prefer interfaces**: For object shapes and contracts
3. **Use union types**: Instead of enums for simple cases
4. **Generic constraints**: Make your generics more specific

These patterns help create more maintainable and type-safe applications.`,
    tags: ["TypeScript", "JavaScript", "Programming", "Best Practices"],
    date: "2024-01-12",
    readTime: "6 min read",
    slug: "mastering-typescript-advanced-patterns"
  },
  {
    id: "3",
    title: "The Art of CSS Grid: Creating Complex Layouts Made Simple",
    excerpt: "Explore the power of CSS Grid Layout and learn how to create sophisticated, responsive layouts with clean, semantic code. Perfect for modern web design.",
    content: `# The Art of CSS Grid: Creating Complex Layouts Made Simple

CSS Grid has transformed how we approach web layout design. Let's explore its capabilities and learn how to create sophisticated layouts.

## Grid Fundamentals

CSS Grid operates on two axes:

- **Block axis**: Typically vertical (rows)
- **Inline axis**: Typically horizontal (columns)

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr auto;
  gap: 1rem;
}
\`\`\`

## Advanced Grid Techniques

### Named Grid Lines

\`\`\`css
.grid {
  grid-template-columns: 
    [sidebar-start] 250px 
    [sidebar-end main-start] 1fr 
    [main-end];
}
\`\`\`

### Grid Areas

Define layout regions semantically:

\`\`\`css
.grid {
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
}
\`\`\`

## Real-World Examples

CSS Grid excels at:

1. **Dashboard layouts**: Complex data visualization interfaces
2. **Magazine-style layouts**: Multi-column, varied content
3. **Card grids**: Responsive product galleries
4. **Form layouts**: Aligned form controls

> Pro tip: Use CSS Grid for two-dimensional layouts and Flexbox for one-dimensional layouts.

Grid provides unprecedented control over layout, making responsive design intuitive and maintainable.`,
    tags: ["CSS", "Grid", "Layout", "Web Design", "Frontend"],
    date: "2024-01-10",
    readTime: "5 min read",
    slug: "css-grid-complex-layouts-made-simple"
  },
  {
    id: "4",
    title: "Building Scalable React Applications: Architecture Patterns",
    excerpt: "Learn proven architectural patterns for building large-scale React applications that are maintainable, testable, and performant. From folder structure to state management.",
    content: `# Building Scalable React Applications: Architecture Patterns

As React applications grow in complexity, having a solid architecture becomes crucial. Let's explore patterns that help maintain scalability.

## Folder Structure

A well-organized folder structure is the foundation:

\`\`\`
src/
├── components/
│   ├── ui/          # Reusable UI components
│   ├── layout/      # Layout components
│   └── features/    # Feature-specific components
├── hooks/           # Custom hooks
├── services/        # API and external services
├── utils/           # Helper functions
└── types/           # TypeScript type definitions
\`\`\`

## Component Architecture

### Compound Components

Create flexible, reusable component APIs:

\`\`\`typescript
const Modal = ({ children }) => {
  return <div className="modal">{children}</div>;
};

Modal.Header = ({ children }) => (
  <div className="modal-header">{children}</div>
);

Modal.Body = ({ children }) => (
  <div className="modal-body">{children}</div>
);
\`\`\`

## State Management Strategies

1. **Component State**: For local, temporary state
2. **Context API**: For app-wide state
3. **External Libraries**: Redux, Zustand for complex state

### Custom Hooks Pattern

Extract logic into reusable hooks:

\`\`\`typescript
const useApi = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Implementation details...

  return { data, loading, error };
};
\`\`\`

## Performance Considerations

- **Code splitting**: Dynamic imports for routes
- **Memoization**: React.memo, useMemo, useCallback
- **Lazy loading**: Components and images
- **Bundle analysis**: Identify optimization opportunities

These patterns help create applications that scale gracefully as teams and requirements grow.`,
    tags: ["React", "Architecture", "Scalability", "Performance", "Best Practices"],
    date: "2024-01-08",
    readTime: "10 min read",
    slug: "scalable-react-applications-architecture"
  },
  {
    id: "5",
    title: "Modern JavaScript: ES2024 Features You Should Know",
    excerpt: "Stay up-to-date with the latest JavaScript features introduced in ES2024. From new array methods to improved error handling, discover what's new in the language.",
    content: `# Modern JavaScript: ES2024 Features You Should Know

JavaScript continues to evolve rapidly. Let's explore the exciting new features introduced in ES2024 that can improve your development experience.

## New Array Methods

### Array.prototype.with()

Create a new array with a single element changed:

\`\`\`javascript
const numbers = [1, 2, 3, 4, 5];
const updated = numbers.with(2, 10); // [1, 2, 10, 4, 5]
console.log(numbers); // [1, 2, 3, 4, 5] (unchanged)
\`\`\`

### Array.prototype.toSorted()

Sort arrays without mutation:

\`\`\`javascript
const fruits = ['banana', 'apple', 'cherry'];
const sorted = fruits.toSorted(); // ['apple', 'banana', 'cherry']
console.log(fruits); // ['banana', 'apple', 'cherry'] (unchanged)
\`\`\`

## Temporal API (Proposal)

Better date and time handling:

\`\`\`javascript
// More intuitive date operations
const date = Temporal.PlainDate.from('2024-01-15');
const nextWeek = date.add({ weeks: 1 });
const duration = nextWeek.since(date);
\`\`\`

## Pattern Matching (Proposal)

Powerful control flow:

\`\`\`javascript
const result = match (value) {
  when ({ type: 'circle', radius }) -> Math.PI * radius ** 2;
  when ({ type: 'rectangle', width, height }) -> width * height;
  when ({ type: 'triangle', base, height }) -> 0.5 * base * height;
  else -> 0;
};
\`\`\`

## Pipeline Operator (Proposal)

Functional composition made easy:

\`\`\`javascript
const result = value
  |> double(%)
  |> increment(%)
  |> String(%);
\`\`\`

## Best Practices

1. **Progressive Enhancement**: Use new features with fallbacks
2. **Babel/TypeScript**: Transpile for broader support
3. **Feature Detection**: Check support before using
4. **Performance**: Measure impact of new features

Staying current with JavaScript evolution helps you write more expressive and maintainable code.`,
    tags: ["JavaScript", "ES2024", "Modern Web", "Language Features"],
    date: "2024-01-05",
    readTime: "7 min read",
    slug: "modern-javascript-es2024-features"
  }
];

export const getAllTags = (): string[] => {
  const tagSet = new Set<string>();
  mockPosts.forEach(post => {
    post.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
};