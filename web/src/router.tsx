import {createBrowserRouter} from "react-router-dom";
import PublicLayout from "@/layouts/Public.tsx";
import Landing from "./views/Landing.tsx";
import About from "@/views/About.tsx";


const router=createBrowserRouter([{
  path: "/",
  element: <PublicLayout/>,
  children: [
    {
      path: "/",
      element:<Landing/>,
      // async action() {
      //   const Landing=(await import("./views/Landing.tsx")).default;
      //   return <Landing />;
      // }
    },
    {
      path: "about",
      element:<About/>,
      // async action() {
      //   const About=(await import("./views/About.tsx")).default;
      //   return <About />;
      // }
    }
  ]
}]);

export default router;