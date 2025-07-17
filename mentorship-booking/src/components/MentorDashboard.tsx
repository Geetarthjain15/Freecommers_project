import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Calendar, Clock, User, MessageSquare } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

const MentorDashboard: React.FC = () => {
  const { slots, approveBooking, rejectBooking } = useBooking();
  
  const bookedSlots = slots.filter(slot => slot.isBooked);

  if (bookedSlots.length === 0) {
    return (
      <div className="text-center py-12">
        <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-500 mb-2">No Bookings Yet</h3>
        <p className="text-gray-400">Booked slots will appear here for your review.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {bookedSlots.map((slot) => (
        <motion.div
          key={slot.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary-500" />
                  <span className="font-medium text-gray-700">{slot.day}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary-500" />
                  <span className="font-medium text-gray-700">{slot.time}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-2">
                <User className="w-4 h-4 text-gray-500" />
                <span className="text-gray-600">Booked by: {slot.bookedBy}</span>
              </div>
              
              {slot.message && (
                <div className="flex items-start gap-2">
                  <MessageSquare className="w-4 h-4 text-gray-500 mt-0.5" />
                  <p className="text-gray-600 italic">"{slot.message}"</p>
                </div>
              )}
            </div>
            
            <div className={`px-3 py-1 rounded-full text-sm font-medium ${
              slot.status === 'approved'
                ? 'bg-green-100 text-green-800'
                : slot.status === 'rejected'
                ? 'bg-red-100 text-red-800'
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              {slot.status === 'approved' ? 'Approved' : slot.status === 'rejected' ? 'Rejected' : 'Pending'}
            </div>
          </div>
          
          {slot.status === 'pending' && (
            <div className="flex gap-3 pt-4 border-t border-gray-100">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => rejectBooking(slot.id)}
                className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                <XCircle className="w-4 h-4" />
                Reject
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => approveBooking(slot.id)}
                className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                <CheckCircle className="w-4 h-4" />
                Approve
              </motion.button>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default MentorDashboard;
