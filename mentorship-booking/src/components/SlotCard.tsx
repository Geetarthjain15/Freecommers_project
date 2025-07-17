import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { TimeSlot } from '../types';

interface SlotCardProps {
  slot: TimeSlot;
  onClick: () => void;
}

const SlotCard: React.FC<SlotCardProps> = ({ slot, onClick }) => {
  const getStatusIcon = () => {
    if (!slot.isBooked) return <Clock className="w-4 h-4 text-gray-500" />;
    
    switch (slot.status) {
      case 'approved':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'rejected':
        return <XCircle className="w-4 h-4 text-red-500" />;
      case 'pending':
      default:
        return <AlertCircle className="w-4 h-4 text-yellow-500" />;
    }
  };

  const getStatusText = () => {
    if (!slot.isBooked) return 'Available';
    
    switch (slot.status) {
      case 'approved':
        return 'Approved';
      case 'rejected':
        return 'Rejected';
      case 'pending':
      default:
        return 'Pending';
    }
  };

  const getCardStyles = () => {
    if (!slot.isBooked) {
      return 'bg-white border-gray-200 hover:border-primary-500 hover:shadow-md cursor-pointer';
    }
    
    switch (slot.status) {
      case 'approved':
        return 'bg-green-50 border-green-200 cursor-not-allowed';
      case 'rejected':
        return 'bg-red-50 border-red-200 cursor-not-allowed';
      case 'pending':
      default:
        return 'bg-yellow-50 border-yellow-200 cursor-not-allowed';
    }
  };

  return (
    <motion.div
      whileHover={!slot.isBooked ? { scale: 1.02 } : {}}
      whileTap={!slot.isBooked ? { scale: 0.98 } : {}}
      className={`p-4 rounded-lg border-2 transition-all duration-200 ${getCardStyles()}`}
      onClick={!slot.isBooked ? onClick : undefined}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-gray-800">{slot.day}</h3>
        {getStatusIcon()}
      </div>
      
      <div className="flex items-center justify-between">
        <span className="text-lg font-medium text-gray-700">{slot.time}</span>
        <span className={`text-sm px-2 py-1 rounded-full ${
          !slot.isBooked 
            ? 'bg-green-100 text-green-800' 
            : slot.status === 'approved'
            ? 'bg-green-100 text-green-800'
            : slot.status === 'rejected'
            ? 'bg-red-100 text-red-800'
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {getStatusText()}
        </span>
      </div>
      
      {slot.isBooked && slot.bookedBy && (
        <div className="mt-2 pt-2 border-t border-gray-200">
          <p className="text-sm text-gray-600">Booked by: {slot.bookedBy}</p>
          {slot.message && (
            <p className="text-sm text-gray-500 mt-1">"{slot.message}"</p>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default SlotCard;
