import React, { useState, useEffect } from 'react';
import IssueForm from './components/IssueForm';
import IssueList from './components/IssueList';

function App() {
  const [issues, setIssues] = useState([]);

  const addIssue = (newIssue) => {
    setIssues(prevIssues => [...prevIssues, { ...newIssue, id: Date.now() }]);
  };

  const deleteIssue = (id) => {
    setIssues(prevIssues => prevIssues.filter(issue => issue.id !== id));
  };

  // New update function
  const updateIssue = (id, updatedIssue) => {
    setIssues(prevIssues => 
      prevIssues.map(issue => 
        issue.id === id ? { ...issue, ...updatedIssue } : issue
      )
    );
  };

  useEffect(() => {
    const storedIssues = JSON.parse(localStorage.getItem('issues') || '[]');
    if (storedIssues.length) setIssues(storedIssues);
  }, []);

  useEffect(() => {
    localStorage.setItem('issues', JSON.stringify(issues));
  }, [issues]);

  return (
    <div className="App container mx-auto p-4">
      <h1 className="text-3xl text-center font-bold mb-4">Bug Tracker Fun Edition👾🤖</h1>
      <IssueForm onSubmit={addIssue} />
      <IssueList 
        issues={issues} 
        onDelete={deleteIssue} 
        onUpdate={updateIssue} // Pass the update function here
      />
    </div>
  );
}

export default App;