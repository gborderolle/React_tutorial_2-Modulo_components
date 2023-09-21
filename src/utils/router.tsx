import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ComponentsPage from '../pages/Components';
import ErrorPage from '../pages/Error';
import EventsPage from '../pages/Events';
import RootLayout from '../pages/Root';
import StatesPage from '../pages/States';
import LandingPage from '../pages/Landing';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: 'root',
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'home', element: <LandingPage /> },
      { path: 'components', element: <ComponentsPage /> },
      { path: 'events', element: <EventsPage /> },
      { path: 'states', element: <StatesPage /> },
    ],
  },
]);
