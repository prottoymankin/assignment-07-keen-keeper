import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { router } from "./routes/router.jsx";
import { TimelineContextProvider } from "./context/TimelineContext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <TimelineContextProvider>
    <RouterProvider router={router} />

    <ToastContainer 
      position="top-center"
      autoClose={2000}
      theme="dark"
    />
  </TimelineContextProvider>
);
