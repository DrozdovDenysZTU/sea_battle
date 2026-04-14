import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import CookiePopup from './components/cookiePopup/CookiePopup';

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <CookiePopup />
    </>
  );
}
