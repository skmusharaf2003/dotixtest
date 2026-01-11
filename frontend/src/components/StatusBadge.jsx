export default function StatusBadge({ status }) {
    const styles = {
        pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
        running: 'bg-blue-100 text-blue-800 border-blue-200',
        completed: 'bg-green-100 text-green-800 border-green-200',
    };

    return (
        <span
            className={`px-3 py-1 text-xs font-medium rounded-full border ${styles[status]}`}
        >
            {status.toUpperCase()}
        </span>
    );
}
