import { BrowserRouter, Link } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  return (
    <BrowserRouter>
      <nav className="px-6 py-4 border-b bg-white flex gap-6 items-center">
        <h1 className="font-semibold text-lg">Job Scheduler</h1>
        <Link className="text-gray-600 hover:text-black" to="/">Dashboard</Link>
        <Link className="text-gray-600 hover:text-black" to="/create">Create Job</Link>
      </nav>

      <div className="max-w-6xl mx-auto">
        <AppRoutes />
      </div>

    </BrowserRouter>
  );
}
