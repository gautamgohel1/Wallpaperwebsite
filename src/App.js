import "./App.css";

function App(props) {
  return (
    <>

      <div className="container-card">
        <div className="card card-img">
          <img src={props.imgsrc} className="card-img-top" alt="Wallpaper" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <a href={props.imgsrc} target=" ">
              <button className="btn btn-card btn-primary btn-lg ">
                Download
              </button>
            </a>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
