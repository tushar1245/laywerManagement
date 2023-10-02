import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReactModal from 'react-modal';
import { bookAppointment } from '../state/action-creators';
//import { Button } from '@mui/material';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

ReactModal.setAppElement('#mymodal');



function LawyerList() {
  const lawyers = useSelector((state) => state.lawyers);
  const {firm, category} = useParams();

  const [selectedLawyer, setSelectedLaywer] = useState(null);

  //console.log('LawyerList component rendered with firm:', firm, 'category:', selectedCategory);
  const filteredLawyers = lawyers.filter(
    (lawyer) =>
      lawyer.firm === firm && lawyer.category.includes(category)
  );

  //console.log(lawyers);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');


  const dispatch = useDispatch();

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleSubmit = (day, startTime) => {
    
    // console.log('Selected Date:', day);
    // console.log('Selected Time:', startTime);
  
    const lawyer = lawyers.find((l) => l.id === selectedLawyer);
   // console.log(lawyer);
  
    

    let isPresent = false;
    Object.keys(lawyer.appointments).forEach(key => {
      //console.log(key,lawyer.appointments[key])

      if(day === key && lawyer.appointments[key].includes(startTime)){
        isPresent = true;
      }
    })
  
    if(isPresent) {
        //console.log('aaya');
        window.alert('This time slot is already taken. Please choose a different one.');
    }else {
        if(day === '' || startTime === ''){
            window.alert('Date or Time cannot be empty');
        }else{
            dispatch(bookAppointment(selectedLawyer, day, startTime));
            window.alert('Booking Successfull');
        }
    }
  
    setSelectedLaywer(null);

  };
  



  return (  
    
    
    <div>

        <h2 className='text-2xl mt-5 mx-4'>Lawyers from {firm} in {category} category:</h2>
     

        <div className="grid grid-cols-1 md:grid-cols-2 mt-5 lg:grid-cols-3 gap-4">
            {filteredLawyers.map((lawyer) => (
                <div
                key={lawyer.id}
                className="bg-gray-200 flex flex-col items-center rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300"
                >
                <h3 className="text-gray-600 hover:text-blue-600 text-lg font-semibold">
                    {lawyer.name}
                </h3>
                <button
                    onClick={() => setSelectedLaywer(lawyer.id)}
                    className="mt-2 bg-blue-500 hover:bg-blue-700 mx-3 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                >
                    Set Appointment
                </button>
                </div>
            ))}
        </div>
   

      <ReactModal
        isOpen={selectedLawyer !== null}
        
        onRequestClose={()=>{
            setSelectedLaywer(null);
        }}
        style={customStyles}
        contentLabel="Example Modal"
      >
        
        <div className="bg-gray-200 p-4 text-lg font-semibold">
            Book your appointment here
        </div>
        <h2 className="text-xl font-semibold my-4">Select Date and Time</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold">
                Date:
                </label>
                <input
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
                />
            </div>

        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold">
            Time:
            </label>
            <select
                value={selectedTime}
                onChange={handleTimeChange}
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
            >
            <option value="">Select a time</option>
            {Array.from({ length: 16 }).map((_, index) => {
                const startHour = Math.floor(index / 2) + 9;
                const startMinute = index % 2 === 0 ? '00' : '30';
                const endHour = Math.floor((index + 1) / 2) + 9;
                const endMinute = (index + 1) % 2 === 0 ? '00' : '30';
                const startTime = `${startHour}:${startMinute}`;
                const endTime = `${endHour}:${endMinute}`;
                return (
                    <option key={startTime} value={startTime}>
                    {`${startTime} - ${endTime}`}
                    </option>
                );
            })}
            </select>
            </div>
            <div className="flex justify-center">
                <button
                type="submit"
                onClick={() => handleSubmit(selectedDate, selectedTime)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                >
                Submit
                </button>
            </div>
        </form>
      </ReactModal>    



    </div>
  );
}

export default LawyerList;
