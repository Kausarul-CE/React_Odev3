import "./App.css";
import React from "react";
import { useState } from "react";
function Arama({aramaMetni,onSearch}) {
  
    

  
  
  return (
    <div>
    <label htmlFor="arama">Ara: </label>
    <input id="arama" type="text"  onChange={onSearch} value={aramaMetni} />
    <p>
      
    </p>
    </div>
  )
  }
function Yazi ({id,url,baslik,yazar,yorum_sayisi,puan}) {
  return (
    <li key={id}>
              <span>
                <a href={url}>{baslik}</a>,
              </span>
              <span>
                <b>Yazar:</b> {yazar},{" "}
              </span>
              <span>
                <b>Yorum Sayısı:</b> {yorum_sayisi},{" "}
              </span>
              <span>
                <b>Puan:</b> {puan}
              </span>
            </li>

  )
}
function Liste(props) {
  return (
    <ul>
      {props.yazilar.map(function(yazi) {
        return (
          <Yazi key={yazi.id}{...yazi}></Yazi>
        )
      })}
      </ul>

  )

}

function App() {
  const [aramaMetni,setAramaMetni] = React.useState(localStorage.getItem("aranan")||"React");

  const yaziListesi = [
    {
      baslik: "React Öğreniyorum",
      url: "www.sdu.edu.tr",
      yazar: "MD KAUSARUL ISLAM",
      yorum_sayisi: 3,
      puan: 4,
      id: 0,
    },
    {
      baslik: "Web Teknolojileri ve Programlama",
      url: "wwww.google.com.tr",
      yazar: "MD KAUSARUL ISLAM ",
      yorum_sayisi: 2,
      puan: 5,
      id: 1,
    },
    {
      baslik: "JavaScript Temelleri",
      url: "www.google.com.tr",
      yazar: "Mosh Hamedani",
      yorum_sayisi: 2,
      puan: 3,
      id:2,
    },
  {
    baslik: "Python Programming",
    url: "wwww.google.com.tr",
    yazar: "Jet Brains ",
    yorum_sayisi: 3,
    puan: 4,
    id: 3,
  },
  {
    baslik: "Android Developer",
    url: "wwww.google.com.tr",
    yazar: "Alexzander Goodman",
    yorum_sayisi: 4,
    puan: 5,
    id: 4,
  },
  {
    baslik: "Database Design",
    url: "wwww.google.com.tr",
    yazar: "Adam Finer ",
    yorum_sayisi: 2,
    puan: 3,
    id: 5,
  }
  ];

  const arananYazilar=yaziListesi.filter(
    function(yazi){
      return yazi.baslik.toLowerCase().includes(aramaMetni.toLowerCase());
    }
  );
  function handleSearch(event){
    setAramaMetni(event.target.value);
    localStorage.setItem("aranan",event.target.value);

  }
  React.useEffect(()=>{
    localStorage.setItem("aranaa",aramaMetni)
  },[aramaMetni]);
  return (
    <div>
      <h1>Yazılar</h1>
      <Arama aramaMetni={aramaMetni} onSearch={handleSearch}/>
      <strong>{aramaMetni} aranıyor...</strong>
      <hr />
      <Liste yazilar={arananYazilar} />
    </div>
  );
}
export default App;