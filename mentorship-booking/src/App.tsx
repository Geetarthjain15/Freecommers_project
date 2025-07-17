import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users } from 'lucide-react';
import { BookingProvider, useBooking } from './context/BookingContext';
import SlotCard from './components/SlotCard';
import BookingModal from './components/BookingModal';
import MentorDashboard from './components/MentorDashboard';
import { TimeSlot } from './types';

const AppContent: React.FC = () => {
  const { slots, bookSlot } = useBooking();
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'booking' | 'mentor'>('booking');

  const handleSlotClick = (slot: TimeSlot) => {
    setSelectedSlot(slot);
    setIsModalOpen(true);
  };

  const handleBooking = (userName: string, message: string) => {
    if (selectedSlot) {
      bookSlot(selectedSlot.id, userName, message);
    }
  };

  const groupedSlots = slots.reduce((acc, slot) => {
    if (!acc[slot.day]) {
      acc[slot.day] = [];
    }
    acc[slot.day].push(slot);
    return acc;
  }, {} as Record<string, TimeSlot[]>);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Mentorship Booking</h1>
          <p className="text-gray-600">Book your mentorship sessions with ease</p>
        </motion.div>

        {/* View Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-sm border border-gray-200">
            <button
              onClick={() => setCurrentView('booking')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                currentView === 'booking'
                  ? 'bg-primary-500 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Calendar className="w-4 h-4" />
              Book Slots
            </button>
            <button
              onClick={() => setCurrentView('mentor')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                currentView === 'mentor'
                  ? 'bg-primary-500 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Users className="w-4 h-4" />
              Mentor View
            </button>
          </div>
        </div>

        {/* Content */}
        {currentView === 'booking' ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
          >
            {days.map((day) => (
              <div key={day} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">{day}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {groupedSlots[day]?.map((slot) => (
                    <SlotCard
                      key={slot.id}
                      slot={slot}
                      onClick={() => handleSlotClick(slot)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Booking Requests</h2>
            <MentorDashboard />
          </motion.div>
        )}

        {/* Booking Modal */}
        <BookingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          slot={selectedSlot}
          onBook={handleBooking}
        />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BookingProvider>
      <AppContent />
    </BookingProvider>
  );
};

export default App;
