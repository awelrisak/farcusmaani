import { createBrowserRouter } from "react-router-dom";

import Root from "./Root"
import NotFoundPage from "./NotFoundPage"
import NavFooterLayout from "../components/NavFooterLayout"
import ComingSoonPage from "./ComingSoonPage"

export const router = createBrowserRouter([
   {
     Component: NavFooterLayout,
     children: [
        {
    path: "/",
    Component: Root,
    errorElement: <h1>Error has occured</h1>
  },
   {
    path: "baro",
    Component: ComingSoonPage,
    errorElement: <h1>Error has occured</h1>
  },
  {
    path: "blogs",
    Component: ComingSoonPage,
    errorElement: <h1>Error has occured</h1>
  },
   {
    path: "about",
    Component: ComingSoonPage,
    errorElement: <h1>Error has occured</h1>
  },
  {
    path: "*",
    Component: NotFoundPage
  }
     ]
   }
])