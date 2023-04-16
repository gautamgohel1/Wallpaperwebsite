import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Topheader from "./Topheader";
import Sdata from "./Sdata";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Topheader />
    <div className="container">
      <div className="card-card">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
          <App imgsrc={Sdata[0].imgsrc} title={Sdata[0].sname} />
          <App imgsrc={Sdata[1].imgsrc} title={Sdata[1].sname} />
          <App imgsrc={Sdata[2].imgsrc} title={Sdata[2].sname} />
          <App imgsrc={Sdata[3].imgsrc} title={Sdata[3].sname} />
          <App imgsrc={Sdata[4].imgsrc} title={Sdata[4].sname} />
          <App imgsrc={Sdata[5].imgsrc} title={Sdata[5].sname} />
          <App imgsrc={Sdata[6].imgsrc} title={Sdata[6].sname} />
          <App imgsrc={Sdata[7].imgsrc} title={Sdata[7].sname} />
        </div>
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
