import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TextInput, StatusBar, Image } from 'react-native';

import { AddressItem, EmptyList } from '../components';
import useHomeAddressController from '../view-controllers/useHomeAddressController';
import { colors, dimensions, fontSizes, fontWeights, styleGuide } from '../styles/globalStyles';
import { ASSETS } from '../assets';

const HomeScreen = () => {
  const { currentVal, addressList, onEditValue } = useHomeAddressController();

  return (
    <View style={styles.background}>
      <SafeAreaView style={{ flex: 0, backgroundColor: colors.primary }} />
      <View style={styles.headingView}>
        <Image
          source={ASSETS.search}
          style={styles.flagIcon}
        />
        <TextInput
          value={currentVal}
          onChangeText={onEditValue}
          style={styles.inputStyle}
          cursorColor={colors.secondary}
          placeholder='Type location'
        />
      </View>
      <View style={styles.addressListView}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={addressList}
          renderItem={({ item }) =>
            <AddressItem
              addressTitle={item.structured_formatting.main_text}
              addressSubtitle={item.structured_formatting.secondary_text}
            />}
          contentContainerStyle={{
            backgroundColor: colors.white,
          }}
          ListEmptyComponent={()=><EmptyList/>}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headingView: {
    backgroundColor: colors.primary,
    padding: styleGuide.padding,
    alignItems: 'center'
  },
  addressListView: {
    marginVertical: styleGuide.padding,
  },
  inputStyle: {
    paddingHorizontal: styleGuide.padding,
    color: colors.white,
    height: 45,
    fontSize: fontSizes.fs20,
    fontWeight: fontWeights.fw200,
    alignItems: 'center',
    width: dimensions.fullWidth - 20,
    marginTop: styleGuide.padding,
    backgroundColor: colors.secondary,
    borderRadius: styleGuide.radius
  },
  flagIcon: {
    height: 80,
    width: 80,
  }
});

export default HomeScreen;
