import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle, XCircle, Clock, Zap, Globe, Database, Shield, RefreshCw } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  description: string;
  status: 'operational' | 'degraded' | 'major_outage' | 'maintenance';
  uptime: number;
  responseTime: number;
  icon: React.ComponentType<any>;
}

interface Incident {
  id: string;
  title: string;
  description: string;
  status: 'investigating' | 'identified' | 'monitoring' | 'resolved';
  severity: 'low' | 'medium' | 'high' | 'critical';
  created: string;
  updated: string;
  affectedServices: string[];
}

const StatusPage = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const services: Service[] = [
    {
      id: 'website',
      name: 'Main Website',
      description: 'SpookyDevz main website and store',
      status: 'operational',
      uptime: 99.98,
      responseTime: 245,
      icon: Globe
    },
    {
      id: 'api',
      name: 'API Services',
      description: 'Core API and authentication services',
      status: 'operational',
      uptime: 99.95,
      responseTime: 180,
      icon: Zap
    },
    {
      id: 'database',
      name: 'Database',
      description: 'Primary database cluster',
      status: 'operational',
      uptime: 99.99,
      responseTime: 50,
      icon: Database
    },
    {
      id: 'downloads',
      name: 'Download Service',
      description: 'Plugin and file download system',
      status: 'degraded',
      uptime: 98.2,
      responseTime: 1250,
      icon: Shield
    },
    {
      id: 'support',
      name: 'Support System',
      description: 'Ticket and email support services',
      status: 'operational',
      uptime: 99.85,
      responseTime: 320,
      icon: Clock
    }
  ];

  const incidents: Incident[] = [
    {
      id: '1',
      title: 'Slow Download Speeds',
      description: 'Users may experience slower than normal download speeds for plugins and files.',
      status: 'monitoring',
      severity: 'medium',
      created: '2025-01-16 14:30:00',
      updated: '2025-01-16 15:45:00',
      affectedServices: ['downloads']
    },
    {
      id: '2',
      title: 'Scheduled Maintenance',
      description: 'Routine database maintenance completed successfully. All services restored.',
      status: 'resolved',
      severity: 'low',
      created: '2025-01-15 02:00:00',
      updated: '2025-01-15 04:30:00',
      affectedServices: ['database', 'api']
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'degraded':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      case 'major_outage':
        return <XCircle className="h-5 w-5 text-red-500" />;
      case 'maintenance':
        return <Clock className="h-5 w-5 text-blue-500" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-500';
      case 'degraded':
        return 'text-yellow-500';
      case 'major_outage':
        return 'text-red-500';
      case 'maintenance':
        return 'text-blue-500';
      default:
        return 'text-gray-500';
    }
  };

  const getIncidentStatusColor = (status: string) => {
    switch (status) {
      case 'investigating':
        return 'text-red-500 bg-red-500/20';
      case 'identified':
        return 'text-yellow-500 bg-yellow-500/20';
      case 'monitoring':
        return 'text-blue-500 bg-blue-500/20';
      case 'resolved':
        return 'text-green-500 bg-green-500/20';
      default:
        return 'text-gray-500 bg-gray-500/20';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'text-red-500';
      case 'high':
        return 'text-orange-500';
      case 'medium':
        return 'text-yellow-500';
      case 'low':
        return 'text-green-500';
      default:
        return 'text-gray-500';
    }
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    // Simulate refresh delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLastUpdated(new Date());
    setIsRefreshing(false);
  };

  const overallStatus = services.every(s => s.status === 'operational') 
    ? 'All Systems Operational' 
    : services.some(s => s.status === 'major_outage')
    ? 'Major System Issues'
    : 'Some Systems Affected';

  const overallStatusColor = services.every(s => s.status === 'operational')
    ? 'text-green-500'
    : services.some(s => s.status === 'major_outage')
    ? 'text-red-500'
    : 'text-yellow-500';

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Service Status</h1>
          <p className="text-xl text-gray-400">Real-time status of all SpookyDevz services</p>
        </div>

        {/* Overall Status */}
        <div className="bg-gray-800 rounded-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              {getStatusIcon(services.every(s => s.status === 'operational') ? 'operational' : 'degraded')}
              <h2 className={`text-2xl font-bold ${overallStatusColor}`}>{overallStatus}</h2>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Last updated: {lastUpdated.toLocaleTimeString()}</span>
              <button
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="flex items-center space-x-1 px-3 py-1 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                <span>Refresh</span>
              </button>
            </div>
          </div>

          {/* Service Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.id} className="bg-gray-700 p-4 rounded-lg">
                  <div className="flex items-center space-x-3 mb-3">
                    <Icon className="h-5 w-5 text-gray-400" />
                    <span className="font-medium text-white">{service.name}</span>
                    {getStatusIcon(service.status)}
                  </div>
                  <p className="text-gray-400 text-sm mb-3">{service.description}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Uptime</span>
                      <div className="font-medium text-white">{service.uptime}%</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Response</span>
                      <div className="font-medium text-white">{service.responseTime}ms</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Current Incidents */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Current Incidents</h2>
          {incidents.filter(i => i.status !== 'resolved').length === 0 ? (
            <div className="bg-gray-800 rounded-lg p-8 text-center">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-white mb-2">No Active Incidents</h3>
              <p className="text-gray-400">All systems are running smoothly</p>
            </div>
          ) : (
            <div className="space-y-4">
              {incidents.filter(i => i.status !== 'resolved').map((incident) => (
                <div key={incident.id} className="bg-gray-800 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="font-semibold text-white">{incident.title}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getIncidentStatusColor(incident.status)}`}>
                          {incident.status.replace('_', ' ').toUpperCase()}
                        </span>
                        <span className={`text-sm font-medium ${getSeverityColor(incident.severity)}`}>
                          {incident.severity.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-gray-400 mb-3">{incident.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>Created: {incident.created}</span>
                        <span>Updated: {incident.updated}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {incident.affectedServices.map((serviceId) => {
                      const service = services.find(s => s.id === serviceId);
                      return service ? (
                        <span key={serviceId} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                          {service.name}
                        </span>
                      ) : null;
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Incident History */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Recent Incident History</h2>
          <div className="space-y-4">
            {incidents.filter(i => i.status === 'resolved').map((incident) => (
              <div key={incident.id} className="bg-gray-800 rounded-lg p-6 opacity-75">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="font-semibold text-white">{incident.title}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getIncidentStatusColor(incident.status)}`}>
                        RESOLVED
                      </span>
                    </div>
                    <p className="text-gray-400 mb-3">{incident.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>Created: {incident.created}</span>
                      <span>Resolved: {incident.updated}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Uptime Statistics */}
        <div className="bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6">30-Day Uptime Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.id} className="text-center">
                <h3 className="font-medium text-white mb-2">{service.name}</h3>
                <div className="text-3xl font-bold text-white mb-2">{service.uptime}%</div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full" 
                    style={{ width: `${service.uptime}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="mt-12 bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Stay Informed</h2>
          <p className="text-red-100 mb-6">Get real-time notifications about service status changes</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-white rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button className="px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusPage;