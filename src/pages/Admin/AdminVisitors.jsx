import { useEffect, useState } from 'react';
import DataTable from '../../components/Admin/DataTable';
import { getVisitors, deleteVisitor, updateVisitorStatus } from '../../api/adminApi';

export default function AdminVisitors() {
  const [visitors, setVisitors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVisitors();
  }, []);

  const fetchVisitors = async () => {
    setLoading(true);
    try {
      const res = await getVisitors();
      if (res.success) setVisitors(res.data);
    } catch (error) {
      console.error('Error fetching visitors:', error);
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this visitor?')) {
      await deleteVisitor(id);
      fetchVisitors();
    }
  };

const handleStatusChange = async (id, newStatus) => {
  try {
    setVisitors((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, status: newStatus } : item
      )
    );

    await updateVisitorStatus(id, { status: newStatus });
  } catch (error) {
    console.error('Status update failed:', error);
    fetchVisitors();
  }
};

  const columns = ['Name', 'Email', 'Status', 'Created At', 'Action'];
  const statusOptions = ['Active', 'Inactive'];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Visitors</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <DataTable
          columns={columns}
          data={visitors}
          onDelete={handleDelete}
          onStatusChange={handleStatusChange}
          statusOptions={statusOptions}
        />
      )}
    </div>
  );
}