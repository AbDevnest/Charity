import { useEffect, useState } from 'react';
import DataTable from '../../components/Admin/DataTable';
import { getSubscribers, deleteSubscriber, updateSubscriberStatus } from '../../api/adminApi';

export default function AdminSubscribers() {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    setLoading(true);
    try {
      const res = await getSubscribers();
      if (res.success) setSubscribers(res.data);
    } catch (error) {
      console.error('Error fetching subscribers:', error);
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this subscriber?')) {
      await deleteSubscriber(id);
      fetchSubscribers();
    }
  };

const handleStatusChange = async (id, newStatus) => {
  try {
    // Optimistic update
    setSubscribers((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, status: newStatus } : item
      )
    );

    await updateSubscriberStatus(id, { status: newStatus });
  } catch (error) {
    console.error('Status update failed:', error);
    fetchSubscribers(); // Rollback on error
  }
};

  const columns = ['Email', 'Status', 'Created At', 'Action'];
  const statusOptions = ['Active', 'Inactive'];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Subscribers</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <DataTable
          columns={columns}
          data={subscribers}
          onDelete={handleDelete}
          onStatusChange={handleStatusChange}
          statusOptions={statusOptions}
        />
      )}
    </div>
  );
}