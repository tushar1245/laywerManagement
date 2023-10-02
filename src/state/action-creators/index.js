export const bookAppointment = (appointmentData) => {
    return {
        type: 'BOOK_APPOINTMENT',
        payload: appointmentData,
    };
};
  