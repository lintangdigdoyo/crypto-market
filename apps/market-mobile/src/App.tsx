import { SafeAreaView, StatusBar } from 'react-native';
import Market from './screens/Market';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Market />
      </SafeAreaView>
    </>
  );
};

export default App;
