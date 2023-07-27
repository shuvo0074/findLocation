import { useEffect } from 'react';
import useAddressViewModel from '../view-models/useAddressViewModel';


const useHomeAddressController = () => {
  const { currentVal, addressList, fetchAddress, onEditValue, fetchCurrentLocation } = useAddressViewModel();

  useEffect(() => {
    if (currentVal.length)
      fetchAddress();
  }, [currentVal]);

  useEffect(() => {
    fetchCurrentLocation()
  }, [])



  return {
    currentVal,
    addressList,
    onEditValue,
    fetchAddress
  };
};

export default useHomeAddressController;
