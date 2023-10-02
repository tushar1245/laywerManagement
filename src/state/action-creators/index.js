

export const bookAppointment = (lawyerId, day, startTime) => {
    return {
      type: 'ADD_APPOINTMENT',
      payload: { lawyerId, day, startTime },
    };
};