import { Outlet, Navigate } from 'react-router-dom';
import useAppSelector from '../../hooks/useAppSelector';

const ProtectOnboardingRoutes = () => {
  const { user } = useAppSelector((state) => state.user);

  return <>{!user ? <Outlet /> : <Navigate to={'/'} replace={true} />}</>;
};

export default ProtectOnboardingRoutes;
