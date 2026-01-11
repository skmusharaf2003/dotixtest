export default function StatusBadge({ status }) {
    const styles = {
        pending: 'bg-yellow-50 text-yellow-700 border-yellow-200',
        running: 'bg-blue-50 text-blue-700 border-blue-200',
        completed: 'bg-green-50 text-green-700 border-green-200',
    };

    const icons = {
        pending: '⏳',
        running: '⚡',
        completed: '✓',
    };

    return (
        <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full border ${styles[status]}`}
        >
            <span>{icons[status]}</span>
            <span>{status.charAt(0).toUpperCase() + status.slice(1)}</span>
        </span>
    );
}
