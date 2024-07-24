import React from 'react';
import NavBar from "../component/NavBar";
import MainPage from "../component/MainPage";
import Footer from "../component/Footer";
import Calculator from '../component/Calculator';
import ParisImage from "./assets/paris.jpg";
import NYCImage from "./assets/NYC.jpg";
function App(){
  const product = [
    {
        image:NYCImage,
        name:"NYC",
        title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam suscipit ipsum iure sed autem a provident incidunt tempore. Illo corrupti aliquid tenetur non enim molestias, provident aspernatur nostrum commodi? Laudantium.",
        price:600
    },
    {
      image:ParisImage,
        name:"paris",
        title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam suscipit ipsum iure sed autem a provident incidunt tempore. Illo corrupti aliquid tenetur non enim molestias, provident aspernatur nostrum commodi? Laudantium.",
        price:500
    }
        ];
  return (
    <div>
      <NavBar/>
      <MainPage product={product}/>
      <Footer/>
      <Calculator/>
    </div>
  )
}

export default App;