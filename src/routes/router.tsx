import { createBrowserRouter } from "react-router-dom";

import Root from "./Root"
import NotFoundPage from "./NotFoundPage"
import NavFooterLayout from "../components/NavFooterLayout"

export const router = createBrowserRouter([
   {
     Component: NavFooterLayout,
     children: [
        {
    path: "/",
    Component: Root,
    errorElement: <h1>Error</h1>
  },
  {
    path: "*",
    Component: NotFoundPage
  }
     ]
   }
])