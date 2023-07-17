import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home"
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import About from "./pages/About";




const router = createBrowserRouter([
  {
    element:  <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "project",
        element: <Project />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ],
  }
])

function App() {
  return (
    <div className="App w-screen bg-bgBlack ">
      <RouterProvider router={router}/>      
    </div>
  );
}
export default App;
