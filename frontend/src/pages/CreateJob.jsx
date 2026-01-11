import { useState } from 'react';
import { createJob } from '../api/jobsApi';
import { useNavigate } from 'react-router-dom';

export default function CreateJob() {
    const [form, setForm] = useState({
        taskName: '',
        payload: '',
        priority: 'Low'
    });
    const navigate = useNavigate();

    const submit = async () => {
        await createJob({
            ...form,
            payload: JSON.parse(form.payload)
        });
        navigate('/');
    };

    return (
        <div className="p-6 max-w-xl">
            <h1 className="text-xl font-bold mb-4">Create Job</h1>

            <input
                className="border p-2 w-full mb-3"
                placeholder="Task Name"
                onChange={e => setForm({ ...form, taskName: e.target.value })}
            />

            <textarea
                className="border p-2 w-full mb-3"
                rows={4}
                placeholder='{"key":"value"}'
                onChange={e => setForm({ ...form, payload: e.target.value })}
            />

            <select
                className="border p-2 w-full mb-3"
                onChange={e => setForm({ ...form, priority: e.target.value })}
            >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>

            <button
                onClick={submit}
                className="bg-black text-white px-4 py-2 rounded"
            >
                Create Job
            </button>
        </div>
    );
}
