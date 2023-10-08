interface SuccessProps {
	message: string;
}

const Success: React.FC<SuccessProps> = ({ message }) => {
	return (
		<div className="flex-center w-full md:w-1/2 rounded-2xl shadow mt-3 p-3 bg-green-300 text-white">
			<span>{message}</span>
		</div>
	);
};

export default Success;
