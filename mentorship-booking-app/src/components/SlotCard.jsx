import React from "react";
import { motion } from "framer-motion";

const SlotCard = ({ slot, onBook, isBooked }) => {
  const handleClick = () => {
    if (slot.available && !isBooked) {
      onBook(slot);
    }
  };

  return (
    <motion.div
      whileHover={slot.available ? { scale: 1.02 } : {}}
      whileTap={slot.available ? { scale: 0.98 } : {}}
      className={`
        card cursor-pointer transition-all duration-200 
        ${
          slot.available
            ? "hover:shadow-md border-gray-200 hover:border-primary-300"
            : "bg-gray-100 border-gray-300 cursor-not-allowed opacity-60"
        }
      `}
      onClick={handleClick}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center">
            <svg
              className="w-6 h-6 text-primary-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900">{slot.day}</h3>
            <p className="text-primary-600 font-medium text-lg">{slot.time}</p>
            <p className="text-sm text-gray-500 mt-1">
              {new Date(slot.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
        </div>

        <div className="text-right">
          {slot.available ? (
            <div className="flex flex-col items-end space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-600">
                  Available
                </span>
              </div>
              <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                Book Now
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <span className="text-sm font-medium text-red-600">Booked</span>
            </div>
          )}
        </div>
      </div>

      {slot.available && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-600">Click to book this session</p>
        </div>
      )}
    </motion.div>
  );
};

export default SlotCard;
