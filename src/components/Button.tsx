function Button({ label, onClick, color = 'blue', size =
    'medium' }: {
        label?: string;
        onClick?: () => void;
        color?: string;
        size?: string;
    }) {
    return (
        <button
            color='#2196F3'
            className={`btn btn-${color} btn-${size}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
}
export default Button;