import Home from "../pages/HomePage";
import SignUp from "../pages/Signup";
import Login from "../pages/login";

export const router = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

// children: [
//     { path: "/", element: <Login /> },
//     { path: "signup", element: <SignUp /> },
// ],
