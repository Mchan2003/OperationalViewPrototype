//import camera from '../667.png'

function App(props) {
  return (
    <div className="OperationalView">
      <header className="ViewHeader">
        <img src="../667.png" className="App-view" alt="../667.png" />
        <p>
          Main View
        </p>
      </header>
      <div className="status">
        <h3> 
          status:
          Speed:
          Angle:
          Drive mode:
          Arm mode:
        </h3>
      </div>
      <div className="Overlay-btn">
        <button type="button" className="btn-toggle" aria-pressed="true">
          Overlay
        </button>
      </div>
{/* Overlay components */}
      <div className="Camera-grid">
        <button type="button" className="cam1-toggle" aria-pressed="true">
          <img src="../download.jpg" className="cam1-view" alt="../download.jpg" />
          <h5>Camera 1</h5>
        </button>
        <button type="button" className="cam2-toggle" aria-pressed="true">
          <img src="../download.jpg" className="cam2-view" alt="../download.jpg" />
          <h5>Camera 2</h5>
        </button>
        <button type="button" className="cam3-toggle" aria-pressed="true">
          <img src="../download.jpg" className="cam3-view" alt="../download.jpg" />
          <h5>Camera 3</h5>
        </button>
      </div>
      <div className="Return-btn">
        <button type="button" className="btn-toggle" aria-pressed="true">
          Back to main view
        </button>
      </div>
      <div className="Return-pty-btn">
        <button type="button" className="returnPty-toggle" aria-pressed="true">
          Return to Prototype
        </button>
      </div>
    </div>
  );
}

export default App;
