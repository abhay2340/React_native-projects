import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  taskHeading: {
    fontSize: 20,
    marginLeft: 25,
    marginTop: 30,
  },
  containerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#E3EAEA',
    height: 90,
    width: 100,
    borderRadius: 20,
    marginTop: 10,
    display: 'flex',
    justifyContent: 'space-around',
    paddingLeft: 10,
    marginLeft:10,

    
  },
  contText1: {
    fontSize: 9,
    fontWeight: 'bold',
  },
  contText2: {
    fontSize: 19,
    fontWeight: 'bold',
  },
});

export default styles;
