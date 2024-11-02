import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import NotFoundScreen from './Screens/NotFoundScreen';
import SinglePlaceScreen from './Screens/SinglePlaceScreen';


const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path="" element={<App />}>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/place" element={<SinglePlaceScreen />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Route> 
  )
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
