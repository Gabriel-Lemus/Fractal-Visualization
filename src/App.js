import Canvas from './components/atoms/Canvas';
import ButtonsHeader from './components/molecules/ButtonsHeader';
import Controls from './components/molecules/Controls';
import Footer from './components/molecules/Footer';

function App() {
  return (
    <div className="App">
      <ButtonsHeader />
      <Canvas />
      <Controls iteration={0} />
      <Footer />
    </div>
  );
}

export default App;
