import Card from './Cards';
import auto from '../assets/auto.avif'
import computadora from '../assets/computadora.avif'
import juego from '../assets/juego.jpg'
import tv from '../assets/tv.avif'

function CardList() {
  return (
    <div>
      <h2>Cards</h2>

      <Card titulo="PORTATIL" descripcion="NOTEBOOK INTEL I7" imagen={computadora} precio={1200}>
        <p>Envio gratis</p>
      </Card>

      <Card titulo="CAMIONETA" descripcion="Camioneta a bateria FORD RANGER" imagen={auto} precio={900}>
        <p>En stock</p>
      </Card>

      <Card titulo="JUEGO" descripcion="Resident Evil Requiem PS5" imagen={juego} precio={80}>
        <p>Oferta</p>
      </Card>

      <Card titulo="TELEVISOR" descripcion="Televisor LG 55° " imagen={tv} precio={350}>
        <p>Última unidad</p>
      </Card>
    </div>
  );
}

export default CardList;