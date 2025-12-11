import type { LucideIcon } from 'lucide-react';
import {
  LayoutDashboard,
  BookOpen,
  School,
  ClipboardList,
  Library,
  BarChart3,
  Users,
  User,
  Settings,
  Home,
  Upload,
  MessageSquare,
  Sun,
  GraduationCap,
  ClipboardCheck,
  Shield,
  FileUp,
  MessageSquareWarning,
  FileSignature,
  SlidersHorizontal,
} from 'lucide-react';

export type NavLink = {
  name: string;
  href: string;
  icon: LucideIcon;
  comingSoon: boolean;
  label?: string;
};

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '/', icon: Home, comingSoon: false },
  { name: 'Courses', href: '/courses', icon: BookOpen, comingSoon: false },
  { name: 'Classes', href: '/classes', icon: School, comingSoon: false },
  { name: 'Assignments', href: '/assignments', icon: ClipboardList, comingSoon: false },
  { name: 'Library', href: '/library', icon: Library, comingSoon: true },
  { name: 'Reports', href: '/reports', icon: BarChart3, comingSoon: false },
  { name: 'Club Zone', href: '/club', icon: Sun, comingSoon: false },
];

export const ADMIN_NAV_LINKS: NavLink[] = [
    { name: 'Admin', href: '/admin', icon: Shield, comingSoon: false },
    { name: 'Students', href: '/admin', icon: Users, comingSoon: true },
    { name: 'Content Upload', href: '/admin', icon: FileUp, comingSoon: true },
    { name: 'News Club', href: '/admin', icon: Sun, comingSoon: true },
    { name: 'Doubt Review', href: '/admin', icon: MessageSquareWarning, comingSoon: true },
    { name: 'Submissions', href: '/admin', icon: FileSignature, comingSoon: true },
    { name: 'Analytics', href: '/admin', icon: BarChart3, comingSoon: true },
    { name: 'App Controls', href: '/admin', icon: SlidersHorizontal, comingSoon: true },
]

export const MOBILE_NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '/', icon: Home, comingSoon: false },
  { name: 'Upload', href: '/assignments', icon: Upload, comingSoon: false },
  { name: 'Messages', href: '/notifications', icon: MessageSquare, comingSoon: true },
  { name: 'Profile', href: '/profile', icon: User, comingSoon: false },
];
