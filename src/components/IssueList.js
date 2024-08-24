import React from 'react';
import IssueItem from './IssueItem';

function IssueList({ issues, onDelete, onUpdate }) {
  return (
    <div className="mt-4">
      {issues.map((issue) => (
        <IssueItem 
          key={issue.id} 
          issue={issue} 
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}

export default IssueList;