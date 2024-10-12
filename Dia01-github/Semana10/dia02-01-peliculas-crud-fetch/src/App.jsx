import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
  fetchPeliculas,
  createPelicula,
  removePelicula,
  updatePelicula,
} from "./services/peliculas";

const App = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [form, setForm] = useState({
    id: '',
    nombre: '',
    imagen: '',
    estreno: '',
    generoId: '',
    resumen: '',
  });
  useEffect(() => {
    console.log("useEffect");

    fetchPeliculas() // promesa
      .then(dataPeliculas => {
        setPeliculas(dataPeliculas);
      });
  }, []);

  const handleSave = async (event) => {
    event.preventDefault();

    const isNew = form.id === '';

    if (isNew) {
      const newPelicula = {
        
        nombre: form.nombre,
        imagen: form.imagen,
        estreno: form.estreno,
        generoId: form.generoId,
        resumen: form.resumen
      };
      const res = await createPelicula(newPelicula);
      console.log(res);

      const dataPeliculas = await fetchPeliculas();

      setPeliculas(dataPeliculas);

    } else {
      const res = await updatePelicula(form);
      
      console.log(res);

      const dataPeliculas = await fetchPeliculas();

      setPeliculas(dataPeliculas);
    }
    setForm({
      id: '',
      nombre: '',
      imagen: '',
      estreno: '',
      generoId: '',
      resumen: '',
    });
  };

  const handleChange = (event) => {
    const { name, value} = event.target
    setForm({ ...form, [name]: value})
     
  };
  const handleRemove = (id) => {
    console.log("Eliminando película...", id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      // aqui colocamos el async porq esta en otra funcion
      // cuando el usuario presiona el boton YES
      if (result.isConfirmed) {
        const res = await removePelicula(id);

        console.log(res);

        const dataPeliculas = await fetchPeliculas();

        setPeliculas(dataPeliculas);
      }
    });
  };

  const handleUpdate = (id) => {
    const peliculaFound = peliculas.find(pelicula => {
      return pelicula.id === id;
    });
    console.log(peliculaFound);
    setForm(peliculaFound);
  };

  return (
    <main>
      <nav className="flex">
        <ul>
          <li>
            <strong>CRUD de Películas con React + Fetch API</strong>
          </li>
        </ul>
      </nav>

      <section className="container-fluid">
        <div className="grid">
          <div>
            <table>
              <thead>
                <tr>
                  <th>1</th>
                  <th>imagen</th>
                  <th>Nombre</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              <tbody className="peliculas__list">
                {peliculas.map((pelicula) => {
                  return (
                    <tr key={pelicula.id}>
                      <td>{pelicula.id}</td>
                      <td>
                        <img src={pelicula.imagen} />
                      </td>
                      <td>
                        <div>
                          <div>Nombre: {pelicula.nombre}</div>
                          <div>Genero: {pelicula.generoId}</div>
                          <div>Estreno: {pelicula.estreno}</div>
                          <div>Resumen: {pelicula.resumen}</div>
                        </div>
                      </td>
                      <td>
                        <button onClick={() => handleUpdate(pelicula.id)}>
                          ✏️
                        </button>
                        <button onClick={() => handleRemove(pelicula.id)}>
                          ❌
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          
            <form 
            className="flex-col" 
            onSubmit={handleSave}>
              <h2>Nueva película</h2>
            <label>
              <input
                type="text"
                name="nombre"
                placeholder="Mi pelicula"
                onChange={handleChange}
                //value={form.nombre}
              />
            </label>

            <label>
              <input
                type="text"
                name="imagen"
                placeholder="https://..."
                onChange={handleChange}
                //value={form.imagen}
              />
            </label>

            <label>
              <input
                type="date"
                name="estreno"
                placeholder="estreno"
                onChange={handleChange}
                //value={form.estreno}
              />
            </label>

            <label>
              <select
                name="generoId"
                onChange={handleChange}
                //value={form.generoId}
              >
                <option value="">Selecciona un genero...</option>
                <option value="1">Comedia</option>
                <option value="2">Acción</option>
                <option value="3">Animación</option>
                <option value="4">Aventura</option>
              </select>
              </label>

              <label>
              <textarea
                name="resumen"
                type="text"
                placeholder="Resumen de mi película"
                onChange={handleChange}
                //value={form.resumen}
              ></textarea>
              </label>
              <pre>{JSON.stringify(form)}</pre>
              <input type="submit" value="Guardar" />
            </form>
          
        </div>
      </section>
    </main>
  );
};

export default App;
