import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import CreateJob from '../pages/CreateJob';
import JobDetail from '../pages/JobDetail';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/create" element={<CreateJob />} />
            <Route path="/jobs/:id" element={<JobDetail />} />
        </Routes>
    );
}
