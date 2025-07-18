export const mentors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Senior Software Engineer & Career Mentor",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
    bio: "10+ years in tech, specializing in career guidance and technical mentorship.",
    expertise: ["Career Development", "Technical Interviews", "Resume Review", "Leadership"],
    rating: 4.9,
    sessions: 150,
    price: "$50/hour",
    company: "Google"
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Full Stack Developer & Startup Advisor",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    bio: "Former startup founder with expertise in web development and entrepreneurship.",
    expertise: ["Full Stack Development", "Startup Advice", "Product Management", "React/Node.js"],
    rating: 4.8,
    sessions: 89,
    price: "$45/hour",
    company: "Meta"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "UX Designer & Design Systems Lead",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    bio: "Design leader with 8+ years creating user-centered digital experiences.",
    expertise: ["UX/UI Design", "Design Systems", "User Research", "Figma"],
    rating: 4.9,
    sessions: 120,
    price: "$55/hour",
    company: "Adobe"
  },
  {
    id: 4,
    name: "David Kim",
    title: "Data Scientist & ML Engineer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    bio: "AI/ML expert helping professionals transition into data science careers.",
    expertise: ["Machine Learning", "Data Science", "Python", "Career Transition"],
    rating: 4.7,
    sessions: 95,
    price: "$60/hour",
    company: "Microsoft"
  }
];

export const mockTimeSlots = [
  // Dr. Sarah Johnson's slots
  { id: 1, mentorId: 1, day: 'Monday', time: '9:00 AM', date: '2024-01-15', available: true },
  { id: 2, mentorId: 1, day: 'Monday', time: '2:00 PM', date: '2024-01-15', available: true },
  { id: 3, mentorId: 1, day: 'Wednesday', time: '11:00 AM', date: '2024-01-17', available: true },
  { id: 4, mentorId: 1, day: 'Friday', time: '3:00 PM', date: '2024-01-19', available: true },

  // Michael Chen's slots
  { id: 5, mentorId: 2, day: 'Tuesday', time: '10:00 AM', date: '2024-01-16', available: true },
  { id: 6, mentorId: 2, day: 'Tuesday', time: '2:00 PM', date: '2024-01-16', available: true },
  { id: 7, mentorId: 2, day: 'Thursday', time: '1:00 PM', date: '2024-01-18', available: true },
  { id: 8, mentorId: 2, day: 'Friday', time: '11:00 AM', date: '2024-01-19', available: true },

  // Emily Rodriguez's slots
  { id: 9, mentorId: 3, day: 'Monday', time: '11:00 AM', date: '2024-01-15', available: true },
  { id: 10, mentorId: 3, day: 'Wednesday', time: '2:00 PM', date: '2024-01-17', available: true },
  { id: 11, mentorId: 3, day: 'Thursday', time: '10:00 AM', date: '2024-01-18', available: true },
  { id: 12, mentorId: 3, day: 'Friday', time: '9:00 AM', date: '2024-01-19', available: true },

  // David Kim's slots
  { id: 13, mentorId: 4, day: 'Monday', time: '4:00 PM', date: '2024-01-15', available: true },
  { id: 14, mentorId: 4, day: 'Tuesday', time: '3:00 PM', date: '2024-01-16', available: true },
  { id: 15, mentorId: 4, day: 'Wednesday', time: '9:00 AM', date: '2024-01-17', available: true },
  { id: 16, mentorId: 4, day: 'Thursday', time: '4:00 PM', date: '2024-01-18', available: true },
];

// Keep backward compatibility
export const mentorInfo = mentors[0];
