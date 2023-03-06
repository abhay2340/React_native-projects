import { View,Text } from "react-native";
// import styles from "../header/Styles";
import styles from './Style'


function Progress() {
  return (
    <>
    <View>
      <Text style={styles.progress}>Your porgress is 60%</Text>
      <View style={styles.bare}></View>
    </View>
    </>
  )
}

export default Progress