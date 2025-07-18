# MentorBook - Mentorship Booking System

A modern, responsive React application for booking mentorship sessions with industry experts.

## 🌟 Features

### ✅ **Core Functionality**
- **Multiple Mentors**: Choose from 4 different expert mentors
- **Available Time Slots**: View weekly slots with real-time availability
- **Slot Booking**: Interactive booking with user information collection
- **Mentor Dashboard**: Complete mentor view for managing bookings
- **Booking Management**: Approve/reject booking requests

### ✅ **Enhanced Design**
- **Professional Images**: High-quality mentor avatars from Unsplash
- **Hero Section**: Beautiful gradient background with feature highlights
- **Modern Icons**: SVG icons throughout the interface
- **Visual Feedback**: Animated elements and status indicators
- **Responsive Design**: Works perfectly on all device sizes

### ✅ **User Experience**
- **Smooth Animations**: Framer Motion transitions and hover effects
- **Interactive Cards**: Mentor selection with visual feedback
- **Status Management**: Real-time booking status updates
- **Professional UI**: Clean, Calendly-inspired design

## 🚀 **Available Mentors**

1. **Dr. Sarah Johnson** - Senior Software Engineer & Career Mentor (Google)
   - Career Development, Technical Interviews, Resume Review, Leadership
   - $50/hour | 4.9⭐ | 150+ sessions

2. **Michael Chen** - Full Stack Developer & Startup Advisor (Meta)
   - Full Stack Development, Startup Advice, Product Management, React/Node.js
   - $45/hour | 4.8⭐ | 89+ sessions

3. **Emily Rodriguez** - UX Designer & Design Systems Lead (Adobe)
   - UX/UI Design, Design Systems, User Research, Figma
   - $55/hour | 4.9⭐ | 120+ sessions

4. **David Kim** - Data Scientist & ML Engineer (Microsoft)
   - Machine Learning, Data Science, Python, Career Transition
   - $60/hour | 4.7⭐ | 95+ sessions

## 🛠️ **Technology Stack**

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS with custom components
- **Animations**: Framer Motion
- **State Management**: React Context API
- **Icons**: Heroicons (SVG)
- **Images**: Unsplash API for professional photos

## 📱 **How to Use**

### Student View:
1. Browse the hero section with feature highlights
2. Select a mentor from the available options
3. Choose an available time slot
4. Fill out the booking form with your details
5. Submit your booking request

### Mentor View:
1. Click "Mentor View" in the header
2. Review all booking requests
3. See student details and messages
4. Approve or reject each request

## 🎨 **Visual Enhancements**

- **Hero Background**: Professional team meeting image
- **Mentor Avatars**: High-quality professional headshots
- **Custom Icons**: Calendar, checkmarks, and status indicators
- **Gradient Backgrounds**: Modern color schemes
- **Animated Elements**: Pulsing availability indicators
- **Professional Cards**: Clean, shadow-enhanced layouts

## 🚀 **Getting Started**

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Visit `http://localhost:5173` to see the application in action!

## 📁 **Project Structure**

```
src/
├── components/
│   ├── MentorCard.jsx       # Individual mentor display
│   ├── SlotCard.jsx         # Time slot cards with icons
│   ├── BookingModal.jsx     # Enhanced booking form
│   ├── MentorDashboard.jsx  # Mentor management view
│   ├── StudentView.jsx      # Student booking interface
│   └── Header.jsx           # Navigation with logo
├── context/
│   └── BookingContext.jsx   # Global state management
├── data/
│   └── mockData.js          # Mentor and slot data
└── index.css                # Tailwind + custom styles
```

## 🎯 **Key Improvements Made**

1. **Multiple Mentors**: Expanded from 1 to 4 expert mentors
2. **Professional Images**: Added high-quality photos throughout
3. **Enhanced UI**: Modern hero section with feature highlights
4. **Visual Feedback**: Improved cards, icons, and animations
5. **Better UX**: Mentor selection flow with slot filtering
6. **Professional Branding**: Custom logo and favicon

The application now provides a complete, professional mentorship booking experience with multiple mentor options and enhanced visual appeal!
