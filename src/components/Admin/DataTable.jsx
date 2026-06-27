import { FiTrash2, FiEye } from 'react-icons/fi';

export default function DataTable({ 
  columns, 
  data, 
  onDelete, 
  onStatusChange, 
  statusOptions,
  onViewDetail,
  showDetailButton = false
}) {
  return (
    <div className="bg-white rounded-lg shadow overflow-x-auto">
      <table className="w-full text-left">
        <thead className="bg-gray-50 border-b">
          <tr>
            {columns.map((col, index) => (
              <th key={index} className="p-3 text-sm font-semibold text-gray-600">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="p-4 text-center text-gray-500">
                No data found
              </td>
            </tr>
          ) : (
            data.map((item) => (
              <tr key={item._id} className="border-b hover:bg-gray-50">
                {columns.map((col) => {
                  // Status Column
                  if (col === 'Status') {
                    return (
                      <td key={col} className="p-3">
                        <select
                          value={item.status || 'New'}
                          onChange={(e) => onStatusChange(item._id, e.target.value)}
                          className="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#2faf90] bg-white"
                        >
                          {statusOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </td>
                    );
                  }

                  // Action Column
                  if (col === 'Action') {
                    return (
                      <td key={col} className="p-3">
                        <div className="flex items-center gap-2">
                          {showDetailButton && (
                            <button
                              onClick={() => onViewDetail(item)}
                              className="text-blue-500 hover:text-blue-700 transition-colors"
                              title="View Details"
                            >
                              <FiEye size={18} />
                            </button>
                          )}
                          <button
                            onClick={() => onDelete(item._id)}
                            className="text-red-500 hover:text-red-700 transition-colors"
                            title="Delete"
                          >
                            <FiTrash2 size={18} />
                          </button>
                        </div>
                      </td>
                    );
                  }

                  //  Created At Column
                  if (col === 'Created At') {
                    const dateField = item.createdAt || item.updatedAt;
                    return (
                      <td key={col} className="p-3">
                        {dateField
                          ? new Date(dateField).toLocaleString('en-IN', {
                              timeZone: 'Asia/Kolkata',
                              day: '2-digit',
                              month: '2-digit',
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                              hour12: true,
                            })
                          : 'N/A'}
                      </td>
                    );
                  }

                  // Regular Columns
                  return (
                    <td key={col} className="p-3">
                      {item[col.toLowerCase()] || 'N/A'}
                    </td>
                  );
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}