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
    <div>
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

      <p>Tareas pendientes: {pendientes}</p>
      <p>Tareas completadas: {completadas}</p>

      <ul>
        {tareas.map((t) => (
          <li key={t.id}>
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

            <button onClick={() => eliminarTarea(t.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTareas;