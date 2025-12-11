'use client';

import { AppLayout } from '@/components/layout/app-layout';
import { ClassProvider } from '@/context/ClassContext';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClassProvider>
      <AppLayout>{children}</AppLayout>
    </ClassProvider>
  );
}
