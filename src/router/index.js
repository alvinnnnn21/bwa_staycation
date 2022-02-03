import React from 'react';
import { 
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import {
    Home
} from '../pages';

const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home location="/" />}/>
      </Routes>
    </BrowserRouter>
  )
};

export default Router;
