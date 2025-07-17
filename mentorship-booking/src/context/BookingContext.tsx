import React, { createContext, useContext, useState, ReactNode } from 'react';
import { TimeSlot } from '../types';
import { mockTimeSlots } from '../data/mockSlots';

interface BookingContextType {
  slots: TimeSlot[];
  bookSlot: (slotId: string, userName: string, message: string) => void;
  approveBooking: (slotId: string) => void;
  rejectBooking: (slotId: string) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};

interface BookingProviderProps {
  children: ReactNode;
}

export const BookingProvider: React.FC<BookingProviderProps> = ({ children }) => {
  const [slots, setSlots] = useState<TimeSlot[]>(mockTimeSlots);

  const bookSlot = (slotId: string, userName: string, message: string) => {
    setSlots(prevSlots =>
      prevSlots.map(slot =>
        slot.id === slotId
          ? { ...slot, isBooked: true, bookedBy: userName, message, status: 'pending' }
          : slot
      )
    );
  };

  const approveBooking = (slotId: string) => {
    setSlots(prevSlots =>
      prevSlots.map(slot =>
        slot.id === slotId ? { ...slot, status: 'approved' } : slot
      )
    );
  };

  const rejectBooking = (slotId: string) => {
    setSlots(prevSlots =>
      prevSlots.map(slot =>
        slot.id === slotId
          ? { ...slot, isBooked: false, bookedBy: undefined, message: undefined, status: undefined }
          : slot
      )
    );
  };

  return (
    <BookingContext.Provider value={{ slots, bookSlot, approveBooking, rejectBooking }}>
      {children}
    </BookingContext.Provider>
  );
};
