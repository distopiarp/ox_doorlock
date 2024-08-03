import { useEffect } from 'react';
import { useSetters } from '../../../../store';
import Layout from '../../Layout';
import ReputationFields from './components/ReputationFields';

const Reputation: React.FC = () => {
  const setReputation = useSetters((setter) => setter.setReputation);

  // Remove empty fields on unmount
  useEffect(() => {
    return () => {
      setReputation((prevState) =>
        prevState.filter((item, index) => item.name !== '' || item.min !== null || index === 0)
      );
    };
  }, []);

  return (
    <Layout setter={() => setReputation((prevState) => [...prevState, { name: '', min: null }])}>
      <ReputationFields />
    </Layout>
  );
};

export default Reputation;
