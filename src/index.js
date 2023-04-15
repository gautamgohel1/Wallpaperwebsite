import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Topheader from './Topheader';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Topheader/>
    <App imgsrc="https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-thumb.jpg" title="Dark Night"/>
    <App imgsrc="https://c4.wallpaperflare.com/wallpaper/764/505/66/baby-groot-4k-hd-superheroes-wallpaper-thumb.jpg" title="Baby Groot" />
    <App imgsrc="https://c4.wallpaperflare.com/wallpaper/531/951/621/digital-digital-art-artwork-illustration-minimalism-hd-wallpaper-thumb.jpg" title="Digital Art"/>
    <App imgsrc="https://c4.wallpaperflare.com/wallpaper/297/22/531/lake-blue-moonlight-moon-wallpaper-thumb.jpg" title="Reflection Of snowy"/>
    <App imgsrc="https://c4.wallpaperflare.com/wallpaper/611/838/413/spiderman-hd-4k-superheroes-wallpaper-preview.jpg" title="Spiderman"/>
    <App imgsrc="https://c4.wallpaperflare.com/wallpaper/965/883/624/manga-one-piece-wallpaper-thumb.jpg" title="DarkThousand Sunny One"/>
    <App imgsrc="https://c4.wallpaperflare.com/wallpaper/975/421/110/windows-10-black-4k-8k-wallpaper-thumb.jpg" title="Windows 10"/>
    <App imgsrc="https://c4.wallpaperflare.com/wallpaper/337/481/82/deer-geometry-wireframe-artwork-wallpaper-preview.jpg" title="White Deer Sketch"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




