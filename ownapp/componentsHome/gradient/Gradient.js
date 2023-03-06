import {Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';

function News() {
  return (
         <View style={styles.linearGradient}>
        <LinearGradient
          start={{x: 0.0, y: 0.25}}
          end={{x: 0.3, y: 1}}
          locations={[0.3, 0.9]}
          colors={[' rgba(99,251,215,1)', 'rgba(5,222,250,1)']}
          style={styles.linearGradient}>
          <Text style={styles.insidenews}>Short news title will be here</Text>
        </LinearGradient></View>
  );
}


export default News;
