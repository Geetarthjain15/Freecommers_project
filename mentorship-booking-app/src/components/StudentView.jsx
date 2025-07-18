import React, { useState } from "react";
import { motion } from "framer-motion";
import { useBooking } from "../context/BookingContext";
import MentorCard from "./MentorCard";
import SlotCard from "./SlotCard";
import BookingModal from "./BookingModal";

const StudentView = () => {
  const { timeSlots, mentors, selectedMentor, bookSlot, selectMentor } =
    useBooking();
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSlotClick = (slot) => {
    if (!selectedMentor) {
      alert("Please select a mentor first!");
      return;
    }
    setSelectedSlot(slot);
    setIsModalOpen(true);
  };

  const handleBookingConfirm = (userInfo) => {
    bookSlot(selectedSlot.id, userInfo);
    setIsModalOpen(false);
    setSelectedSlot(null);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedSlot(null);
  };

  const handleMentorSelect = (mentor) => {
    selectMentor(mentor);
  };

  // Filter slots for selected mentor
  const mentorSlots = selectedMentor
    ? timeSlots.filter((slot) => slot.mentorId === selectedMentor.id)
    : [];

  // Group slots by day
  const slotsByDay = mentorSlots.reduce((acc, slot) => {
    if (!acc[slot.day]) {
      acc[slot.day] = [];
    }
    acc[slot.day].push(slot);
    return acc;
  }, {});

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-50 via-blue-50 to-indigo-100 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative px-8 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Find Your Perfect Mentor
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Connect with industry experts and accelerate your career growth
              through personalized mentorship sessions
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span>Expert Mentors</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span>Flexible Scheduling</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span>Proven Results</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mentor Selection Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Choose Your Mentor
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <MentorCard
                mentor={mentor}
                onSelectMentor={handleMentorSelect}
                isSelected={selectedMentor?.id === mentor.id}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Available Slots Section */}
      {selectedMentor ? (
        <div>
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Available Time Slots
            </h2>
            <p className="text-gray-600">
              Book a session with{" "}
              <span className="font-semibold text-primary-600">
                {selectedMentor.name}
              </span>
            </p>
          </div>

          <div className="space-y-6">
            {days.map((day) => {
              const daySlots = slotsByDay[day] || [];
              const availableSlots = daySlots.filter((slot) => slot.available);

              if (daySlots.length === 0) return null;

              return (
                <motion.div
                  key={day}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: days.indexOf(day) * 0.1 }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {day}
                    <span className="ml-2 text-sm font-normal text-gray-500">
                      ({availableSlots.length} available)
                    </span>
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {daySlots.map((slot) => (
                      <SlotCard
                        key={slot.id}
                        slot={slot}
                        onBook={handleSlotClick}
                        isBooked={!slot.available}
                      />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">👆</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Select a Mentor First
          </h3>
          <p className="text-gray-600">
            Choose a mentor above to see their available time slots
          </p>
        </div>
      )}

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        slot={selectedSlot}
        onConfirm={handleBookingConfirm}
      />
    </div>
  );
};

export default StudentView;
