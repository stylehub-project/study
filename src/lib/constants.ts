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
  Construction,
  BarChartHorizontal,
  FolderKanban,
} from 'lucide-react';

export type NavLink = {
  name: string;
  href: string;
  icon: LucideIcon;
  comingSoon: boolean;
  label?: string;
};

export const NAV_LINKS: NavLink[] = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard, comingSoon: false },
  { name: 'Courses', href: '/courses', icon: BookOpen, comingSoon: false },
  { name: 'Classes', href: '/classes', icon: School, comingSoon: false },
  { name: 'Assignments', href: '/assignments', icon: ClipboardList, comingSoon: false },
  { name: 'Library', href: '/library', icon: Library, comingSoon: true },
  { name: 'Reports', href: '/reports', icon: BarChart3, comingSoon: false },
  { name: 'Club Zone', href: '/club', icon: Sun, comingSoon: false },
  { name: 'Notifications', href: '/notifications', icon: MessageSquare, comingSoon: false },
];

export const ADMIN_NAV_LINKS: NavLink[] = [
    { name: 'Admin', href: '/admin', icon: Shield, comingSoon: false },
    { name: "Analytics", href: "/reports", icon: BarChartHorizontal, comingSoon: false },
    { name: 'App Controls', href: '/admin', icon: Construction, comingSoon: true },
]

export const MOBILE_NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '/dashboard', icon: Home, comingSoon: false },
  { name: 'Upload', href: '/assignments', icon: Upload, comingSoon: false },
  { name: 'Messages', href: '/notifications', icon: MessageSquare, comingSoon: false },
  { name: 'Profile', href: '/profile', icon: User, comingSoon: false },
];
