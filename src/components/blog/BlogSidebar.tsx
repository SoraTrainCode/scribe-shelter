import { Home, Archive, Tags, User, Github, PlusCircle, BookOpen } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "All Posts", url: "/posts", icon: BookOpen },
  { title: "Archive", url: "/archive", icon: Archive },
  { title: "Tags", url: "/tags", icon: Tags },
  { title: "About", url: "/about", icon: User },
];

const externalLinks = [
  { 
    title: "GitHub Repo", 
    url: "https://github.com/yourusername/your-blog-repo", 
    icon: Github,
    external: true 
  },
  { 
    title: "New Post", 
    url: "https://github.com/yourusername/your-blog-repo/new/main?filename=posts/new-post.md", 
    icon: PlusCircle,
    external: true 
  },
];

export function BlogSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-primary/10 text-primary font-medium border-r-2 border-primary" : "hover:bg-muted/50";

  return (
    <Sidebar
      className={`${collapsed ? "w-14" : "w-64"} border-r border-border bg-card transition-all duration-300`}
    >
      <SidebarContent className="p-0">
        {/* Blog Logo/Title */}
        {!collapsed && (
          <div className="p-6 border-b border-border">
            <h2 className="text-lg font-bold text-card-foreground">
              Developer's Corner
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Web Development Blog
            </p>
          </div>
        )}

        {/* Navigation */}
        <SidebarGroup className="px-3 py-4">
          {!collapsed && (
            <SidebarGroupLabel className="text-muted-foreground font-medium mb-2">
              Navigation
            </SidebarGroupLabel>
          )}
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={getNavCls}
                      title={collapsed ? item.title : undefined}
                    >
                      <item.icon className={`h-4 w-4 ${collapsed ? 'mx-auto' : 'mr-3'}`} />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* External Links */}
        <SidebarGroup className="px-3 py-4 border-t border-border">
          {!collapsed && (
            <SidebarGroupLabel className="text-muted-foreground font-medium mb-2">
              Quick Actions
            </SidebarGroupLabel>
          )}
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {externalLinks.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a 
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:bg-muted/50 transition-colors"
                      title={collapsed ? item.title : undefined}
                    >
                      <item.icon className={`h-4 w-4 ${collapsed ? 'mx-auto' : 'mr-3'}`} />
                      {!collapsed && <span>{item.title}</span>}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}