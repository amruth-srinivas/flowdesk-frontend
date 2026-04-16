import React from 'react';
import { 
  LayoutDashboard, 
  Ticket as TicketIcon, 
  BookOpen, 
  Users, 
  Calendar, 
  BarChart3, 
  Settings, 
  Bell, 
  Search, 
  Plus,
  ChevronRight,
  LogOut,
  Menu
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { MOCK_USERS } from '@/src/constants';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const NAV_ITEMS = [
  { id: 'dashboard', label: 'OVERVIEW', icon: LayoutDashboard },
  { id: 'tickets', label: 'TICKETS', icon: TicketIcon },
  { id: 'kb', label: 'KNOWLEDGE BASE', icon: BookOpen },
  { id: 'customers', label: 'CUSTOMERS', icon: Users },
  { id: 'calendar', label: 'CALENDAR', icon: Calendar },
  { id: 'reports', label: 'REPORTS', icon: BarChart3 },
];

export default function Layout({ children, activeTab, setActiveTab }: LayoutProps) {
  const currentUser = MOCK_USERS[0];

  const NavLinks = () => (
    <nav className="flex items-center gap-8">
      {NAV_ITEMS.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveTab(item.id)}
          className={cn(
            "relative py-6 text-[11px] font-semibold tracking-[1.5px] transition-all uppercase",
            activeTab === item.id 
              ? "text-primary" 
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {item.label}
          {activeTab === item.id && (
            <motion.div 
              layoutId="activeTab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
            />
          )}
        </button>
      ))}
    </nav>
  );

  const MobileNav = () => (
    <div className="flex flex-col gap-4 py-8">
      {NAV_ITEMS.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveTab(item.id)}
          className={cn(
            "flex items-center gap-4 px-4 py-3 text-[11px] font-semibold tracking-[1.5px] transition-all uppercase",
            activeTab === item.id 
              ? "bg-accent text-primary border-l-2 border-primary" 
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <item.icon className="w-4 h-4" />
          {item.label}
        </button>
      ))}
      <Separator className="my-4 bg-border" />
      <button className="flex items-center gap-4 px-4 py-3 text-[11px] font-semibold tracking-[1.5px] text-muted-foreground hover:text-foreground uppercase transition-colors">
        <Settings className="w-4 h-4" />
        Settings
      </button>
      <button className="flex items-center gap-4 px-4 py-3 text-[11px] font-semibold tracking-[1.5px] text-muted-foreground hover:text-destructive uppercase transition-colors">
        <LogOut className="w-4 h-4" />
        Logout
      </button>
    </div>
  );

  return (
    <div className="flex flex-col h-screen bg-background text-foreground overflow-hidden">
      {/* Top Navigation */}
      <header className="h-[70px] bg-card border-b border-border flex items-center justify-between px-8 flex-shrink-0">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-6 w-72 bg-card border-r border-border">
                <div className="mb-8">
                  <span className="font-bold text-lg tracking-[2px] text-primary uppercase">FlowDesk.</span>
                </div>
                <MobileNav />
              </SheetContent>
            </Sheet>
            <span className="font-bold text-lg tracking-[2px] text-primary uppercase">FlowDesk.</span>
          </div>

          <div className="hidden lg:block">
            <NavLinks />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative max-w-[200px] hidden xl:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
            <Input 
              placeholder="SEARCH..." 
              className="pl-9 bg-accent/50 border-none focus-visible:ring-1 focus-visible:ring-primary h-9 text-[10px] tracking-[1px] uppercase w-full"
            />
          </div>

          <Button variant="outline" size="sm" className="hidden sm:flex gap-2 border-primary/20 text-primary hover:bg-primary/5 h-9 text-[10px] tracking-[1px] uppercase px-4">
            <Plus className="w-3.5 h-3.5" />
            New Ticket
          </Button>
          
          <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground h-9 w-9">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-primary rounded-full"></span>
          </Button>

          <Separator orientation="vertical" className="h-6 mx-2 bg-border hidden sm:block" />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-3 p-1 pr-3 hover:bg-accent rounded-none h-10">
                <Avatar className="w-8 h-8 rounded-full border border-primary/20">
                  <AvatarImage src={currentUser.avatar} />
                  <AvatarFallback className="bg-primary text-primary-foreground text-[10px]">{currentUser.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="text-left hidden md:block">
                  <p className="text-[11px] font-semibold leading-none tracking-[0.5px]">{currentUser.name}</p>
                  <p className="text-[9px] text-muted-foreground mt-1 uppercase tracking-[1px]">{currentUser.role}</p>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-card border-border rounded-none shadow-2xl">
              <DropdownMenuLabel className="text-[10px] font-bold uppercase tracking-[1px] text-muted-foreground">My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-border" />
              <DropdownMenuItem className="text-[11px] font-semibold uppercase tracking-[0.5px] cursor-pointer">Profile</DropdownMenuItem>
              <DropdownMenuItem className="text-[11px] font-semibold uppercase tracking-[0.5px] cursor-pointer">Billing</DropdownMenuItem>
              <DropdownMenuItem className="text-[11px] font-semibold uppercase tracking-[0.5px] cursor-pointer">Team</DropdownMenuItem>
              <DropdownMenuSeparator className="bg-border" />
              <DropdownMenuItem className="text-[11px] font-semibold uppercase tracking-[0.5px] text-destructive cursor-pointer">Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto p-6 md:p-10">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
