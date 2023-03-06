import {Text, View, Scroll, Image, TouchableOpacity} from 'react-native';
import styles from './Styles';

function Header(props) {
  return (
    <>
      <View style={styles.Header}>
        {/* <Text>asddf</Text> */}
        <TouchableOpacity>
          <Image source={require('../../images/menu.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.home}>{props.title}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../images/Vector.png')}></Image>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default Header;
