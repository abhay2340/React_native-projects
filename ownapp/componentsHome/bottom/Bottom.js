import {View, Text, Image} from 'react-native';
import styles from './Style';

function Bottom() {
  return (
    <>
      <View style={styles.container1}>
        <View style={styles.wrapper}>
          <View style={styles.imgtextwrapper}>
            <View style={styles.img}>
              <Image source={require('../../images/calendar.png')}></Image>
            </View>

            <View>
              <Text style={styles.largeText1}>How was your day?</Text>
              <Text style={styles.smallText1}>
                Lorem ipsum dolor sit amet, consectetur adipscing elit. Ut vel
                odio en urna ultrice...
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.container2}>
        <View style={styles.wrapper}>
          <View style={styles.imgtextwrapper}>
            <View style={styles.img}>
              <Image source={require('../../images/clock.png')}></Image>
            </View>
            <View>
              <Text style={styles.largeText2}>Current transit: 3rd House</Text>
              <Text style={styles.smallText2}>
                Lorem ipsum dolor sit amet, consectetur adipscing elit. Ut vel
                odio en urna ultrice...
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

export default Bottom;
