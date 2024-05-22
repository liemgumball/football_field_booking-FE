import authImg from '/author-1.jpg'

const AuthorItem = () => {
	return (
		<div className="flex gap-6">
			<div>
				<img src={authImg} className="rounded-full" alt="author" />
			</div>
			<div>
				<h3 className="mb-3 text-2xl font-semibold"> Douglas D. Hall</h3>
				<p className="text-xl"> CEO & Founder</p>
			</div>
		</div>
	)
}

export default AuthorItem
