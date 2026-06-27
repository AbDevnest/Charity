import { FiX } from 'react-icons/fi';

export default function ContactDetailPopup({ contact, onClose }) {
  if (!contact) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl w-full max-w-lg mx-4 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h3 className="text-xl font-bold text-gray-800">Contact Details</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-3">
          <div>
            <p className="text-sm text-gray-500">Name</p>
            <p className="font-medium text-gray-800">{contact.name || 'N/A'}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-medium text-gray-800">{contact.phone || 'N/A'}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium text-gray-800">{contact.email || 'N/A'}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Subject</p>
            <p className="font-medium text-gray-800">{contact.subject || 'N/A'}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Status</p>
            <p className="font-medium text-gray-800">{contact.status || 'N/A'}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Message</p>
            <div className="bg-gray-50 p-3 rounded-lg mt-1 text-gray-700 max-h-40 overflow-y-auto">
              {contact.message || 'No message'}
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-500">Created At</p>
            <p className="font-medium text-gray-800">
              {contact.createdAt || contact.updatedAt
                ? new Date(contact.createdAt || contact.updatedAt).toLocaleString('en-IN', {
                    timeZone: 'Asia/Kolkata',
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true,
                  })
                : 'N/A'}
            </p>
          </div>
        </div>

        {/* Close Button */}
        <div className="mt-6 pt-3 border-t flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#2faf90] text-white rounded-lg hover:bg-[#259a7a] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}