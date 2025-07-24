import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import BeforeMainContent from "./components/BeforeMainContent";
import ResturantList from "./components/ResturantList";
import RestaurantMenu from "./components/RestaurantMenu";
import About from "./pages/About";
import Offers from "./pages/Offers";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: (
          <>
            <BeforeMainContent />
            <ResturantList />
          </>
        ),
      },
      {
        path: "restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "offers",
        element: <Offers />,
      },
    ],
  },
]);

export default appRouter;