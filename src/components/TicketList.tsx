import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  MoreVertical, 
  MessageSquare, 
  Paperclip,
  Clock,
  User as UserIcon,
  ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Card, CardContent } from '@/components/ui/card';
import { MOCK_TICKETS, MOCK_USERS } from '@/src/constants';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import TicketDetail from './TicketDetail';
import { Ticket } from '../types';

export default function TicketList() {
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleTicketClick = (ticket: Ticket) => {
    setSelectedTicket(ticket);
    setIsDetailOpen(true);
  };

  return (
    <div className="space-y-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-light tracking-tight text-foreground uppercase">Tickets</h1>
          <p className="text-muted-foreground text-xs tracking-[1.5px] uppercase mt-2">Manage support requests</p>
        </div>
        <Button className="gap-2 text-[11px] font-bold uppercase tracking-[1px] rounded-none px-6">
          <Plus className="w-4 h-4" />
          CREATE TICKET
        </Button>
      </div>

      <Card className="border border-border bg-card rounded-none shadow-none">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="SEARCH TICKETS..." className="pl-10 bg-accent/30 border-none text-[11px] tracking-[1px] uppercase rounded-none" />
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="gap-2 text-[10px] font-bold uppercase tracking-[1px] border-border rounded-none">
                <Filter className="w-4 h-4" />
                FILTERS
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2 text-[10px] font-bold uppercase tracking-[1px] border-border rounded-none">
                    SORT BY: NEWEST
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-card border-border rounded-none">
                  <DropdownMenuItem className="text-[10px] font-bold uppercase tracking-[1px]">Newest First</DropdownMenuItem>
                  <DropdownMenuItem className="text-[10px] font-bold uppercase tracking-[1px]">Oldest First</DropdownMenuItem>
                  <DropdownMenuItem className="text-[10px] font-bold uppercase tracking-[1px]">Priority: High to Low</DropdownMenuItem>
                  <DropdownMenuItem className="text-[10px] font-bold uppercase tracking-[1px]">Priority: Low to High</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {MOCK_TICKETS.map((ticket) => {
          const assignee = MOCK_USERS.find(u => u.id === ticket.assigneeId);
          const creator = MOCK_USERS.find(u => u.id === ticket.creatorId);
          
          return (
            <div 
              key={ticket.id}
              onClick={() => handleTicketClick(ticket)}
              className="group bg-card p-6 rounded-none border border-border hover:border-primary/50 hover:bg-accent/10 transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-mono text-muted-foreground font-bold tracking-wider">#{ticket.id}</span>
                    <Badge variant="outline" className={cn(
                      "text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-none",
                      ticket.priority === 'Critical' ? "text-rose-500 bg-rose-500/10 border-rose-500/20" :
                      ticket.priority === 'High' ? "text-orange-500 bg-orange-500/10 border-orange-500/20" :
                      "text-blue-500 bg-blue-500/10 border-blue-500/20"
                    )}>
                      {ticket.priority}
                    </Badge>
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{ticket.type}</span>
                  </div>
                  <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors truncate uppercase tracking-[0.5px]">
                    {ticket.title}
                  </h3>
                  <div className="flex items-center gap-6 mt-4">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-[0.5px]">
                      <Clock className="w-3.5 h-3.5" />
                      {format(new Date(ticket.createdAt), 'MMM d, h:mm a')}
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-[0.5px]">
                      <MessageSquare className="w-3.5 h-3.5" />
                      3
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-[0.5px]">
                      <Paperclip className="w-3.5 h-3.5" />
                      1
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-4">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-accent text-foreground border-border hover:bg-accent rounded-none text-[9px] font-bold uppercase tracking-[1px]">
                      {ticket.status}
                    </Badge>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex -space-x-2">
                    {assignee && (
                      <div className="relative group/avatar">
                        <Avatar className="w-7 h-7 border border-card">
                          <AvatarImage src={assignee.avatar} />
                          <AvatarFallback className="bg-accent text-[9px]">{assignee.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Ticket Detail Sheet */}
      <Sheet open={isDetailOpen} onOpenChange={setIsDetailOpen}>
        <SheetContent className="sm:max-w-2xl p-0 overflow-hidden flex flex-col bg-card border-l border-border">
          {selectedTicket && <TicketDetail ticket={selectedTicket} onClose={() => setIsDetailOpen(false)} />}
        </SheetContent>
      </Sheet>
    </div>
  );
}
