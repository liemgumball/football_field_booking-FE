
import logo from '/football-icon.svg'


export const Icons = {
	/**
	 * @default
	 * width: 70  height: 70
	 */
	Logo: ({ height, width }: { height?: number; width?: number }) => (
		<img
			className="min-w-[70px]"
			src={logo}
			alt="logo"
			height={height || 70}
			width={width || 70}
		/>
	),

}
