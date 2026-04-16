import { Ticket, Project, User, Customer } from './types';

export const MOCK_USERS: User[] = [
  { id: 'u1', name: 'Stewart Gauld', email: 'stewart@syndeo.co.nz', role: 'Admin', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Stewart' },
  { id: 'u2', name: 'Lawrence', email: 'lawrence@zoho.com', role: 'Team Lead', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lawrence' },
  { id: 'u3', name: 'Sarah Chen', email: 'sarah@flowdesk.com', role: 'Team Member', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
];

export const MOCK_PROJECTS: Project[] = [
  {
    id: 'p1',
    name: 'Syndeo Media',
    description: 'Main project for Syndeo Media client.',
    status: 'Active',
    techStack: ['React', 'Node.js', 'PostgreSQL'],
    teamLeadId: 'u2',
    teamMemberIds: ['u3'],
    createdAt: '2026-01-10T10:00:00Z',
  },
  {
    id: 'p2',
    name: 'Internal KB',
    description: 'Internal knowledge base development.',
    status: 'Active',
    techStack: ['Next.js', 'Tailwind'],
    teamLeadId: 'u1',
    teamMemberIds: ['u2', 'u3'],
    createdAt: '2026-02-15T14:30:00Z',
  },
];

export const MOCK_TICKETS: Ticket[] = [
  {
    id: '103',
    title: 'Google Ad Campaigns not running!',
    description: 'The ad campaigns for the spring sale are not showing up in the dashboard.',
    status: 'Open',
    priority: 'Critical',
    type: 'Bug Fix',
    projectId: 'p1',
    creatorId: 'u1',
    assigneeId: 'u2',
    createdAt: '2026-04-15T13:00:00Z',
    updatedAt: '2026-04-15T13:05:00Z',
  },
  {
    id: '102',
    title: 'Cannot access my website',
    description: 'The main landing page is returning a 404 error.',
    status: 'Open',
    priority: 'High',
    type: 'Bug Fix',
    projectId: 'p1',
    creatorId: 'u2',
    assigneeId: 'u3',
    createdAt: '2026-04-15T12:59:00Z',
    updatedAt: '2026-04-15T12:59:00Z',
  },
  {
    id: '101',
    title: "Here's your first ticket.",
    description: 'Welcome to FlowDesk! This is a sample ticket.',
    status: 'Open',
    priority: 'Low',
    type: 'Documentation',
    projectId: 'p2',
    creatorId: 'u1',
    assigneeId: 'u1',
    createdAt: '2026-01-20T12:46:00Z',
    updatedAt: '2026-01-20T12:46:00Z',
  },
];

export const MOCK_CUSTOMERS: Customer[] = [
  { id: 'c1', name: 'Syndeo Media', email: 'contact@syndeo.com', company: 'Syndeo Media', timezone: 'NZDT', tags: ['Premium', 'Tech'] },
];
