interface ButtonProps {
	text: string;
	onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
	return (
		<button onClick={onClick} className="btn-black">
			{text}
		</button>
	);
};

export default Button;
