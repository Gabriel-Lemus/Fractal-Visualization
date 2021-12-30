import FractalButton from './components/atoms/FractalButton';

function App() {
  return (
    <div className="App">
      <section className="buttons-header">
        <FractalButton>Copo de Nieve de Koch</FractalButton>
        <FractalButton>Copo de Nieve de Koch</FractalButton>
        <FractalButton>Copo de Nieve de Koch</FractalButton>
      </section>
      <section className="fractal-canvas-section">
        <canvas id="fractal-canvas"></canvas>
      </section>
      <section className="controls">
        <section className="iteration-count">
          <h3 className="iterations">Iteraciones: </h3>
        </section>
        <section className="fractal-controls">
          <section className="fractal-control-buttons">
            <FractalButton>{'<<'}</FractalButton>
            <p className="fractal-iteration">abc</p>
            <FractalButton>{'>>'}</FractalButton>
          </section>
          <section className="fractal-reset">
            <FractalButton>Resetear</FractalButton>
          </section>
        </section>
      </section>
      <section className="footer">
        <p className="footer-text">Creado por: Gabriel Lemus</p>
      </section>
    </div>
  );
}

export default App;
