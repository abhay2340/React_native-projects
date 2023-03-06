import { SafeAreaView} from 'react-native';
import Header from './componentsHome/header/Header';
import News from './componentsHome/news/News'
import Task from './componentsHome/Tasks/Task';
import  Progress from './componentsHome/Progress/Progress'
import Bottom from './componentsHome/bottom/Bottom'
import BottomNav from './componentsHome/BottomNav/BottomNav'

function App() {
  
  const abh=['sbjsdn']
  return (
    <SafeAreaView>
      <Header title='Home'/>
      <News/>
      <Task/>
      <Progress/>
      <Bottom/>
      <BottomNav/>
      {/* <Header title={abh}/> */}
    </SafeAreaView>

  );
}

export default App;
