const initialState = {
    lawyers: [
      {
        id: 1,
        name: 'John Doe',
        category: ['Divorce', 'Criminal'],
        appointments: [],
        firm: 'Susan & Jane',
        costPerAppointment: 200,
      },
      {
        id: 2,
        name: 'Jane Smith',
        category: ['Property', 'Corporate', 'Tax'],
        appointments: [],
        firm: 'Miller & Partners',
        costPerAppointment: 250,
      },
      {
        id: 3,
        name: 'Michael Johnson',
        category: ['Family', 'Personal Injury'],
        appointments: [],
        firm: 'Brown Attorneys',
        costPerAppointment: 150,
      },
      {
        id: 4,
        name: 'Emily Davis',
        category: ['Immigration', 'Estate Planning'],
        appointments: [],
        firm: 'Anderson & Co',
        costPerAppointment: 300,
      },
      {
        id: 5,
        name: 'David Clark',
        category: ['Bankruptcy', 'Tax'],
        appointments: [],
        firm: 'Parker & Smith',
        costPerAppointment: 500,
      },
      
    ],
};


// const appointmentsReducer = (state = initialState, action) => {
    
//     if(action.type === 'BOOK_APPOINTMENT'){
//         return {
//             ...state,
//             appointments: [...state.appointments, action.payload],
//         };
//     }else{
//         return state;
//     }
    
// };
  

// const appointmentsReducer = (state = initialState, action) => {
//   if (action.type === 'BOOK_APPOINTMENT') {
    
//     const lawyerId = action.payload.lawyerId;
//     const updatedLawyers = state.lawyers.map((lawyer) => {
//     if (lawyer.id === lawyerId) {
      
//         return {
//           ...lawyer,
//           appointments: [...lawyer.appointments, action.payload],
//         };
//       }
//       return lawyer;
//     });

//     return {
//       ...state,
//       lawyers: updatedLawyers,
//     };
//   } else {
//     return state;
//   }
// };


const appointmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_APPOINTMENT':
      const { lawyerId, day, startTime } = action.payload;
      const updatedLawyers = state.lawyers.map((lawyer) => {
        if (lawyer.id === lawyerId) {
          // Check if the appointment already exists
          if (!lawyer.appointments[day]) {
            lawyer.appointments[day] = [];
          }
          if (!lawyer.appointments[day].includes(startTime)) {
            lawyer.appointments[day].push(startTime);
          }
        }
        return lawyer;
      });

      return {
        ...state,
        lawyers: updatedLawyers,
      };

    default:
      return state;
  }
};

export default appointmentsReducer;