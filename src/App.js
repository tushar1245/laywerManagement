// import React, { useState } from 'react';
// import { Provider } from 'react-redux';
// import store from './state/store';
// import CategorySelector from './components/categorySelector';
// import FirmsList from './components/firmsList';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import LawyerList from './components/lawyerList';

// function App() {

//   const [selectedCategory, setSelectedCategory] = useState('');
  
//   const handleCategorySelect = (category) => {
//     setSelectedCategory(category);
//   };

//   return (
//     <Provider store={store}>
      
//       <div className="App">
//         <h1>Lawyer Appointment Management</h1>
       

//         <CategorySelector onSelectCategory={handleCategorySelect} />
      
//         {selectedCategory && <FirmsList selectedCategory={selectedCategory} />}
        
//       </div>
//     </Provider>
//   );
// }

// export default App;


// App.js
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './state/store';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LawyerList from './components/lawyerList';
import Home from './components/home';

function App() {


  return (
    <Provider store={store}>
      <Router>
          
          <Routes>
            <Route exact path='/' element = {<Home/>}>

            </Route>
            <Route exact path="/lawyers/:firm/:category" element={<LawyerList />} />
            

            {/* <Route
              path="/lawyers/:firm/:category"
              element={({ params }) => (
                <LawyerList firm={params.firm} selectedCategory={params.category} />
              )}
            /> */}
          </Routes>
        
      </Router>
    </Provider>
  );
}

export default App;
