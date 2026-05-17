import { useState } from "react";
function Formulario() {
    const [nombre, setNombre] =useState ("");
    const [email, setEmail] = useState ("");
    const [mensaje, setMensaje] = useState ("");

    const formularioValido = nombre.trim() && email.trim ()

    const handleSubmit =(e) => {
        e.preventDefaul();
        console.log ({nombre, email, mensaje});
    };

    return(
        <div>
            <h2> FORMULARIO CON PREVIEW</h2>
            <form onSubmit={handleSubmit}>
                <div>
                 <label>NOMBRE</label>
                 <br/ >
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre (e.target.value)}
                    placeholder= "TU NOMBRE"

                />
                </div>
                <div>
                    <label>Email</label>
                    <br/>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail (e.target.value)}
                        placeholder="TU@EMAIL.COM"
                    />
                </div>
                <div>
                    <label>Mensaje</label>
                    <br/>
                    <input
                        type="mensaje"
                        value={mensaje}
                        onChange={(e) => setMensaje (e.target.value)}
                        placeholder="ESCRIBI TU MENSAJE"
                    />
                </div>
                <button type="submit" disabled= {!formularioValido}>
                 Enviar
                </button>
            </form>
            <div>
                <h3>PREVIEW EN VIVO</h3>
                <p><strong>Nombre:</strong> {nombre ||"---"}</p>
                <p><strong>Email:</strong> {email ||"---"}</p>
                <p><strong>Mensaje:</strong> {mensaje ||"---"}</p>
            </div>
        </div>
    )
}
export default Formulario
