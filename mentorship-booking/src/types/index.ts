export interface TimeSlot {
  id: string;
  day: string;
  time: string;
  isBooked: boolean;
  bookedBy?: string;
  message?: string;
  status?: 'pending' | 'approved' | 'rejected';
}

export interface BookingRequest {
  slotId: string;
  userName: string;
  message: string;
}
