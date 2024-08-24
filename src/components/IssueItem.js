import React, { useState } from 'react';

function IssueItem({ issue, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(issue.title);
  const [editDescription, setEditDescription] = useState(issue.description);

  const handleEdit = () => {
    if (isEditing) {
      onUpdate(issue.id, { title: editTitle, description: editDescription });
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-5 mb-4 transform hover:scale-105 transition-all duration-300">
      <div className="flex justify-between items-start">
        {isEditing ? (
          <input 
            value={editTitle} 
            onChange={(e) => setEditTitle(e.target.value)} 
            className="text-2xl font-bold w-full mb-3 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ) : (
          <h2 className="text-2xl font-bold text-blue-600">{issue.title}</h2>
        )}
        <div className="flex space-x-2">
          <button 
            onClick={handleEdit} 
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${isEditing ? 'bg-green-500 hover:bg-green-600' : 'bg-yellow-400 hover:bg-yellow-500'} text-white`}
          >
            {isEditing ? 'Save' : 'Edit'}
          </button>
          <button 
            onClick={() => onDelete(issue.id)} 
            className="px-4 py-2 text-sm font-medium bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors duration-200"
          >
            Delete
          </button>
        </div>
      </div>
      {isEditing ? (
        <textarea 
          value={editDescription} 
          onChange={(e) => setEditDescription(e.target.value)} 
          className="w-full mt-2 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
        />
      ) : (
        <p className="mt-2 text-gray-700">{issue.description}</p>
      )}
    </div>
  );
}

export default IssueItem;