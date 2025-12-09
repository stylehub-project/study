'use client';

import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from './app-sidebar';
import { Header } from './header';
import { Footer } from './footer';
import { MobileBottomNav } from './mobile-bottom-nav';

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <SidebarInset>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6">
              {children}
            </main>
            <Footer />
          </div>
        </SidebarInset>
      </div>
      <MobileBottomNav />
    </SidebarProvider>
  );
}
