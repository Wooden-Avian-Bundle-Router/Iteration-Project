import React from "react";
// import Expenses from "./component/Expenses";
import Header from "./component/Header";
import InputContainer from "./container/InputContainer";
import DatabaseContext from './Context/context';

/*
import React from 'react';

export const UserContext = React.createContext();

export default function App() {
  return (
    <UserContext.Provider value="Reed">
      <User />
    </UserContext.Provider>
  )
}

function User() {
  return (
    <UserContext.Consumer>
      {value => <h1>{value}</h1>} 
      {prints: Reed}
      </UserContext.Consumer>
      )
    }
*/ 

const App = () => {
  return (
    <div>
      <Header />
      <MainContainer /> 
        <InputContainer />
        <ExpenseContainer />
      <MainContainer />
    </div>
  );
};

export default App;
