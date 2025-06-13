import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BarChart3, 
  Map, 
  TrendingUp, 
  Shield, 
  Settings,
  Bell,
  ChevronLeft,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

const navigation = [
  {
    name: 'Tableau de bord',
    href: '/',
    icon: LayoutDashboard,
  },
  {
    name: 'Cartographie',
    href: '/cartographie',
    icon: Map,
  },
  {
    name: 'Analyse de dossiers',
    href: '/analyse-dossiers',
    icon: BarChart3,
  },
  {
    name: 'Tendances',
    href: '/tendances',
    icon: TrendingUp,
  },
  {
    name: 'Sécurité',
    href: '/securite',
    icon: Shield,
  },
];

export function Navbar() {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    // Émettre un événement personnalisé pour informer le PageLayout
    window.dispatchEvent(new CustomEvent('navStateChange', {
      detail: { isCollapsed: newState }
    }));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Gestionnaire pour la souris
  useEffect(() => {
    const handleMouseEnter = () => {
      if (isCollapsed) {
        setIsCollapsed(false);
        window.dispatchEvent(new CustomEvent('navStateChange', {
          detail: { isCollapsed: false }
        }));
      }
    };

    const handleMouseLeave = () => {
      if (!isCollapsed) {
        setIsCollapsed(true);
        window.dispatchEvent(new CustomEvent('navStateChange', {
          detail: { isCollapsed: true }
        }));
      }
    };

    const sidebar = sidebarRef.current;
    if (sidebar) {
      sidebar.addEventListener('mouseenter', handleMouseEnter);
      sidebar.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (sidebar) {
        sidebar.removeEventListener('mouseenter', handleMouseEnter);
        sidebar.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [isCollapsed]);

  // Mettre à jour la classe du body pour ajuster la marge du contenu principal
  useEffect(() => {
    const mainContent = document.querySelector('main');
    if (mainContent) {
      if (isCollapsed) {
        mainContent.classList.remove('lg:ml-64');
        mainContent.classList.add('lg:ml-14');
      } else {
        mainContent.classList.remove('lg:ml-14');
        mainContent.classList.add('lg:ml-64');
      }
    }
  }, [isCollapsed]);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-md hover:bg-gray-50"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`
          fixed inset-y-0 left-0 z-40
          bg-white border-r border-gray-200 shadow-sm
          transition-all duration-300 ease-in-out
          ${isCollapsed ? 'w-14' : 'w-64'}
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className={`
            flex items-center h-14 border-b border-gray-200
            ${isCollapsed ? 'justify-center px-2' : 'px-4'}
          `}>
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="9" cy="12" r="6" fill="white" stroke="white" strokeWidth="1.5"/>
                  <circle cx="15" cy="12" r="6" fill="white" stroke="white" strokeWidth="1.5"/>
                </svg>
              </div>
              {!isCollapsed && (
                <h1 className="text-lg font-bold text-blue-600 whitespace-nowrap">
                  Cirkles
                </h1>
              )}
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-2 py-4 overflow-y-auto">
            <div className="space-y-4">
              {/* Main Navigation */}
              <div className="space-y-1">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`
                        flex items-center px-2 py-2 text-sm font-medium rounded-lg transition-all
                        ${isActive 
                          ? 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 shadow-sm' 
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }
                      `}
                      title={isCollapsed ? item.name : ''}
                    >
                      <item.icon className={`w-5 h-5 ${isCollapsed ? '' : 'mr-2'} ${isActive ? 'text-blue-600' : 'text-gray-400'}`} />
                      {!isCollapsed && <span className="whitespace-nowrap">{item.name}</span>}
                    </Link>
                  );
                })}
              </div>

              {/* Quick Actions */}
              <div className="pt-3 border-t border-gray-200">
                {!isCollapsed && (
                  <h3 className="px-2 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Actions rapides
                  </h3>
                )}
                <div className="space-y-1">
                  <Link
                    to="/alertes"
                    className={`
                      flex items-center px-2 py-2 text-sm font-medium rounded-lg transition-all
                      ${location.pathname === '/alertes'
                        ? 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 shadow-sm'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }
                    `}
                    title={isCollapsed ? 'Alertes' : ''}
                  >
                    <div className="relative">
                      <Bell className={`w-5 h-5 ${isCollapsed ? '' : 'mr-2'} ${location.pathname === '/alertes' ? 'text-blue-600' : 'text-gray-400'}`} />
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
                    </div>
                    {!isCollapsed && <span className="whitespace-nowrap">Alertes</span>}
                  </Link>
                  <button 
                    className={`
                      flex items-center w-full px-2 py-2 text-sm font-medium text-gray-600 rounded-lg 
                      hover:bg-gray-50 hover:text-gray-900 transition-all group
                    `}
                    title={isCollapsed ? 'Paramètres' : ''}
                  >
                    <Settings className={`w-5 h-5 ${isCollapsed ? '' : 'mr-2'} text-gray-400 group-hover:text-blue-600 transition-colors`} />
                    {!isCollapsed && <span className="whitespace-nowrap">Paramètres</span>}
                  </button>
                </div>
              </div>
            </div>
          </nav>

          {/* User Profile */}
          <div className={`
            p-2 border-t border-gray-200
            ${isCollapsed ? 'flex justify-center' : ''}
          `}>
            {!isCollapsed ? (
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-sm">
                  <span className="text-xs font-medium text-white">JD</span>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">John Doe</p>
                  <p className="text-xs text-gray-500 truncate">Administrateur</p>
                </div>
              </div>
            ) : (
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-sm">
                <span className="text-xs font-medium text-white">JD</span>
              </div>
            )}
          </div>

          {/* Collapse Button */}
          <button
            onClick={toggleSidebar}
            className="absolute -right-3 top-14 bg-white rounded-full p-1.5 shadow-md border border-gray-200 hover:bg-gray-50 hidden lg:block"
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4 text-gray-600" />
            ) : (
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleMobileMenu}
        />
      )}
    </>
  );
} 