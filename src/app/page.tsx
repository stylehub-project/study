'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { GraduationCap } from 'lucide-react';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/dashboard');
    }, 2500); // Display splash for 2.5 seconds

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-center">
      <div className="flex items-center gap-4">
        <GraduationCap className="w-16 h-16 text-primary" />
        <div>
          <h1 className="text-4xl font-bold font-headline text-white">Sunrise Study Club</h1>
          <div className="overflow-hidden">
            <p className="text-lg text-muted-foreground mt-1 animate-slide-in">Learn Smart. Learn Right.</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes slide-in {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
