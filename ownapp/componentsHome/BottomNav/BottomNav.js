import {Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import styles from './Style';

function BottomNav() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={require('../../images/home.png')} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../../images/user.png')} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../../images/message.png')} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../../images/book.png')} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../../images/moon.png')} />
      </TouchableOpacity>
    </View>
  );
}

export default BottomNav;
