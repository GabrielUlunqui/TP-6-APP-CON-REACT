import { useState } from "react";

function ListaTareas() {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  // Agregar tarea
  const agregarTarea = (e) => {
    e.preventDefault();

    if (tarea.trim() === "") return;

    const nuevaTarea = {
      id: Date.now(),
      texto: tarea,
      completada: false,
    };

    setTareas([...tareas, nuevaTarea]);
    setTarea("");
  };

  // Eliminar tarea
  const eliminarTarea = (id) => {
    const nuevasTareas = tareas.filter((t) => t.id !== id);
    setTareas(nuevasTareas);
  };

  // Cambiar estado completada
  const toggleCompletada = (id) => {
    const nuevasTareas = tareas.map((t) =>
      t.id === id ? { ...t, completada: !t.completada } : t
    );

    setTareas(nuevasTareas);
  };

  // Contadores
  const pendientes = tareas.filter((t) => !t.completada).length;
  const completadas = tareas.filter((t) => t.completada).length;

  return (
    <div className="lista-tareas">
      <h1>Lista de Tareas</h1>

      <form onSubmit={agregarTarea}>
        <input
          type="text"
          placeholder="Escribe una tarea"
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
        />

        <button type="submit">Agregar</button>
      </form>
      <div className="contadores">
      <p>Tareas pendientes: {pendientes}</p>
      <p>Tareas completadas: {completadas}</p>
      <div/>  
      <ul>
        {tareas.map((t) => (
          <li key={t.id}
          className={t.completada ? "completada" : ""}
          >
          <div className="tarea-info">
            <input
              type="checkbox"
              checked={t.completada}
              onChange={() => toggleCompletada(t.id)}
            />

            <span
              style={{
                textDecoration: t.completada
                  ? "line-through"
                  : "none",
              }}
            >
              {t.texto}
            </span>
            </div>
            <button onClick={() => eliminarTarea(t.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default ListaTareas;