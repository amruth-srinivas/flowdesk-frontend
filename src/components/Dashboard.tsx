import React from 'react';
import { 
  Ticket as TicketIcon, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  TrendingUp,
  Users,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { MOCK_TICKETS, MOCK_PROJECTS, MOCK_USERS } from '@/src/constants';
import { cn } from '@/lib/utils';

const DATA = [
  { name: 'Mon', tickets: 12 },
  { name: 'Tue', tickets: 19 },
  { name: 'Wed', tickets: 15 },
  { name: 'Thu', tickets: 22 },
  { name: 'Fri', tickets: 30 },
  { name: 'Sat', tickets: 10 },
  { name: 'Sun', tickets: 8 },
];

const STATS = [
  { label: 'Total Tickets', value: '124', icon: TicketIcon, change: '+12%', trend: 'up' },
  { label: 'Resolved', value: '86', icon: CheckCircle2, change: '+5%', trend: 'up' },
  { label: 'Avg. Response', value: '1.2h', icon: Clock, change: '-10%', trend: 'down' },
  { label: 'Active Projects', value: '8', icon: Users, change: '0%', trend: 'neutral' },
];

export default function Dashboard() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-light tracking-tight text-foreground uppercase">Overview</h1>
        <p className="text-muted-foreground text-xs tracking-[1.5px] uppercase mt-2">Executive Portfolio Summary</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS.map((stat) => (
          <Card key={stat.label} className="border border-border bg-card rounded-none shadow-none">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="p-2 bg-primary/10 rounded-none">
                  <stat.icon className="w-4 h-4 text-primary" />
                </div>
                <div className={cn(
                  "flex items-center text-[11px] font-bold tracking-[1px]",
                  stat.trend === 'up' ? "text-emerald-500" : stat.trend === 'down' ? "text-rose-500" : "text-muted-foreground"
                )}>
                  {stat.trend === 'up' ? <ArrowUpRight className="w-3 h-3 mr-1" /> : stat.trend === 'down' ? <ArrowDownRight className="w-3 h-3 mr-1" /> : null}
                  {stat.change}
                </div>
              </div>
              <div className="mt-6">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[1.5px]">{stat.label}</p>
                <h3 className="text-3xl font-light mt-2 tracking-tight">{stat.value}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart Section */}
        <Card className="lg:col-span-2 border border-border bg-card rounded-none shadow-none">
          <CardHeader>
            <CardTitle className="text-xs font-bold uppercase tracking-[1.5px] text-muted-foreground">Performance Projection</CardTitle>
            <CardDescription className="text-[11px] text-muted-foreground/60">Ticket volume analysis and growth trends.</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={DATA}>
                <defs>
                  <linearGradient id="colorTickets" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: '#9a9a9a', fontWeight: 600 }} 
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: '#9a9a9a', fontWeight: 600 }} 
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#141414', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                  itemStyle={{ color: '#c5a059', fontSize: '12px' }}
                  cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1 }}
                />
                <Area 
                  type="monotone" 
                  dataKey="tickets" 
                  stroke="var(--primary)" 
                  fillOpacity={1} 
                  fill="url(#colorTickets)" 
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recent Activity / Projects */}
        <Card className="border border-border bg-card rounded-none shadow-none">
          <CardHeader>
            <CardTitle className="text-xs font-bold uppercase tracking-[1.5px] text-muted-foreground">Active Portfolios</CardTitle>
            <CardDescription className="text-[11px] text-muted-foreground/60">Current project allocations.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {MOCK_PROJECTS.map((project) => (
              <div key={project.id} className="flex items-center justify-between p-4 rounded-none border border-border hover:bg-accent/30 transition-all cursor-pointer group">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[1px] group-hover:text-primary transition-colors">{project.name}</h4>
                  <div className="flex gap-2 mt-2">
                    {project.techStack.slice(0, 2).map(tech => (
                      <span key={tech} className="text-[9px] font-bold px-1.5 py-0.5 bg-accent text-muted-foreground rounded-none uppercase tracking-[0.5px]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <Badge variant="outline" className="text-[9px] font-bold uppercase tracking-[1px] border-primary/30 text-primary rounded-none">
                  {project.status}
                </Badge>
              </div>
            ))}
            <Button variant="ghost" className="w-full text-[10px] font-bold uppercase tracking-[1.5px] text-primary hover:text-primary hover:bg-primary/5 rounded-none mt-4">
              VIEW ALL PORTFOLIOS
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Tickets Table */}
      <Card className="border border-border bg-card rounded-none shadow-none">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-xs font-bold uppercase tracking-[1.5px] text-muted-foreground">Recent Activity</CardTitle>
            <CardDescription className="text-[11px] text-muted-foreground/60">Latest support requests and status updates.</CardDescription>
          </div>
          <Button variant="outline" size="sm" className="text-[10px] font-bold uppercase tracking-[1px] border-border rounded-none">VIEW ALL</Button>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-[10px] text-muted-foreground uppercase tracking-[1.5px] bg-accent/30">
                <tr>
                  <th className="px-6 py-4 font-bold">Ticket</th>
                  <th className="px-6 py-4 font-bold">Status</th>
                  <th className="px-6 py-4 font-bold">Priority</th>
                  <th className="px-6 py-4 font-bold">Assignee</th>
                  <th className="px-6 py-4 font-bold text-right">Created</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {MOCK_TICKETS.map((ticket) => (
                  <tr key={ticket.id} className="hover:bg-accent/20 transition-all cursor-pointer group">
                    <td className="px-6 py-5">
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors uppercase tracking-[0.5px]">#{ticket.id} {ticket.title}</span>
                        <span className="text-[10px] text-muted-foreground mt-1 uppercase tracking-[0.5px] font-medium">{ticket.type}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <Badge variant="outline" className="text-[9px] font-bold uppercase tracking-[1px] bg-accent/50 text-foreground border-border rounded-none">
                        {ticket.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <div className={cn(
                          "w-1.5 h-1.5 rounded-full",
                          ticket.priority === 'Critical' ? "bg-rose-500 shadow-[0_0_8px_rgba(244,67,54,0.5)]" : ticket.priority === 'High' ? "bg-orange-500" : "bg-blue-500"
                        )} />
                        <span className="text-[10px] font-bold uppercase tracking-[1px]">{ticket.priority}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-6 h-6 border border-border">
                          <AvatarImage src={MOCK_USERS.find(u => u.id === ticket.assigneeId)?.avatar} />
                          <AvatarFallback className="bg-accent text-[10px]">U</AvatarFallback>
                        </Avatar>
                        <span className="text-[10px] font-bold uppercase tracking-[0.5px]">{MOCK_USERS.find(u => u.id === ticket.assigneeId)?.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-right text-muted-foreground text-[10px] font-bold tracking-[0.5px]">
                      {new Date(ticket.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
