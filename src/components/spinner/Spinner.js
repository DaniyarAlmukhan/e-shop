import { SpinnerOverlay, SpinnerContainer } from './styles';

const Spinner = () => {
  console.log('spinnner');
  
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  )
};

export default Spinner;