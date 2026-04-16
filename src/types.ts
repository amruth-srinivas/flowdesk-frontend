export type Role = 'Admin' | 'Team Lead' | 'Team Member';

export type TicketStatus = 'Open' | 'In Progress' | 'In Review' | 'Resolved' | 'Closed';

export type TicketPriority = 'Critical' | 'High' | 'Medium' | 'Low';

export type TicketType = 'Bug Fix' | 'Feature Request' | 'Service Request' | 'Design Rework' | 'Performance Issue' | 'Security Vulnerability' | 'Documentation';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'Active' | 'On-Hold' | 'Completed';
  techStack: string[];
  teamLeadId: string;
  teamMemberIds: string[];
  createdAt: string;
}

export interface Ticket {
  id: string;
  title: string;
  description: string;
  status: TicketStatus;
  priority: TicketPriority;
  type: TicketType;
  projectId: string;
  creatorId: string;
  assigneeId?: string;
  customerId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  company: string;
  timezone: string;
  tags: string[];
}
