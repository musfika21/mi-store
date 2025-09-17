"use client"

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  Home,
  Settings,
  User,
  LogOut,
  Sparkles,
  Flower
} from "lucide-react";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState({
    firstName: 'User',
    lastName: '',
    email: '',
    role: 'User'
  });
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);
  
  const pathname = usePathname();
  const router = useRouter();

  // Set isClient to true after component mounts (hydration)
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Fetch user data on component mount
  useEffect(() => {
    // Only run on client side
    if (!isClient) return;

    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          router.push('/sign-in');
          return;
        }

        // First, try to get user data from localStorage if it exists (from signup/login)
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
          try {
            const parsedData = JSON.parse(storedUserData);
            setUser({
              firstName: parsedData.firstName || parsedData.first_name || 'User',
              lastName: parsedData.lastName || parsedData.last_name || '',
              email: parsedData.email || '',
              role: parsedData.role || 'User'
            });
            setLoading(false);
            return;
          } catch (parseError) {
            console.log('Error parsing stored user data:', parseError);
          }
        }

        // If no stored data, try to decode JWT token to get user info
        try {
          const tokenPayload = JSON.parse(atob(token.split('.')[1]));
          console.log('Token payload:', tokenPayload); // Debug log
          
          if (tokenPayload) {
            setUser({
              firstName: tokenPayload.firstName || tokenPayload.first_name || tokenPayload.name?.split(' ')[0] || 'User',
              lastName: tokenPayload.lastName || tokenPayload.last_name || tokenPayload.name?.split(' ')[1] || '',
              email: tokenPayload.email || '',
              role: tokenPayload.role || 'User'
            });
            setLoading(false);
            return;
          }
        } catch (jwtError) {
          console.log('Error decoding JWT:', jwtError);
        }

        // Fallback: Try API call (replace with your actual API endpoint)
        const response = await fetch('/api/user/profile', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const userData = await response.json();
          console.log('API response:', userData); // Debug log
          
          setUser({
            firstName: userData.firstName || userData.first_name || userData.user?.firstName || 'User',
            lastName: userData.lastName || userData.last_name || userData.user?.lastName || '',
            email: userData.email || userData.user?.email || '',
            role: userData.role || userData.user?.role || 'User'
          });
        } else if (response.status === 401) {
          // Token expired or invalid
          localStorage.removeItem('token');
          localStorage.removeItem('userData');
          router.push('/sign-in');
        } else {
          console.log('API call failed with status:', response.status);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        // You might want to show a toast notification here
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [router, isClient]);

  // Handle logout
  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      localStorage.removeItem('userData');
    }
    router.push('/sign-in');
  };

  // Navigation items - easily customizable for your routes
  const navigationItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      href: '/dashboard',
      icon: <Home className="w-5 h-5" />,
      badge: null
    },
    {
      id: 'addPost',
      label: 'Add Flower Post',
      href: '/dashboard/add-post',
      icon: <Flower className='w-5 h-5'/>,
    }
  ];

  // Helper function to check if route is active
  const isActiveRoute = (href) => {
    if (href === '/dashboard') {
      return pathname === '/dashboard';
    }
    return pathname.startsWith(href);
  };

  // Get user display name
  const getUserDisplayName = () => {
    if (loading) return 'Loading...';
    return user.firstName || 'User';
  };

  // Get user full name
  const getUserFullName = () => {
    if (loading) return 'Loading...';
    const fullName = `${user.firstName || ''} ${user.lastName || ''}`.trim();
    return fullName || 'User';
  };

  // Get user initials for avatar
  const getUserInitials = () => {
    if (loading) return 'U';
    const firstName = user.firstName || 'U';
    const lastName = user.lastName || '';
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-gradient-to-b from-[#4B3F6E] to-[#6C5F8D] text-white">
      {/* Logo */}
      <div className="p-3 border-b border-white/20">
        <Link
          href="/"
          className="group flex items-center space-x-3 hover:scale-105 transition-all duration-300"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#6C5F8D] to-[#BA96C1] rounded-full blur-sm opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
            <div className="relative w-10 h-10 bg-gradient-to-br from-[#9C8CB9] to-[#6C5F8D] rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-5 h-5 text-[#DCD7D5] animate-pulse" />
            </div>
          </div>
          <div>
            <h1 className="font-black text-2xl bg-gradient-to-r from-[#DCD7D5] via-[#BA96C1] to-[#DCD7D5] bg-clip-text text-transparent">
              MI Store
            </h1>
            <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-[#6C5F8D] to-[#BA96C1] transition-all duration-500 rounded-full"></div>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigationItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            onClick={() => setSidebarOpen(false)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 hover:bg-white/10 ${isActiveRoute(item.href)
                ? 'bg-white/20 shadow-lg'
                : ''
              }`}
          >
            <div className="flex items-center space-x-3">
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </div>
            {item.badge && (
              <Badge variant={item.badge.variant} className="text-xs">
                {item.badge.text}
              </Badge>
            )}
          </Link>
        ))}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-white/20">
        <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/10">
          <div className="w-10 h-10 bg-gradient-to-br from-[#BA96C1] to-[#9C8CB9] rounded-full flex items-center justify-center">
            {loading ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <span className="text-white font-semibold text-sm">{getUserInitials()}</span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium truncate">{getUserFullName()}</p>
            <p className="text-white/70 text-sm truncate">{user.role}</p>
          </div>
        </div>
      </div>
    </div>
  );

  // Don't render the component until after hydration to avoid SSR issues
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#DCD7D5] via-[#DCD7D5]/90 to-[#BA96C1]/30 dark:from-[#4B3F6E] dark:via-[#4B3F6E]/90 dark:to-[#6C5F8D]/40 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#BA96C1]/30 border-t-[#BA96C1] rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#DCD7D5] via-[#DCD7D5]/90 to-[#BA96C1]/30 dark:from-[#4B3F6E] dark:via-[#4B3F6E]/90 dark:to-[#6C5F8D]/40">
      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="w-72 p-0 border-r border-[#BA96C1]/20">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="lg:pl-72">
        {/* Top Bar */}
        <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-[#BA96C1]/20 bg-[#DCD7D5] dark:bg-[#4B3F6E]/90 backdrop-blur-xl px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          {/* Mobile menu button */}
          <Button
            variant="outline"
            size="sm"
            className="lg:hidden border-[#BA96C1]/30 hover:bg-[#BA96C1]/10"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </Button>

          {/* Search */}
          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6 justify-end">
            {/* Right side items */}
            <div className="flex items-center gap-x-4 lg:gap-x-6">

              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    size="sm" 
                    className="p-3 sm:p-4 bg-[#BA96C1] hover:bg-[#6C5F8D] cursor-pointer transition-all duration-200"
                    disabled={loading}
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-[#6C5F8D] to-[#9C8CB9] rounded-full flex items-center justify-center">
                        {loading ? (
                          <div className="w-3 h-3 border border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : (
                          <span className="text-white font-semibold text-xs">{getUserInitials()}</span>
                        )}
                      </div>
                      <span className="hidden sm:inline text-white font-medium">
                        {getUserDisplayName()}
                      </span>
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-white/95 dark:bg-[#4B3F6E]/95 backdrop-blur-xl border border-[#BA96C1]/30">
                  <DropdownMenuLabel className="text-[#4B3F6E] dark:text-[#DCD7D5]">
                    <div className="flex flex-col space-y-1">
                      <span className="font-semibold">{getUserFullName()}</span>
                      <span className="text-xs text-[#4B3F6E]/60 dark:text-[#DCD7D5]/60 font-normal">
                        {user.email}
                      </span>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-[#BA96C1]/20" />
                  <DropdownMenuItem className="text-[#4B3F6E] dark:text-[#DCD7D5] hover:bg-[#BA96C1]/10 cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-[#4B3F6E] dark:text-[#DCD7D5] hover:bg-[#BA96C1]/10 cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-[#BA96C1]/20" />
                  <DropdownMenuItem 
                    className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 cursor-pointer focus:bg-red-50 dark:focus:bg-red-900/20"
                    onClick={handleLogout}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Page Content - This is where children will be rendered */}
        <main className="py-6 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>

      {/* Background decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 right-20 text-6xl opacity-5 animate-pulse delay-300">🌸</div>
        <div className="absolute bottom-32 left-1/4 text-5xl opacity-5 animate-pulse delay-1000">🌻</div>
        <div className="absolute top-1/2 right-10 text-4xl opacity-5 animate-bounce delay-1500">🌹</div>
      </div>
    </div>
  );
}