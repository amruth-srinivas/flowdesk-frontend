/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import TicketList from './components/TicketList';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'tickets':
        return <TicketList />;
      case 'kb':
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-6">
            <div className="w-20 h-20 bg-accent/30 border border-border rounded-none flex items-center justify-center text-primary">
              <BarChart3 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-[2px]">Knowledge Base</h2>
              <p className="text-[11px] text-muted-foreground uppercase tracking-[1px]">This module is coming soon.</p>
            </div>
          </div>
        );
      case 'customers':
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-6">
            <div className="w-20 h-20 bg-accent/30 border border-border rounded-none flex items-center justify-center text-primary">
              <Users className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-[2px]">Customers</h2>
              <p className="text-[11px] text-muted-foreground uppercase tracking-[1px]">This module is coming soon.</p>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </Layout>
  );
}

import { BarChart3, Users } from 'lucide-react';
