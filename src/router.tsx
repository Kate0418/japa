import React from "react";
import ReactDOM from "react-dom/client";
import "./tailwind.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Top from "./pages/Top";
import Doc from "./pages/Doc";
import DocType from "./pages/DocType";
import DocAssign from "./pages/DocAssign";
import DocPrint from "./pages/DocPrint";
import DocFunc from "./pages/DocFunc";
import DocIf from "./pages/DocIf";
import DocFor from "./pages/DocFor";
import DocArith from "./pages/DocArith";
import DocComp from "./pages/DocComp";
import DocLogic from "./pages/DocLogic";

const router = createBrowserRouter([
  {
    path: "",
    element: <Top />,
  },
  {
    path: "/doc",
    element: <Outlet />,
    children: [
      {
        path: "",
        element: <Doc />,
      },
      {
        path: "print",
        element: <DocPrint />,
      },
      {
        path: "type",
        element: <DocType />,
      },
      {
        path: "assign",
        element: <DocAssign />,
      },
      {
        path: "func",
        element: <DocFunc />,
      },
      {
        path: "if",
        element: <DocIf />,
      },
      {
        path: "for",
        element: <DocFor />,
      },
      {
        path: "arith",
        element: <DocArith />,
      },
      {
        path: "comp",
        element: <DocComp />,
      },
      {
        path: "logic",
        element: <DocLogic />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
