import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { SHADOW_STYLE, colors, dimensions, fontSizes, styleGuide } from '../styles/globalStyles';


const AddressItem = ({ addressSubtitle = "", addressTitle = '' }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`${addressTitle}: `}
        <Text style={styles.subtitle}>{addressSubtitle}</Text>
      </Text>
    </View>
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
    fontSize: fontSizes.fs18,
  },
  subtitle: {
    fontSize: styleGuide.titleTextSize,
    fontWeight: styleGuide.titleTextWeight,
    color: colors.dark,
    fontSize: fontSizes.fs14
  }
});

export default AddressItem;
