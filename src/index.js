import "./index.css";
import ReactDOM from "react-dom/client";

// 1) Import router functionality from react-router-dom:
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// 2) Import the routes object:
import routes from "./routes";

// 3) Define a router variable and use the createBrowserRouter method to pass the imported routes to the router:
const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root"));

// 4) Inside the render method, render the RouterProvider component with the router object as a prop:
root.render(<RouterProvider router={router} />);
