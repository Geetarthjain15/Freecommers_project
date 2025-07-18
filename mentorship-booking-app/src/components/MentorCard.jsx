import React from 'react';
import { motion } from 'framer-motion';

const MentorCard = ({ mentor, onSelectMentor, isSelected }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-yellow-400">★</span>
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-yellow-400">☆</span>
      );
    }
    
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-gray-300">★</span>
      );
    }
    
    return stars;
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        card cursor-pointer transition-all duration-200 
        ${isSelected 
          ? 'ring-2 ring-primary-500 border-primary-300 bg-primary-50' 
          : 'hover:shadow-lg border-gray-200 hover:border-primary-300'
        }
      `}
      onClick={() => onSelectMentor(mentor)}
    >
      <div className="flex items-start space-x-4">
        <div className="relative">
          <img
            src={mentor.avatar}
            alt={mentor.name}
            className="w-16 h-16 rounded-full object-cover"
            onError={(e) => {
              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(mentor.name)}&background=3b82f6&color=fff&size=200`;
            }}
          />
          <div className="absolute -bottom-1 -right-1 bg-green-400 w-5 h-5 rounded-full border-2 border-white"></div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-lg text-gray-900 truncate">
                {mentor.name}
              </h3>
              <p className="text-primary-600 font-medium text-sm">
                {mentor.title}
              </p>
              <p className="text-gray-500 text-xs mt-1">
                {mentor.company}
              </p>
            </div>
            <div className="text-right">
              <p className="font-bold text-lg text-gray-900">
                {mentor.price}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 mt-2">
            <div className="flex items-center">
              {renderStars(mentor.rating)}
            </div>
            <span className="text-sm font-medium text-gray-700">
              {mentor.rating}
            </span>
            <span className="text-sm text-gray-500">
              ({mentor.sessions} sessions)
            </span>
          </div>
          
          <p className="text-gray-600 text-sm mt-2 line-clamp-2">
            {mentor.bio}
          </p>
          
          <div className="flex flex-wrap gap-1 mt-3">
            {mentor.expertise.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
              >
                {skill}
              </span>
            ))}
            {mentor.expertise.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                +{mentor.expertise.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
      
      {isSelected && (
        <div className="mt-4 pt-4 border-t border-primary-200">
          <p className="text-sm text-primary-700 font-medium">
            ✓ Selected - Choose a time slot below
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default MentorCard;
