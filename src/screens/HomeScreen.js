import react from 'react';
import {Text, View, StyleSheet} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: colors.light,
    }
})

export default HomeScreen;
