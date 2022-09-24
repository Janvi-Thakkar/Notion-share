import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainRoute from './routes/MainRoute';
import { createContext,useReducer,useState } from 'react';

function App()
{
   return (
    /* <Store.Provider >*/
    <div className="App">
      <MainRoute/>
            </div>
   /* </Store.Provider>*/
  );
}

export default App;
export const Store = createContext( {} );
