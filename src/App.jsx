import * as React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './common/router/router';

export const App = () => <RouterProvider router={router} />;
