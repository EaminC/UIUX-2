import React, { useState } from 'react';
import { Homepage } from './components/Homepage';
import { ProgramPage } from './components/ProgramPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'program'>('home');

  return (
    <div className="min-h-screen bg-background">
      {currentPage === 'home' ? (
        <Homepage onNavigate={setCurrentPage} />
      ) : (
        <ProgramPage onNavigate={setCurrentPage} />
      )}
    </div>
  );
}
