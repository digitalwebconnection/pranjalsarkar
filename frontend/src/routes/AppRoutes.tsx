import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import { AdminPage } from '../admin/AdminPage';

/**
 * Centralised route definitions.
 */
export default function AppRoutes() {
  return (
    <Routes>
      {/* Main website */}
      <Route path="/" element={<HomePage />} />

      {/* Admin Panel — standalone page (no navbar/footer) */}
      <Route path="/admin" element={<AdminPage />} />

      {/* 404 catch-all */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
