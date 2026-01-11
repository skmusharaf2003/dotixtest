<div className="min-h-screen bg-gray-50 p-6">
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-xl font-bold mb-4">Create New Job</h1>

        <input
            className="border rounded p-2 w-full mb-4"
            placeholder="Task Name"
            onChange={e => setForm({ ...form, taskName: e.target.value })}
        />

        <textarea
            className="border rounded p-2 w-full mb-4 font-mono text-sm"
            rows={5}
            placeholder='{"email":"user@test.com"}'
            onChange={e => setForm({ ...form, payload: e.target.value })}
        />

        <select
            className="border rounded p-2 w-full mb-6"
            onChange={e => setForm({ ...form, priority: e.target.value })}
        >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
        </select>

        <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
            Create Job
        </button>
    </div>
</div>
