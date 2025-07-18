import React from "react";
import { motion } from "framer-motion";
import { useBooking } from "../context/BookingContext";

const MentorDashboard = () => {
  const { bookings, timeSlots, mentors, approveBooking, rejectBooking } =
    useBooking();

  const getSlotInfo = (slotId) => {
    return timeSlots.find((slot) => slot.id === slotId);
  };

  const getMentorInfo = (mentorId) => {
    return mentors.find((mentor) => mentor.id === mentorId);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "approved":
        return "bg-green-100 text-green-800 border-green-200";
      case "rejected":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Mentor Dashboard
        </h2>
        <p className="text-gray-600">Manage your mentorship session requests</p>
      </div>

      {bookings.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">📅</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No bookings yet
          </h3>
          <p className="text-gray-600">
            When students book sessions, they'll appear here for your review.
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {bookings.map((booking) => {
            const slot = getSlotInfo(booking.slotId);
            const mentor = slot ? getMentorInfo(slot.mentorId) : null;
            if (!slot || !mentor) return null;

            return (
              <motion.div
                key={booking.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {booking.userInfo.name}
                      </h3>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                          booking.status
                        )}`}
                      >
                        {booking.status.charAt(0).toUpperCase() +
                          booking.status.slice(1)}
                      </span>
                    </div>

                    <div className="space-y-1 text-sm text-gray-600">
                      <p>
                        👤 Mentor:{" "}
                        <span className="font-medium">{mentor.name}</span>
                      </p>
                      <p>📧 {booking.userInfo.email}</p>
                      <p>
                        📅 {slot.day}, {slot.time} -{" "}
                        {new Date(slot.date).toLocaleDateString()}
                      </p>
                      <p>
                        🕒 Booked on{" "}
                        {new Date(booking.bookedAt).toLocaleDateString()}
                      </p>
                    </div>

                    {booking.userInfo.message && (
                      <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm font-medium text-gray-700 mb-1">
                          Message:
                        </p>
                        <p className="text-sm text-gray-600">
                          {booking.userInfo.message}
                        </p>
                      </div>
                    )}
                  </div>

                  {booking.status === "pending" && (
                    <div className="flex space-x-2">
                      <button
                        onClick={() =>
                          rejectBooking(booking.id, booking.slotId)
                        }
                        className="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 font-medium rounded-lg transition-colors duration-200"
                      >
                        Reject
                      </button>
                      <button
                        onClick={() => approveBooking(booking.id)}
                        className="px-4 py-2 bg-green-100 hover:bg-green-200 text-green-700 font-medium rounded-lg transition-colors duration-200"
                      >
                        Approve
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MentorDashboard;
