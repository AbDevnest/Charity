import { useEffect, useState } from 'react';
import DataTable from '../../components/Admin/DataTable';
import ContactDetailPopup from '../../components/Admin/ContactDetailPopup';
import { getContacts, deleteContact, updateContactStatus } from '../../api/adminApi';

export default function AdminContacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const res = await getContacts();
      if (res.success) setContacts(res.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      try {
        setContacts((prev) => prev.filter((item) => item._id !== id));
        await deleteContact(id);
      } catch (error) {
        console.error('Delete failed:', error);
        fetchContacts();
      }
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      setContacts((prev) =>
        prev.map((item) =>
          item._id === id ? { ...item, status: newStatus } : item
        )
      );
      await updateContactStatus(id, { status: newStatus });
    } catch (error) {
      console.error('Status update failed:', error);
      fetchContacts();
    }
  };

  const handleViewDetail = (contact) => {
    setSelectedContact(contact);
  };

  // ✅ Sirf Name, Phone, Subject, Status, Created At, Action
  const columns = ['Name', 'Phone', 'Subject', 'Status', 'Created At', 'Action'];
  const statusOptions = ['New', 'Contacted', 'Interested', 'Closed'];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Contacts</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <DataTable
            columns={columns}
            data={contacts}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
            statusOptions={statusOptions}
            onViewDetail={handleViewDetail}
            showDetailButton={true}
          />

          {selectedContact && (
            <ContactDetailPopup
              contact={selectedContact}
              onClose={() => setSelectedContact(null)}
            />
          )}
        </>
      )}
    </div>
  );
}