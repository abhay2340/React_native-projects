import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';

function Task() {
  return (
    <View>
      <Text style={styles.taskHeading}>Daily Tasks:</Text>
      <View style={styles.containerWrapper}>
        <TouchableOpacity>
          <View style={styles.container}>
            <Text style={styles.contText1}>Daily astro astromedic</Text>
            <Text style={styles.contText2}>3</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.container}>
            <Text style={styles.contText1}>Daily Sleep astromedic</Text>
            <Text style={styles.contText2}>1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.container}>
            <Text style={styles.contText1}>Daily Mantra astromedic</Text>
            <Text style={styles.contText2}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Task;
