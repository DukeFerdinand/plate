import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { TableApp } from './TableApp';

const router = createBrowserRouter([
  {
    path: '/table/:variant',
    element: <TableApp />,
  },
]);

const rootElement = document.querySelector('#root');

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  rootElement
);
