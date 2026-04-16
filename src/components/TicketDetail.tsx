import React from 'react';
import { 
  X, 
  Send, 
  Paperclip, 
  MoreHorizontal, 
  Clock, 
  User as UserIcon,
  CheckCircle2,
  AlertCircle,
  History,
  MessageSquare,
  FileText,
  ShieldCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Ticket } from '../types';
import { MOCK_USERS, MOCK_PROJECTS } from '@/src/constants';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface TicketDetailProps {
  ticket: Ticket;
  onClose: () => void;
}

export default function TicketDetail({ ticket, onClose }: TicketDetailProps) {
  const assignee = MOCK_USERS.find(u => u.id === ticket.assigneeId);
  const project = MOCK_PROJECTS.find(p => p.id === ticket.projectId);

  return (
    <div className="flex flex-col h-full bg-card">
      {/* Header */}
      <div className="p-8 border-b border-border flex items-start justify-between bg-accent/30">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono text-muted-foreground font-bold tracking-wider uppercase">#{ticket.id}</span>
            <Badge variant="outline" className="bg-accent/50 border-border text-[9px] font-bold uppercase tracking-wider rounded-none">{project?.name}</Badge>
          </div>
          <h2 className="text-xl font-light text-foreground leading-tight tracking-tight uppercase">{ticket.title}</h2>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose} className="rounded-none hover:bg-accent text-muted-foreground">
          <X className="w-5 h-5" />
        </Button>
      </div>

      {/* Info Bar */}
      <div className="px-8 py-6 border-b border-border flex flex-wrap items-center gap-8 text-sm bg-card">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] uppercase tracking-[1.5px] text-muted-foreground font-bold">Status</span>
          <Badge className="bg-accent text-foreground border-border hover:bg-accent rounded-none text-[9px] font-bold uppercase tracking-[1px]">{ticket.status}</Badge>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-[10px] uppercase tracking-[1.5px] text-muted-foreground font-bold">Priority</span>
          <div className="flex items-center gap-2">
            <div className={cn(
              "w-1.5 h-1.5 rounded-full",
              ticket.priority === 'Critical' ? "bg-rose-500 shadow-[0_0_8px_rgba(244,67,54,0.5)]" : ticket.priority === 'High' ? "bg-orange-500" : "bg-blue-500"
            )} />
            <span className="text-[10px] font-bold uppercase tracking-[1px]">{ticket.priority}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-[10px] uppercase tracking-[1.5px] text-muted-foreground font-bold">Assignee</span>
          <div className="flex items-center gap-3">
            <Avatar className="w-5 h-5 border border-border">
              <AvatarImage src={assignee?.avatar} />
              <AvatarFallback className="bg-accent text-[8px]">U</AvatarFallback>
            </Avatar>
            <span className="text-[10px] font-bold uppercase tracking-[1px]">{assignee?.name}</span>
          </div>
        </div>
      </div>

      {/* Tabs Content */}
      <Tabs defaultValue="conversation" className="flex-1 flex flex-col overflow-hidden">
        <div className="px-8 border-b border-border">
          <TabsList className="bg-transparent h-14 gap-8">
            <TabsTrigger value="conversation" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-full px-0 gap-2 text-[10px] font-bold uppercase tracking-[1.5px] text-muted-foreground data-[state=active]:text-primary">
              <MessageSquare className="w-3.5 h-3.5" />
              Conversation
            </TabsTrigger>
            <TabsTrigger value="resolution" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-full px-0 gap-2 text-[10px] font-bold uppercase tracking-[1.5px] text-muted-foreground data-[state=active]:text-primary">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Resolution
            </TabsTrigger>
            <TabsTrigger value="attachments" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-full px-0 gap-2 text-[10px] font-bold uppercase tracking-[1.5px] text-muted-foreground data-[state=active]:text-primary">
              <Paperclip className="w-3.5 h-3.5" />
              Attachments
            </TabsTrigger>
            <TabsTrigger value="history" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-full px-0 gap-2 text-[10px] font-bold uppercase tracking-[1.5px] text-muted-foreground data-[state=active]:text-primary">
              <History className="w-3.5 h-3.5" />
              History
            </TabsTrigger>
          </TabsList>
        </div>

        <ScrollArea className="flex-1 p-8">
          <TabsContent value="conversation" className="m-0 space-y-8">
            <div className="bg-accent/20 p-6 rounded-none border border-border italic text-muted-foreground text-[11px] leading-relaxed tracking-[0.5px]">
              {ticket.description}
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <Avatar className="w-8 h-8 border border-border">
                  <AvatarImage src={MOCK_USERS[1].avatar} />
                  <AvatarFallback className="bg-accent text-[10px]">L</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold uppercase tracking-[1px]">{MOCK_USERS[1].name}</span>
                    <span className="text-[9px] text-muted-foreground font-bold uppercase tracking-[1px]">{format(new Date(), 'h:mm a')}</span>
                  </div>
                  <div className="bg-accent/40 p-4 rounded-none border border-border text-[12px] text-foreground leading-relaxed tracking-[0.5px]">
                    I've looked into the ad campaign issue. It seems like a synchronization delay between the API and the dashboard.
                  </div>
                </div>
              </div>

              <div className="flex gap-4 flex-row-reverse">
                <Avatar className="w-8 h-8 border border-border">
                  <AvatarImage src={MOCK_USERS[0].avatar} />
                  <AvatarFallback className="bg-accent text-[10px]">S</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2 text-right">
                  <div className="flex items-center gap-3 justify-end">
                    <span className="text-[9px] text-muted-foreground font-bold uppercase tracking-[1px]">{format(new Date(), 'h:mm a')}</span>
                    <span className="text-[11px] font-bold uppercase tracking-[1px]">{MOCK_USERS[0].name}</span>
                  </div>
                  <div className="bg-primary text-primary-foreground p-4 rounded-none text-[12px] inline-block text-left leading-relaxed tracking-[0.5px]">
                    Thanks for the update, Lawrence. Any ETA on the fix?
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="resolution" className="m-0">
            <div className="flex flex-col items-center justify-center py-16 text-center space-y-6">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-none flex items-center justify-center border border-primary/20">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-[1.5px]">No resolution yet</h3>
                <p className="text-[11px] text-muted-foreground max-w-[280px] leading-relaxed uppercase tracking-[0.5px]">
                  Once the ticket is resolved, the structured resolution details will appear here.
                </p>
              </div>
              <Button variant="outline" size="sm" className="text-[10px] font-bold uppercase tracking-[1px] border-border rounded-none">Add Resolution</Button>
            </div>
          </TabsContent>

          <TabsContent value="attachments" className="m-0">
             <div className="grid grid-cols-2 gap-6">
               <div className="p-4 border border-border bg-accent/20 rounded-none flex items-center gap-4 hover:bg-accent/40 cursor-pointer transition-all group">
                 <div className="w-10 h-10 bg-primary/10 text-primary rounded-none flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                   <FileText className="w-5 h-5" />
                 </div>
                 <div className="min-w-0">
                   <p className="text-[11px] font-bold truncate uppercase tracking-[0.5px]">error_log.txt</p>
                   <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-[1px]">2.4 MB</p>
                 </div>
               </div>
             </div>
          </TabsContent>

          <TabsContent value="history" className="m-0">
            <div className="space-y-8 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-border">
              <div className="relative pl-12">
                <div className="absolute left-3 top-1 w-2.5 h-2.5 rounded-none bg-primary z-10" />
                <p className="text-[11px] font-bold uppercase tracking-[1px]">Stewart Gauld updated the ticket</p>
                <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-[1px] mt-1">15 minutes ago</p>
                <div className="mt-3 text-[10px] text-muted-foreground bg-accent/20 p-3 rounded-none border border-border uppercase tracking-[0.5px]">
                  Status changed from <span className="font-bold text-foreground">Pending</span> to <span className="font-bold text-foreground">Open</span>
                </div>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-3 top-1 w-2.5 h-2.5 rounded-none bg-muted z-10 border border-border" />
                <p className="text-[11px] font-bold uppercase tracking-[1px]">Ticket submitted via email</p>
                <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-[1px] mt-1">2 hours ago</p>
              </div>
            </div>
          </TabsContent>
        </ScrollArea>

        {/* Footer Input */}
        <div className="p-6 border-t border-border bg-card">
          <div className="flex items-center gap-3 bg-accent/30 border border-border rounded-none p-2 focus-within:ring-1 focus-within:ring-primary transition-all">
            <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-foreground rounded-none">
              <Paperclip className="w-4 h-4" />
            </Button>
            <Input 
              placeholder="TYPE A MESSAGE..." 
              className="border-none bg-transparent focus-visible:ring-0 shadow-none h-10 text-[11px] font-bold uppercase tracking-[1px]"
            />
            <Button size="icon" className="h-9 w-9 rounded-none bg-primary text-primary-foreground hover:opacity-90">
              <Send className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex items-center justify-between mt-4 px-1">
            <div className="flex gap-6">
              <button className="text-[10px] font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-[1.5px]">Internal Note</button>
              <button className="text-[10px] font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-[1.5px]">Canned Response</button>
            </div>
            <div className="flex items-center gap-2 text-[9px] text-muted-foreground font-bold uppercase tracking-[1.5px]">
              <ShieldCheck className="w-3.5 h-3.5" />
              Encrypted
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  );
}
