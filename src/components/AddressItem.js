import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SHADOW_STYLE, colors, dimensions, fontSizes, styleGuide } from '../styles/globalStyles';
import { AddressAction } from '../store/addressSlice';
import { useDispatch } from 'react-redux';


const AddressItem = ({ addressSubtitle = "", addressTitle = '' }) => {
  const dispatch = useDispatch()
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => dispatch(AddressAction.updateCurrentValue(addressTitle))}
    >
      <Text style={styles.title}>{`${addressTitle}: `}
        <Text style={styles.subtitle}>{addressSubtitle}</Text>
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: styleGuide.padding,
    borderRadius: styleGuide.radius,
    marginVertical: styleGuide.padding / 4,
    width: dimensions.fullWidth - styleGuide.padding * 2,
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    flexDirection: 'row',
    ...SHADOW_STYLE
  },
  title: {
    fontSize: styleGuide.titleTextSize,
    fontWeight: styleGuide.titleTextWeight,
    color: colors.dark,
  },
  subtitle: {
    fontWeight: styleGuide.titleTextWeight,
    color: colors.dark,
    fontSize: fontSizes.fs14
  }
});

export default AddressItem;
