import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {colors} from '.scr/components/constants/theme';
import MainHeader from 'src/components/MainHeader.js';
import ScreenHeader from '.scr/components/ScreenHeader';
import TopPlacesCarousel from '.scr/components/TopPlacesCarousel';
import {PLACES, TOP_PLACES} from '.scr/data';
import SectionHeader from '.scr/components/SectionHeader';
import TripsList from '.scr/components/TripsList';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader title="Travel App" />
      <ScreenHeader mainTitle="Find Your" secondTitle="Dream Trip" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopPlacesCarousel list={TOP_PLACES} />
        <SectionHeader
          title="Popular Trips"
          buttonTitle="See All"
          onPress={() => {}}
        />
        <TripsList list={PLACES} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
});

export default HomeScreen;