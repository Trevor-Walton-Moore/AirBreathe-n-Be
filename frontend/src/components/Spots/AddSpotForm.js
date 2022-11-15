import SpotForm from './SpotFormModal/SpotForm';

const AddSpotForm = (modal) => {
  const spot = {
    name: '',
    address: '',
    city: '',
    state: '',
    country: '',
    latitude: 0,
    longitude: 0,
    description: '',
    price: 0,
  };

  return (
    <SpotForm spot={spot} formType="Add Spot" modal={modal} />
  );
}

export default AddSpotForm;