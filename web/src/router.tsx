import {createBrowserRouter} from "react-router-dom";
import PublicLayout from "@/layouts/Public.tsx";
import Landing from "./views/Landing.tsx";

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
    }
  ]
}]);

export default router;