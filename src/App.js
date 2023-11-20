import React from 'react';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import { useReducer } from 'react';
import reducer, { initialState } from './reducers';


function App() {

  
  const [state , dispatchState] = useReducer ( reducer,initialState);

  console.log(state);

// import { useEffect, useReducer, useState } from "react";

// const studentReducer = (state, action) => {
//   // if (action.type === "add_student") {
//   //   return [...state, action.payload];
//   // } else if (action.type === "delete_student") {
//   //   return state.filter((s) => s.id !== action.payload);
//   // } else {
//   //   return state;
//   // }

//   switch (action.type) {
//     case "add_student":
//       return [...state, action.payload];
//       break;

//     case "delete_student":
//       return state.filter((s) => s.id !== action.payload);
//       break;

//     case "edit_student":
//       return state.map((s) => {
//         if (s.id === action.payload.id) {
//           return action.payload;
//         }
//         return s;
//       });
//       break;

//     default:
//       return state;
//       break;
//   }
// };

// const StudentsPage = () => {
//   const [students, dispatchStudents] = useReducer(studentReducer, [
//     { id: 1, name: "ali" },
//     { id: 2, name: "Tarık" },
//     { id: 3, name: "Hande" },
//     { id: 4, name: "Burak" },
//     { id: 5, name: "Yeliz" },
//   ]);
//   const [newStudent, setNewStudent] = useState({
//     id: null,
//     name: "",
//   });

//   useEffect(() => {
//     console.log("students:", students);
//   }, [students]);


  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={0} />
            <div className="row details">
              <span id="operation"><b>Operation:</b> X</span>
              <span id="memory"><b>Memory:</b> 0</span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} />
              <CalcButton value={"MR"} />
              <CalcButton value={"MC"} />
            </div>

            <div className="row">
              <CalcButton value={1} />
              <CalcButton value={2} />
              <CalcButton value={3} />
            </div>

            <div className="row">
              <CalcButton value={4} />
              <CalcButton value={5} />
              <CalcButton value={6} />
            </div>

            <div className="row">
              <CalcButton value={7} />
              <CalcButton value={8} />
              <CalcButton value={9} />
            </div>

            <div className="row">
              <CalcButton value={"+"} />
              <CalcButton value={"*"} />
              <CalcButton value={"-"} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
