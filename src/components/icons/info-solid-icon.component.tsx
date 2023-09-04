export const InfoSolidIcon = ({ size = 24, className = "h-5 w-5" }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			viewBox="0 0 20 20"
			fill="currentColor"
			style={{ width: `${size}px`, height: `${size}px` }}
		>
			<path
				d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 9a1 1 0 0 0 0 2v3a1 1 0 0 0 1 1h1a1 1 0 1 0 0-2v-3a1 1 0 0 0-1-1H9z"
				fillRule="evenodd"
				clipRule="evenodd"
			/>
		</svg>
	);
};
