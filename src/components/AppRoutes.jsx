import { createHashRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import InvitationPage from "../pages/invitation";
import EventPhotoGallery from "../pages/eventphotogallery";

export const AppRoutes = createHashRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <InvitationPage />,
      },
      {
        path: "/:category/gallery",
        element: <EventPhotoGallery />,
      },
    ],
  },
]);
