import image1 from '../../src/assets/index1.jpg';
import image2 from '../../src/assets/airpods.jpg';
import image3 from '../../src/assets/index2.jpg';
import image4 from '../../src/assets/iphone-12-green.png';
import image5 from '../../src/assets/iphone-12-blue.png';
import image6 from '../../src/assets/iphone-12-pro.png';
import image7 from '../../src/assets/iphoneSE.jpg';
import image8 from '../../src/assets/fuente-c.jpg';
import image9 from '../../src/assets/airtag.jpeg';
const Productos = [
    {
      id:1,
      title:'Apple Iphone 11',
      price:"$ 810-950",
      desc: "Capacidad  64GB, 128GB Colores Black, Blue, Green, Red, White"	,
      image: `${image1}`,
      stock:10,
      idcategory:1,
  
    },
    {id:2,
      title:'"Apple Iphone 12",',
      price:"$ 1600-2000",
      desc: "Capacidad  64GB, 128GB Colores Black, Blue, Green, Red, White"	,
      image: `${image7}`,
      stock:10,
      idcategory:2,
    },
    {
      id:3,
      title:'Apple Iphone 13',
      price: "$ 1280-1950",
      desc: "Capacidad  64GB, 128GB Colores Black, Blue, Green, Red, White"	,
      image: `${image3}`,
      stock:10,
      idcategory:3,
     },
      {
      id:4,
      title:'Apple Iphone 11',
      price:"$ 810-950",
      desc: "Capacidad  64GB, 128GB Colores Black, Blue, Green, Red, White"	,
      image: `${image4}`,
      stock:10,
      idcategory:4,
    },
    {
      id:5,
      title:"Apple Iphone 12",
      price: " $1050-1250",
      desc: "Capacidad  64GB, 128GB Colores Black, Blue, Green, Red, White"	,
      image:`${image5}`,
      stock:10,
      idcategory:5,
    },
    {
      id:6,
      title:'Apple Iphone 13 PRO',
      price: "$ 1280-1950",
      desc: "Capacidad  64GB, 128GB Colores Black, Blue, Green, Red, White"	,
      image: `${image6}`,
      stock:10,
      idcategory:6,
    },
    {
      id:7,
      title: "Airpods Max",
      price: " $1050-1250",
      desc: "Auriculares circumaurales cerrados con transductor electrodinámico",
      image:`${image2}`,
      stock:10,
      idcategory:7,
    },
    {
      id:8,
      title:"Fuente USB-C 18w",
      price: " $1050-1250",
      desc: "Aprovecha al máximo la carga de tu equipo, cuida de tu batería con la calidad de lo original"	,
      image:`${image8}`,
      stock:10,
      idcategory:8,
    },
    {
      id:9,
      title:"AirTags (localizador)",
      price:"$ 810-950",
      desc: "El AirTag es una forma muy fácil de saber dónde están tus cosas. Pon uno en las llaves, otro en la mochila, y las tendrás localizadas con la app Buscar. Tranquilidad total."	,
      image: `${image9}`,
      stock:10,
      idcategory:9,
  
    },
  ];
  export default Productos;