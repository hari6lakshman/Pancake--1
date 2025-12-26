'use client';

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarFooter,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Sparkles, BookHeart, User, Bot } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const menuItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/affirmations', label: 'Affirmations', icon: Sparkles },
  { href: '/coping-strategies', label: 'Coping Strategies', icon: BookHeart },
  { href: '/encouragement-bot', label: 'Encouragement Bot', icon: Bot },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/dashboard">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground h-5 w-5"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M12 2a10 10 0 0 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/></svg>
              </Link>
            </Button>
            <h1 className="text-xl font-semibold tracking-tighter">Pan cake 🎂</h1>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href))}
                  tooltip={{ children: item.label, side: 'right' }}
                >
                  <Link href={item.href}>
                    <item.icon />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-sidebar-accent cursor-pointer">
            <Avatar className="h-9 w-9">
              <AvatarImage src="https://picsum.photos/seed/user/100/100" data-ai-hint="person face" />
              <AvatarFallback>
                <User />
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col overflow-hidden">
              <span className="text-sm font-medium truncate">User</span>
              <span className="text-xs text-muted-foreground truncate">user@pancake.dev</span>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-14 items-center justify-between p-4 border-b md:justify-end bg-card md:bg-transparent">
          <SidebarTrigger className="md:hidden" />
          <h1 className="font-headline text-lg font-semibold md:hidden">Pan cake 🎂</h1>
          <div/>
        </header>
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-auto">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
