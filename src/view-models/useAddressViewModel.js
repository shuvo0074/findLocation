import { useSelector, useDispatch } from 'react-redux';
import { AddressAction } from '../store/addressSlice';
import GeoLocation, { AuthorizationLevel } from "react-native-geolocation-service";

const useAddressViewModel = () => {
  const dispatch = useDispatch();
  const {
    addressList,
    currentVal,
    location: {
      latitude,
      longitude
    }
  } = useSelector(state => state.address);

  const { setAddressList, updateCurrentValue, updateCurrentLocation } = AddressAction;

  return {
    addressList,
    currentVal,
    fetchAddress: () => {
      fetch("https://maps.googleapis.com/maps/api/place/autocomplete/json?input=" + currentVal + `&location=${latitude}%2C${longitude}&radius=500&key=AIzaSyBlLNxqAxOlVGnvtS-zH2yuTqYbifjDWLs`)
        .then(res => {
          res.json()
            .then(respJson => {
              dispatch(setAddressList(respJson.predictions))
            })
        })
        .catch(e => console.log(e))
    },
    fetchCurrentLocation: () => {
      GeoLocation.requestAuthorization("whenInUse")
        .then(res => {
          GeoLocation.getCurrentPosition((position) => {
            dispatch(updateCurrentLocation(position.coords))
          })
        })
    },
    onEditValue: (val) =>
      dispatch(updateCurrentValue(val)),
  };
};

export default useAddressViewModel;
