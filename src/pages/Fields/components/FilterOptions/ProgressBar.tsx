const ProgressBar = () => {
	return (
		<div className="border-b-2 border-solid py-4">
			<p className=" mb-2 text-lg capitalize">distance</p>
			<input
				className="w-full"
				type="range"
				min="40"
				max="500"
				step="5"
			></input>
			<div className="flex justify-between font-semibold">
				<p></p>
				<p>2000</p>
			</div>
		</div>
	)
}

export default ProgressBar
