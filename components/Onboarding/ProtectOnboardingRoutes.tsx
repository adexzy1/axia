import useAppSelector from '../../hooks/useAppSelector';

const ProtectOnboardingRoutes = () => {
  const { user } = useAppSelector((state) => state.user);

  return null;
};

export default ProtectOnboardingRoutes;
