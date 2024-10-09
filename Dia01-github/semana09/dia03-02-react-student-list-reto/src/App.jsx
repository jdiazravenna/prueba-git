import Avatar from "boring-avatars";

const App = () => {
  return (
    <main className="flex flex-col">
      <div>
          <h1 className="text-3xl text-center">Student List</h1>
        </div>
      <section className="flex flex-col">
      <div className="flex flex-col border border-black m-2 p-2">
      <label>Nombre</label>
      <input className="border"></input>
      <label>Ciudad</label>
      <input className="border"></input>
      <button className="border bg-blue-500 w-auto">Guardar</button>
      </div>
      <section className="flex flex-col">
      <div className="flex justify-between border border-black m-2 p-2">        
        <img/>
        <label>text</label>
        <label>text</label>
        <button>✏️</button>
        <button>❌</button>
      </div>
    </section>
    </section>
    </main>
  )
}

export default App