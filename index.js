import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import { appRouter } from './Components/App';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router= {appRouter} />);