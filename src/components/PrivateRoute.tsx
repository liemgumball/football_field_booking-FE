import { PATHS } from '@/constants/navigation'
import useAuthStore from '@/stores/auth'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
	const user = useAuthStore((set) => set.user)

	return user ? <Outlet /> : <Navigate to={PATHS.LOGIN} />
}

export default PrivateRoute
