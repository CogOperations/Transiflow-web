import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import ScrollToTop from "./components/ScrollToTop";
import CareersPage from "./pages/CareersPage";
import { OverviewPage } from "./pages/admin/OverviewPage";
import { TripsPage } from "./pages/admin/TripsPage";
import { DriversPage } from "./pages/admin/DriversPage";
import { ClientsPage } from "./pages/admin/ClientsPage";
import { WalletPage } from "./pages/admin/WalletPage";
import AdminLayout from "./layouts/AdminLayout";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="admin/*" element={<AdminLayout />}>
          <Route index element={<OverviewPage />} />
          <Route path="trips" element={<TripsPage />} />
          <Route path="drivers" element={<DriversPage />} />
          <Route path="clients" element={<ClientsPage />} />
          <Route path="wallet" element={<WalletPage />} />
        </Route>
      </Routes>
    </>
  );
}
