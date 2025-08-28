import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { 
  Users, ShoppingBag, MessageCircle, FileText, TrendingUp, 
  DollarSign, Activity, AlertTriangle, Settings, BarChart3,
  Eye, Edit, Trash2, Plus, Search, Filter
} from 'lucide-react';

interface DashboardStats {
  totalUsers: number;
  totalOrders: number;
  totalTickets: number;
  totalArticles: number;
  monthlyRevenue: number;
  activeUsers: number;
  conversionRate: number;
  avgResponseTime: number;
}

interface Order {
  id: string;
  customerEmail: string;
  product: string;
  amount: number;
  status: 'pending' | 'completed' | 'cancelled';
  date: string;
}

interface Ticket {
  id: string;
  customerEmail: string;
  subject: string;
  status: 'open' | 'in-progress' | 'waiting' | 'closed';
  priority: 'low' | 'normal' | 'high' | 'urgent';
  created: string;
}

const AdminDashboard = () => {
  const { isAuthenticated, isAdmin } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');

  // Redirect if not authenticated or not admin
  if (!isAuthenticated || !isAdmin) {
    return <Navigate to="/login" replace />;
  }

  const stats: DashboardStats = {
    totalUsers: 1247,
    totalOrders: 389,
    totalTickets: 52,
    totalArticles: 24,
    monthlyRevenue: 15420.50,
    activeUsers: 89,
    conversionRate: 3.2,
    avgResponseTime: 2.4
  };

  const recentOrders: Order[] = [
    {
      id: 'ORD-001',
      customerEmail: 'user@example.com',
      product: 'SpookyEconomy Pro',
      amount: 29.99,
      status: 'completed',
      date: '2025-01-16'
    },
    {
      id: 'ORD-002',
      customerEmail: 'admin@server.com',
      product: 'Complete Server Bundle',
      amount: 99.99,
      status: 'pending',
      date: '2025-01-16'
    },
    {
      id: 'ORD-003',
      customerEmail: 'owner@pvp.net',
      product: 'Spooky PvP Arena',
      amount: 24.99,
      status: 'completed',
      date: '2025-01-15'
    }
  ];

  const openTickets: Ticket[] = [
    {
      id: 'SD-001',
      customerEmail: 'help@example.com',
      subject: 'Plugin installation issue',
      status: 'in-progress',
      priority: 'high',
      created: '2025-01-16'
    },
    {
      id: 'SD-002',
      customerEmail: 'support@server.com',
      subject: 'Billing inquiry',
      status: 'open',
      priority: 'normal',
      created: '2025-01-15'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
      case 'closed':
        return 'text-green-500 bg-green-500/20';
      case 'pending':
      case 'open':
        return 'text-blue-500 bg-blue-500/20';
      case 'in-progress':
        return 'text-yellow-500 bg-yellow-500/20';
      case 'cancelled':
        return 'text-red-500 bg-red-500/20';
      default:
        return 'text-gray-500 bg-gray-500/20';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return 'text-red-500';
      case 'high':
        return 'text-orange-500';
      case 'normal':
        return 'text-blue-500';
      case 'low':
        return 'text-gray-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-gray-400">Manage your SpookyDevz business</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-gray-800 p-1 rounded-lg mb-8 overflow-x-auto">
          {[
            { id: 'dashboard', name: 'Dashboard', icon: BarChart3 },
            { id: 'orders', name: 'Orders', icon: ShoppingBag },
            { id: 'tickets', name: 'Tickets', icon: MessageCircle },
            { id: 'users', name: 'Users', icon: Users },
            { id: 'content', name: 'Content', icon: FileText },
            { id: 'settings', name: 'Settings', icon: Settings }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-red-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Dashboard Overview */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <Users className="h-8 w-8 text-blue-500" />
                  <span className="text-2xl font-bold text-white">{stats.totalUsers.toLocaleString()}</span>
                </div>
                <h3 className="font-medium text-gray-300">Total Users</h3>
                <p className="text-sm text-gray-500">+12% from last month</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <ShoppingBag className="h-8 w-8 text-green-500" />
                  <span className="text-2xl font-bold text-white">{stats.totalOrders}</span>
                </div>
                <h3 className="font-medium text-gray-300">Total Orders</h3>
                <p className="text-sm text-gray-500">+8% from last month</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <DollarSign className="h-8 w-8 text-yellow-500" />
                  <span className="text-2xl font-bold text-white">${stats.monthlyRevenue.toLocaleString()}</span>
                </div>
                <h3 className="font-medium text-gray-300">Monthly Revenue</h3>
                <p className="text-sm text-gray-500">+15% from last month</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <MessageCircle className="h-8 w-8 text-red-500" />
                  <span className="text-2xl font-bold text-white">{stats.totalTickets}</span>
                </div>
                <h3 className="font-medium text-gray-300">Open Tickets</h3>
                <p className="text-sm text-gray-500">Avg {stats.avgResponseTime}h response</p>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-white">Recent Orders</h3>
                  <button className="text-red-400 hover:text-red-300 text-sm">View All</button>
                </div>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                      <div>
                        <div className="font-medium text-white">{order.product}</div>
                        <div className="text-sm text-gray-400">{order.customerEmail}</div>
                        <div className="text-xs text-gray-500">{order.date}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-white">${order.amount}</div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-white">Open Tickets</h3>
                  <button className="text-red-400 hover:text-red-300 text-sm">View All</button>
                </div>
                <div className="space-y-4">
                  {openTickets.map((ticket) => (
                    <div key={ticket.id} className="p-4 bg-gray-700 rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <div className="font-medium text-white">{ticket.subject}</div>
                        <span className={`text-sm font-medium ${getPriorityColor(ticket.priority)}`}>
                          {ticket.priority.toUpperCase()}
                        </span>
                      </div>
                      <div className="text-sm text-gray-400 mb-2">{ticket.customerEmail}</div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{ticket.created}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                          {ticket.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Order Management</h2>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search orders..."
                    className="pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-red-500"
                  />
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors">
                  <Filter className="h-4 w-4" />
                  <span>Filter</span>
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4 font-medium text-gray-300">Order ID</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-300">Customer</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-300">Product</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-300">Amount</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-300">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-300">Date</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-300">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="border-b border-gray-700/50">
                      <td className="py-3 px-4 text-white font-mono">{order.id}</td>
                      <td className="py-3 px-4 text-gray-300">{order.customerEmail}</td>
                      <td className="py-3 px-4 text-white">{order.product}</td>
                      <td className="py-3 px-4 text-white font-semibold">${order.amount}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-gray-400">{order.date}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-2">
                          <button className="p-1 text-gray-400 hover:text-blue-400 transition-colors">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button className="p-1 text-gray-400 hover:text-yellow-400 transition-colors">
                            <Edit className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tickets Tab */}
        {activeTab === 'tickets' && (
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Support Tickets</h2>
              <button className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                <Plus className="h-4 w-4" />
                <span>New Ticket</span>
              </button>
            </div>

            <div className="space-y-4">
              {openTickets.map((ticket) => (
                <div key={ticket.id} className="bg-gray-700 p-6 rounded-lg">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="font-semibold text-white">#{ticket.id}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                          {ticket.status}
                        </span>
                        <span className={`text-sm font-medium ${getPriorityColor(ticket.priority)}`}>
                          {ticket.priority.toUpperCase()}
                        </span>
                      </div>
                      <h3 className="text-lg font-medium text-white mb-2">{ticket.subject}</h3>
                      <p className="text-gray-400">From: {ticket.customerEmail}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors">
                        Reply
                      </button>
                      <button className="px-3 py-1 bg-gray-600 text-white rounded text-sm hover:bg-gray-500 transition-colors">
                        Close
                      </button>
                    </div>
                  </div>
                  <div className="text-sm text-gray-400">
                    Created: {ticket.created}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other tabs would be implemented similarly... */}
        {activeTab !== 'dashboard' && activeTab !== 'orders' && activeTab !== 'tickets' && (
          <div className="bg-gray-800 rounded-lg p-12 text-center">
            <Settings className="h-16 w-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-white mb-2">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Management</h3>
            <p className="text-gray-400">This section is under development</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;