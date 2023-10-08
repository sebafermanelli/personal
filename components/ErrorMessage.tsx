interface ErrorProps {
	message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
	return (
		<div className="flex-center w-full md:w-1/2 rounded-2xl shadow mt-3 p-3 bg-red-400 text-white">
			<span>{message}</span>
		</div>
	);
};

export default Error;
