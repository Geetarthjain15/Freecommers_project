import React from "react";
import { motion } from "framer-motion";

const Header = ({ currentView, onViewChange }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-lg">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-gray-900">MentorBook</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1"
          >
            <button
              onClick={() => onViewChange("student")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                currentView === "student"
                  ? "bg-white text-primary-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Student View
            </button>
            <button
              onClick={() => onViewChange("mentor")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                currentView === "mentor"
                  ? "bg-white text-primary-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Mentor View
            </button>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
