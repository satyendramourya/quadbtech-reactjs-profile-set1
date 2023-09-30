import Login from "./pages/Login";
import Search from "./pages/Search";
import Header from "./components/Header";


import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from 'react-router-dom'
import Jobs from "./pages/Jobs";
import JobDetails from "./components/JobDetails";
import JobApplicationForm from "./pages/JobApplicationForm";
import Success from "./pages/Success";


const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/search',
        element: <Search />
      },
      {
        path: '/jobs',
        element: <Jobs />
      },
      {
        path: '/jobs/:id',
        element: <JobDetails />
      },
      {
        path: '/jobs/:id/apply',
        element: <JobApplicationForm />
      },
      {
        path: '/jobs/success',
        element: <Success />
      }

    ]
  },
])


function App() {
  return (
    <h1 className="font-bodyFont">
      <RouterProvider router={router}>
      </RouterProvider>
    </h1>
  );
}

export default App;
