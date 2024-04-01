import useAuthStore from '@/stores/auth'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
	const user = useAuthStore((set) => set.user)

	return user ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute
