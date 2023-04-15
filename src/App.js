import "./App.css";

function App(props) {
  return (
    <>

      <div id="container">
        <div className="card_row">
          <div className="wrapper">
            <img src={props.imgsrc} alt="" className="pic" />
            <p className="header">{props.title}</p>
            <p className="content">{props.content}</p>
            <a href={props.imgsrc} target=" ">
              <div className="button-center">
                <div className="leesmeer">
                  <b>Download</b> <i className="fas fa-angle-right"></i>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
