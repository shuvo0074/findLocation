import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  addressList: [],
  currentVal: '',
  location: {
    latitude: 0.0,
    longitude: 0.0
  }
};

export const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setAddressList: (state, action) => {
      state.addressList = action.payload;
    },
    updateCurrentValue: (state, action) => {
      state.currentVal = action.payload
    },
    updateCurrentLocation: (state, action) => {
      state.location = action.payload
    }
  },
});

const { setAddressList, updateCurrentValue, updateCurrentLocation } = addressSlice.actions;

export const AddressAction = {
  setAddressList, updateCurrentValue, updateCurrentLocation
};

export default addressSlice.reducer;
