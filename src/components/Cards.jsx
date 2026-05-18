function Card({ titulo, descripcion, imagen, precio, children }) {
  return (
    <div id="inicio" className="card">
      <div className="info">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <p>Precio: ${precio}</p>
        {children}
      </div>
      <img src={imagen} alt={titulo} />
    </div>
  );
}
export default Card