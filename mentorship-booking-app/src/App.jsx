import React, { useState } from 'react';
import { BookingProvider } from './context/BookingContext';
import Header from './components/Header';
import StudentView from './components/StudentView';
import MentorDashboard from './components/MentorDashboard';

function App() {
  const [currentView, setCurrentView] = useState('student');

  return (
    <BookingProvider>
      <div className="min-h-screen bg-gray-50">
        <Header 
          currentView={currentView} 
          onViewChange={setCurrentView} 
        />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {currentView === 'student' ? (
            <StudentView />
          ) : (
            <MentorDashboard />
          )}
        </main>
        
        <footer className="bg-white border-t border-gray-200 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="text-center text-gray-600">
              <p>&copy; 2024 MentorBook. Built with React & Tailwind CSS.</p>
            </div>
          </div>
        </footer>
      </div>
    </BookingProvider>
  );
}

export default App;
