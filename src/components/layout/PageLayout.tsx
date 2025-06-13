import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);

  useEffect(() => {
    const handleNavState = (event: CustomEvent) => {
      setIsNavCollapsed(event.detail.isCollapsed);
    };

    window.addEventListener('navStateChange', handleNavState as EventListener);
    return () => {
      window.removeEventListener('navStateChange', handleNavState as EventListener);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navbar />
      <div className={`transition-all duration-300 ${isNavCollapsed ? 'lg:ml-14' : 'lg:ml-64'}`}>
        <main className="min-h-screen p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
} 