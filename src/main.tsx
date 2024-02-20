import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import StepOne from './pages/StepOne/StepOne.tsx';
import StepTwo from './pages/StepTwo/StepTwo.tsx';
import StepThree from './pages/StepThree/StepThree.tsx';
import StepFour from './pages/StepFour/StepFour.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/stepone",
    element: <StepOne />,
  },
  {
    path: "/steptwo",
    element: <StepTwo />,
  },
  {
    path: "/stepthree",
    element: <StepThree />,
  },
  {
    path: "/stepfour",
    element: <StepFour />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
