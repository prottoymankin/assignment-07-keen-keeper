import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import TimelinePage from "../pages/TimelinePage";
import StatsPage from "../pages/StatsPage";
import NotFoundPage from "../pages/NotFoundPage";
import FriendDetailsPage from "../pages/FriendDetailsPage";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'timeline', Component: TimelinePage },
      { path: 'stats', Component: StatsPage },
      { path: 'friend-details/:id', Component: FriendDetailsPage }
    ],
    errorElement: <NotFoundPage />
  }
])