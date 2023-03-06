import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import styles from './style';
// import LinearGradient from 'react-native-linear-gradient';
import Gradient from '../gradient/Gradient';

function News() {
  return (
    <>
      <View style={styles.wrapper}>
        <Text style={styles.newsHeader}>News</Text>
        <ScrollView horizontal={true}>
          <View style={styles.newswrapper}>
            <TouchableOpacity>
              <Gradient />
            </TouchableOpacity>
            <TouchableOpacity>
              <Gradient />
            </TouchableOpacity>
            <TouchableOpacity>
              <Gradient />
            </TouchableOpacity>
            <TouchableOpacity>
              <Gradient />
            </TouchableOpacity>
            <Gradient />
          </View>
        </ScrollView>
      </View>
    </>
  );
}

export default News;
