import { Navigate, createBrowserRouter } from 'react-router-dom';
import { NESTEDROUTES, ROUTES } from '../routes/routes';
import { HomePage } from '../../pages/HomePage/HomePage';
import { AboutPage } from '../../pages/AboutPage/AboutPage';
import { BlogPage } from '../../pages/BlogPage/BlogPage';
import { NotFoundPage } from '../../pages/NotFoundPage/NotFoundPage';
import { LayoutPage } from '../../components/LayoutPage/LayoutPage';
import { SinglePage } from '../../pages/SinglePage/SinglePage';
import { CreateTodoPage } from '../../pages/CreateTodoPage/CreatePostPage';
import { EditTodoPage } from '../../pages/EditTodoPage/EditTodoPage';
import { RequireAuth } from '../../hoc/RequireAuth';
import { LoginPage } from '../../pages/LoginPage/LoginPage';
import { ContactsPage } from '../../pages/ContactsPage/ContactsPage';
import { TeamPage } from '../../pages/TeamPage/TeamPage';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <LayoutPage />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.ABOUT,
        element: <AboutPage />,
        children: [
          {
            path: NESTEDROUTES.CONTACTS,
            element: <ContactsPage />,
          },
          {
            path: NESTEDROUTES.TEAM,
            element: <TeamPage />,
          },
        ],
      },
      {
        path: `${ROUTES.ABOUT}-us`,
        element: <Navigate to='/about' replace />,
      },
      {
        path: ROUTES.BLOG,
        element: <BlogPage />,
      },
      {
        path: `${ROUTES.BLOG}/:id`,
        element: <SinglePage />,
      },
      {
        path: `${ROUTES.BLOG}/:id/edit`,
        element: <EditTodoPage />,
      },
      {
        path: `${ROUTES.BLOG}/new`,
        element: (
          <RequireAuth>
            <CreateTodoPage />
          </RequireAuth>
        ),
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
]);
