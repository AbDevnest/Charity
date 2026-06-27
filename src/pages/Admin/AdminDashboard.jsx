import { useEffect, useState } from 'react';
import { FiUsers, FiMail, FiPhone } from 'react-icons/fi';
import StatsCard from '../../components/Admin/StatsCard';
import DataTable from '../../components/Admin/DataTable';
import { getVisitors, getSubscribers, getContacts, deleteVisitor, updateVisitorStatus } from '../../api/adminApi';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    subscribers: 0,
    contacts: 0,
    visitors: 0,
  });
  const [recentVisitors, setRecentVisitors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      const [subsRes, contactsRes, visitorsRes] = await Promise.all([
        getSubscribers(),
        getContacts(),
        getVisitors(),
      ]);

      setStats({
        subscribers: subsRes.data?.length || 0,
        contacts: contactsRes.data?.length || 0,
        visitors: visitorsRes.data?.length || 0,
      });

      setRecentVisitors(visitorsRes.data?.slice(0, 10) || []);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
    setLoading(false);
  };

  const handleDeleteVisitor = async (id) => {
    if (window.confirm('Are you sure?')) {
      try {
        // Optimistic delete
        setRecentVisitors((prev) => prev.filter((item) => item._id !== id));
        await deleteVisitor(id);
      } catch (error) {
        console.error('Delete failed:', error);
        fetchDashboardData();
      }
    }
  };

  // Status change handler — dashboard ke liye
  const handleStatusChange = async (id, newStatus) => {
    try {
      setRecentVisitors((prev) =>
        prev.map((item) =>
          item._id === id ? { ...item, status: newStatus } : item
        )
      );

      await updateVisitorStatus(id, { status: newStatus });
    } catch (error) {
      console.error('Status update failed:', error);
      fetchDashboardData();
    }
  };

  const columns = ['Name', 'Email', 'Status', 'Created At', 'Action'];
  const statusOptions = ['Active', 'Inactive'];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <StatsCard
          icon={FiMail}
          label="Total Subscribers"
          value={stats.subscribers}
          color="bg-blue-100 text-blue-600"
        />
        <StatsCard
          icon={FiPhone}
          label="Total Contacts"
          value={stats.contacts}
          color="bg-yellow-100 text-yellow-600"
        />
        <StatsCard
          icon={FiUsers}
          label="Total Visitors"
          value={stats.visitors}
          color="bg-green-100 text-green-600"
        />
      </div>

      {/* Recent Visitors */}
      <h3 className="text-lg font-semibold mb-4">Recent Visitors (Last 10)</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <DataTable
          columns={columns}
          data={recentVisitors}
          onDelete={handleDeleteVisitor}
          onStatusChange={handleStatusChange} 
          statusOptions={statusOptions}
        />
      )}
    </div>
  );
}