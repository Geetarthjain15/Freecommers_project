import React, { createContext, useContext, useReducer } from "react";
import { mockTimeSlots, mentors } from "../data/mockData";

const BookingContext = createContext();

const bookingReducer = (state, action) => {
  switch (action.type) {
    case "BOOK_SLOT":
      return {
        ...state,
        timeSlots: state.timeSlots.map((slot) =>
          slot.id === action.payload.slotId
            ? { ...slot, available: false, bookedBy: action.payload.userInfo }
            : slot
        ),
        bookings: [
          ...state.bookings,
          {
            id: Date.now(),
            slotId: action.payload.slotId,
            userInfo: action.payload.userInfo,
            status: "pending",
            bookedAt: new Date().toISOString(),
          },
        ],
      };

    case "APPROVE_BOOKING":
      return {
        ...state,
        bookings: state.bookings.map((booking) =>
          booking.id === action.payload.bookingId
            ? { ...booking, status: "approved" }
            : booking
        ),
      };

    case "REJECT_BOOKING":
      return {
        ...state,
        bookings: state.bookings.map((booking) =>
          booking.id === action.payload.bookingId
            ? { ...booking, status: "rejected" }
            : booking
        ),
        timeSlots: state.timeSlots.map((slot) =>
          slot.id === action.payload.slotId
            ? { ...slot, available: true, bookedBy: null }
            : slot
        ),
      };

    case "SELECT_MENTOR":
      return {
        ...state,
        selectedMentor: action.payload,
      };

    default:
      return state;
  }
};

const initialState = {
  timeSlots: mockTimeSlots,
  mentors: mentors,
  bookings: [],
  currentView: "student", // 'student' or 'mentor'
  selectedMentor: null,
};

export const BookingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookingReducer, initialState);

  const bookSlot = (slotId, userInfo) => {
    dispatch({
      type: "BOOK_SLOT",
      payload: { slotId, userInfo },
    });
  };

  const approveBooking = (bookingId) => {
    dispatch({
      type: "APPROVE_BOOKING",
      payload: { bookingId },
    });
  };

  const rejectBooking = (bookingId, slotId) => {
    dispatch({
      type: "REJECT_BOOKING",
      payload: { bookingId, slotId },
    });
  };

  const switchView = (view) => {
    dispatch({
      type: "SWITCH_VIEW",
      payload: view,
    });
  };

  const selectMentor = (mentor) => {
    dispatch({
      type: "SELECT_MENTOR",
      payload: mentor,
    });
  };

  return (
    <BookingContext.Provider
      value={{
        ...state,
        bookSlot,
        approveBooking,
        rejectBooking,
        switchView,
        selectMentor,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
};
