import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main/Main";
import Reg from "./components/Reg/Reg";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Course from "./components/Page/Course";
import Category from "./components/Page/Category";
import Summary from "./components/Page/Summary";
import Privetroute from "./components/Privetroute/Privetroute";
import Home from "./components/Home/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/reg",
          element: <Reg></Reg>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/profile",
          element: <Profile></Profile>,
        },
        {
          path: "/course",
          element: <Course></Course>,
        },

        {
          path: "/category/:id",
          element: <Category></Category>,
          loader: ({ params }) =>
            fetch(
              `https://edu-withmadness-server.vercel.app/category/${params.id}`
            ),
        },
        {
          path: "/summary/:id",
          element: (
            <Privetroute>
              <Summary></Summary>
            </Privetroute>
          ),
          loader: ({ params }) =>
            fetch(
              `https://edu-withmadness-server.vercel.app/category/${params.id}`
            ),
        },
      ],
    },
    {
      path: "*",
      element: (
        <img
          className="flex w-full justify-center items-center"
          src="https://cdn.presslabs.com/wp-content/uploads/2018/03/custom-error-pages.png"
          alt=""
        />
      ),
    },
  ]);
  return (
    <div className="background">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
