import { useState } from "react";
import Productos from "./productos";
import Card from "./cards";

function ProductoList() {
    const productos = Productos;
    const [categoria, setCategoria] = useState("Todas");
    const [soloEnStock, setSoloEnStock] = useState(false)

    const productosFiltrados = productos
    .filter((p) =>
        categoria === "Todas" ? true : p.categoria === categoria
    )
    .filter((p) => (soloEnStock ? p.enStock === true : true));

    return (
        <div className="productos-list-container">
            <h2>Lista de Productos</h2>

            <div className="filtros">
                <label htmlFor="categoria">Categoria: </label>
                <select 
                    id="categoria"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                >
                    <option value="Todas">Todas</option>
                    <option value="electronica">Electronica</option>
                    <option value="computacion">Computacion</option>
                    <option value="ruedas">Ruedas</option>
                    <option value="hogar">Hogar</option>
                    <option value="juegos">Juegos</option>
                </select>

                <label>
                    <input
                     type="checkbox" 
                     checked={soloEnStock}
                     onChange={(e) => setSoloEnStock(e.target.checked)}
                    />
                    {" "}Solo en stock
                </label>
            </div>
            <div className="cards-container">
             {productosFiltrados.map((producto) => (
                <Card 
                    key={producto.id}
                    titulo={producto.nombre}
                    descripcion={`Categoría: ${producto.categoria}`}
                    imagen={producto.imagen}
                    precio={producto.precio}
                >
                    <p>{producto.enStock ? "En stock" : "No hay productos"}</p>
                </Card>
            ))}
            </div>
        </div>
    );
}

export default ProductoList