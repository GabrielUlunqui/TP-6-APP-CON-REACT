import celular from '../assets/celular.png'
import computadora from '../assets/computadora.avif'
import moto from '../assets/moto.jpg'
import placa from '../assets/placa.png'
import procesador from '../assets/procesador.jpg'
import heladera from '../assets/heladera.jpg'
import bici from '../assets/bici.avif'
import juego from '../assets/juego.jpg'

const Productos = [
    {id: 1, nombre: "Celular", precio: 900, categoria: "electronica", enStock: true, imagen: celular},
    {id: 2, nombre: "Computadora", precio: 1250, categoria: "computacion", enStock: false, imagen: computadora},
    {id: 3, nombre: "Motocicleta", precio: 9000, categoria: "ruedas", enStock: true, imagen: moto},
    {id: 4, nombre: "Placa de Video", precio: 600, categoria: "computacion", enStock: true, imagen: placa},
    {id: 5, nombre: "Procesador", precio: 750, categoria: "computacion", enStock: false, imagen: procesador},
    {id: 6, nombre: "Heladera", precio: 3250, categoria: "hogar", enStock: true, imagen: heladera},
    {id: 7, nombre: "Bicicleta", precio: 1400, categoria: "ruedas", enStock: true, imagen: bici},
    {id: 8, nombre: "Juego", precio: 80, categoria: "juegos", enStock: true, imagen: juego},
   
   
];

export default Productos