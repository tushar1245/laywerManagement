// selectors.js
export const getAvailableTimeSlots = (lawyer) => {
    const availableTimeSlots = [];
    for (const day in lawyer.appointments) {
      const dayAppointments = lawyer.appointments[day];
      // Generate all possible time slots for the day
      const allTimeSlots = generateAllTimeSlots();
      // Filter out already booked time slots
      const availableSlots = allTimeSlots.filter(
        (timeSlot) => !dayAppointments.includes(timeSlot)
      );
      availableTimeSlots.push({ day, slots: availableSlots });
    }
    return availableTimeSlots;
  };
  
  const generateAllTimeSlots = () => {
    // Generate all possible time slots from 9 am to 5 pm with 30-minute intervals
    const timeSlots = [];
    for (let hour = 9; hour <= 16; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const startTime = `${hour}:${minute === 0 ? '00' : minute}`;
        const endTime = `${hour}:${minute + 30}`;
        timeSlots.push(`${startTime} - ${endTime}`);
      }
    }
    return timeSlots;
  };
  