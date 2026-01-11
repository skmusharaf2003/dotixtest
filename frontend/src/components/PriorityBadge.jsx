export default function PriorityBadge({ priority }) {
    const styles = {
        Low: 'bg-gray-100 text-gray-700',
        Medium: 'bg-orange-100 text-orange-700',
        High: 'bg-red-100 text-red-700',
    };

    return (
        <span className={`px-2 py-1 rounded text-xs font-medium ${styles[priority]}`}>
            {priority}
        </span>
    );
}
