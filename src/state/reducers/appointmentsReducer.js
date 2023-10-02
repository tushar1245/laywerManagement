
const initialState = {
  lawyers: [
    {
      id: 1,
      name: 'John Doe',
      category: ['Divorce', 'Criminal'],
      appointments: {},
      firm: 'Susan & Jane',
      costPerAppointment: 200,
    },
    {
      id: 2,
      name: 'Jane Smith',
      category: ['Property', 'Corporate', 'Tax'],
      appointments: {},
      firm: 'Miller & Partners',
      costPerAppointment: 250,
    },
    {
      id: 3,
      name: 'Michael Johnson',
      category: ['Family', 'Personal Injury'],
      appointments: {},
      firm: 'Brown Attorneys',
      costPerAppointment: 150,
    },
    {
      id: 4,
      name: 'Emily Davis',
      category: ['Immigration', 'Estate Planning'],
      appointments: {},
      firm: 'Anderson & Co',
      costPerAppointment: 300,
    },
    {
      id: 5,
      name: 'David Clark',
      category: ['Bankruptcy', 'Immigration'],
      appointments: {},
      firm: 'Parker & Smith',
      costPerAppointment: 500,
    },
    {
      id: 6,
      name: 'Emily Clark',
      category: ['Estate Planning', 'Tax'],
      appointments: {},
      firm: 'Parker & Smith',
    costPerAppointment: 400
    },
  {
    id: 7,
    name: 'Benjamin ',
    category: ['Bankruptcy', 'Tax','Personal Injury'],
    appointments: {},
    firm: 'Parker & Smith',
    costPerAppointment: 550,
  },
  {
    id: 8,
    name: 'Sophia ',
    category: ['Divorce', 'Tax'],
    appointments: {},
    firm: 'Parker & Smith',
    costPerAppointment: 340,
  },
  {
    id: 9,
    name: 'Liam',
    category: ['Property', 'Criminal', 'Immigration'],
    appointments: {},
    firm: 'Parker & Smith',
    costPerAppointment: 450,
  },
  {
    id: 10,
    name: 'Jackson',
    category: ['Corporate', 'Tax'],
    appointments: {},
    firm: 'Parker & Smith',
    costPerAppointment: 500,
  },
  {
    id: 11,
    name: 'Olivia',
    category: ['Bankruptcy', 'Property'],
    appointments: {},
    firm: 'Parker & Smith',
    costPerAppointment: 1000,
  },
  {
    id: 12,
    name: 'Ava',
    category: ['Bankruptcy', 'Tax'],
    appointments: {},
    firm: 'Parker & Smith',
    costPerAppointment: 100,
  },
  
  {
    id: 13,
    name: 'Lucas',
    category: ['Personal Injury', 'Criminal'],
    appointments: {},
    firm: 'Susan & Jane',
    costPerAppointment: 300,
  },
  {
    id: 14,
    name: 'Aiden',
    category: ['Bankruptcy', 'Tax'],
    appointments: {},
    firm: 'Susan & Jane',
    costPerAppointment: 200,
  },
  {
    id: 15,
    name: 'Emma',
    category: ['Divorce', 'Family', 'Criminal'],
    appointments: {},
    firm: 'Susan & Jane',
    costPerAppointment: 400,
  },
  {
    id: 16,
    name: 'Isabella',
    category: ['Immigration', 'Corporate'],
    appointments: {},
    firm: 'Susan & Jane',
    costPerAppointment: 250,
  },
  {
    id: 17,
    name: 'Noah',
    category: ['Family', 'Tax'],
    appointments: {},
    firm: 'Susan & Jane',
    costPerAppointment: 220,
  },
  {
    id: 18,
    name: 'Mia',
    category: ['Bankruptcy', 'Estate Planning'],
    appointments: {},
    firm: 'Susan & Jane',
    costPerAppointment: 150,
  },
  {
    id: 19,
    name: 'Ethan',
    category: ['Criminal', 'Tax'],
    appointments: {},
    firm: 'Susan & Jane',
    costPerAppointment: 280,
  },
  {
    id: 20,
    name: 'Charlotte',
    category: ['Bankruptcy', 'Tax', 'Corporate'],
    appointments: {},
    firm: 'Susan & Jane',
    costPerAppointment: 500,
  },
  {
    id: 21,
    name: 'Maya',
    category: ['Bankruptcy', 'Tax', 'Immigration'],
    appointments: {},
    firm: 'Miller & Partners',
    costPerAppointment: 400,
  },{
    id: 22,
    name: 'Elian',
    category: ['Tax', 'Property'],
    appointments: {},
    firm: 'Miller & Partners',
    costPerAppointment: 350,
  },{
    id: 23,
    name: 'Aria',
    category: ['Bankruptcy', 'Estate Planning'],
    appointments: {},
    firm: 'Miller & Partners',
    costPerAppointment: 550,
  },{
    id: 24,
    name: 'Kai',
    category: ['Criminal', 'Tax'],
    appointments: {},
    firm: 'Miller & Partners',
    costPerAppointment: 1000,
  },{
    id: 25,
    name: 'Leilani',
    category: ['Family', 'Personal Injury'],
    appointments: {},
    firm: 'Miller & Partners',
    costPerAppointment: 50,
  },{
    id: 26,
    name: 'Amir',
    category: ['Estate Planning', 'Divorce'],
    appointments: {},
    firm: 'Miller & Partners',
    costPerAppointment: 200,
  },{
    id: 27,
    name: 'Zara',
    category: ['Corporate', 'Tax','Criminal'],
    appointments: {},
    firm: 'Miller & Partners',
    costPerAppointment: 400,
  },{
    id: 28,
    name: 'Jada',
    category: ['Bankruptcy', 'Family'],
    appointments: {},
    firm: 'Miller & Partners',
    costPerAppointment: 350,
  },{
    id: 29,
    name: 'David Clark',
    category: ['Personal Injury', 'Estate Planning'],
    appointments: {},
    firm: 'Brown Attorneys',
    costPerAppointment: 490,
  },{
    id: 30,
    name: 'Aiden',
    category: ['Family', 'Divorce'],
    appointments: {},
    firm: 'Brown Attorneys',
    costPerAppointment: 499,
  },{
    id: 31,
    name: 'Jackson',
    category: ['Family', 'Immigration'],
    appointments: {},
    firm: 'Brown Attorneys',
    costPerAppointment: 299,
  },{
    id: 32,
    name: 'Noah',
    category: ['Bankruptcy', 'Corporate'],
    appointments: {},
    firm: 'Brown Attorneys',
    costPerAppointment: 599,
  },
  {
    id: 33,
    name: 'Ava',
    category: ['Bankruptcy', 'Tax'],
    appointments: {},
    firm: 'Brown Attorneys',
    costPerAppointment: 230,
  },
  {
    id: 34,
    name: 'John',
    category: ['Estate Planning', 'Tax'],
    appointments: {},
    firm: 'Anderson & Co',
    costPerAppointment: 190,
  },
  {
    id: 35,
    name: 'Ada Shelby',
    category: ['Divorce', 'Family'],
    appointments: {},
    firm: 'Anderson & Co',
    costPerAppointment: 300,
  },
  {
    id: 36,
    name: 'AvAlfie Solomonsa',
    category: ['Corporate', 'Personal Injury'],
    appointments: {},
    firm: 'Anderson & Co',
    costPerAppointment: 350,
  },
  {
    id: 37,
    name: 'Polly Gray',
    category: ['Estate Planning', 'Tax'],
    appointments: {},
    firm: 'Anderson & Co',
    costPerAppointment: 400,
  },
  {
    id: 38,
    name: 'Arthur Shelby',
    category: ['Bankruptcy', 'Tax'],
    appointments: {},
    firm: 'Anderson & Co',
    costPerAppointment: 250,
  },
  {
    id: 39,
    name: 'Thomas Shelby',
    category: ['Criminal', 'Estate Planning', 'Immigration'],
    appointments: {},
    firm: 'Anderson & Co',
    costPerAppointment: 150,
  },
  {
    id: 40,
    name: 'Mike Ehrmantraut',
    category: ['Immigration', 'Family'],
    appointments: {},
    firm: 'Better Call Saul',
    costPerAppointment: 1000,
  },
  {
    id: 41,
    name: 'Gustavo Fring',
    category: ['Estate Planning', 'Criminal', 'Corporate'],
    appointments: {},
    firm: 'Better Call Saul',
    costPerAppointment: 350,
  },
  {
    id: 42,
    name: 'Saul Goodman',
    category: ['Criminal', 'Personal Injury','Immigration'],
    appointments: {},
    firm: 'Better Call Saul',
    costPerAppointment: 1000,
  },
  {
    id: 43,
    name: 'Hank Schrader',
    category: ['Criminal', 'Tax','Divorce'],
    appointments: {},
    firm: 'Better Call Saul',
    costPerAppointment: 290,
  },
  {
    id: 44,
    name: 'Jesse Pinkman',
    category: ['Bankruptcy', 'Tax','Family'],
    appointments: {},
    firm: 'Better Call Saul',
    costPerAppointment: 420,
  },

  {
    id: 45,
    name: 'Walter White',
    category: ['immigration', 'Tax','Divorce'],
    appointments: {},
    firm: 'Better Call Saul',
    costPerAppointment: 786,
  }
  ],
}


const appointmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_APPOINTMENT':
      const { lawyerId, day, startTime } = action.payload;
      const updatedLawyers = state.lawyers.map((lawyer) => {
        if (lawyer.id === lawyerId) {
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