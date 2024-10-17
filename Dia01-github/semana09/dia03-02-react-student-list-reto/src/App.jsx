
import Avatar from "boring-avatars";
import { useState } from "react";

const App = () => {
  // const DEFAULT_STUDENTS = [
  //   {
  //     id: "1",
  //     name: "Bulma",
  //     city: 'Chiclayo'
  //   },
  //   {
  //     id: "2",
  //     name: "Goku",
  //     city: 'Trujillo'
  //   },
  //   {
  //     id: "3",
  //     name: "Vegeta",
  //     city: 'Lima'
  //   }
  // ]

  // console.log(localStorage.getItem('STUDENTS') ?? []) 
  // console.log(JSON.parse([]))

  const [students, setStudents] = useState(
    JSON.parse(localStorage.getItem('STUDENTS') ?? '[]') // cuando no hay datos en localstorage colocar en comillas simples
  )

  const [form, setForm] = useState({
    id: '',
    name: '',
    Lastname: '',
    email: '',
    password: '',
    city: ''
  })

  const handleSave = (event) => {
    event.preventDefault();

    const isNew = form.id === ''

    if (isNew) {
      const newStudent = {
        id: crypto.randomUUID(),
        name: form.name,
        Lastname: form.Lastname,
        email: form.email,
        password: form.password,
        city: form.city
      }

      const updatedStudents = [ ...students, newStudent ]
      
      setStudents(updatedStudents)

      localStorage.setItem('STUDENTS', JSON.stringify(updatedStudents))
    } else {
      // Update student
      const updatedStudents = students.map(student => {
        if (student.id === form.id) {
          return {
            ...student,
            name: form.name,
            Lastname: form.Lastname,
            email: form.email,
            password: form.password,
            city: form.city
          }
        }

        return student
      })

      setStudents(updatedStudents)

      localStorage.setItem('STUDENTS', JSON.stringify(updatedStudents))
      
    }

    setForm({
      id:'',
      name: '',
      Lastname: '',
      email: '',
      password: '',
      city: ''
    })
  }

  // const handleCheck = (event) => {
  //   const inputPassword = document.getElementById("password")
  //   const labelShow = document.getElementById("label-show")

  //   inputPassword.type = event.checked ? "text" : "password"
  //   labelShow.textContent = event.checked ? "Ocultar Contraseña" : "Mostrar Contraseña"

  // }

  const handleChange = (event) => {
    const { name, value } = event.target // Lo que se escribe en la caja de texto

    setForm({ ...form, [name]: value })
  }

  const handleRemove = (id) => {
    console.log('Deleting student...', id)

    const updatedStudents = students.filter(student => student.id !== id)

    setStudents(updatedStudents)

    localStorage.setItem('STUDENTS', JSON.stringify(updatedStudents))
  }

  const handleUpdate = (id) => {
    const studentFound = students.find(student => {
      return student.id === id
    })

    console.log(studentFound)

    setForm(studentFound)
  }

  return (
    <main className="w-96 mx-auto border rounded-lg mt-6 p-3">
      <h1 className="text-2xl text-center">Student List</h1>

      <form
        className="flex flex-col gap-3 bg-slate-50 p-3 rounded-lg border"
        onSubmit={handleSave}
      >
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-900">Name</span>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
            type="text"
            name="name"
            placeholder="Ex. Juan"
            onChange={handleChange}
            value={form.name}
            required
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-900">Lastname</span>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
            type="text"
            name="Lastname"
            placeholder="Ex. Díaz"
            onChange={handleChange}
            value={form.Lastname}
            required
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-900">Email</span>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
            type="email"
            name="email"
            placeholder="Ex. tunombre@tudominio.com"
            onChange={handleChange}
            value={form.email}
            required
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-900">Password</span>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
            type="password"
            name="password"
            placeholder="******"
            onChange={handleChange}
            value={form.password}
            required
            // id="password"
          />
          {/* <div className="flex gap-2 mx-auto">
          <input className="flex" type="checkbox" id="showPass" onChange={handleCheck}/>
          <label className="flex justify-between" for="showPass" id="label-show">Mostrar Contraseña</label>
          </div> */}
        </label>
        

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-900">City</span>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
            type="text"
            name="city"
            placeholder="Ex. Chiclayo"
            onChange={handleChange}
            value={form.city}
            required
          />
        </label>

        <div className="flex gap-3">
          <input
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
            value='Save'
          />
          <input
            type="reset"
            className="text-white bg-gray-700 hover:bg-gray-800 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
            value="Limpiar"
          />
        </div>

        {/* <pre>{JSON.stringify(form)}</pre> */}
      </form>

      <div className="student__list mt-3 flex flex-col gap-2">

        {/* {JSON.stringify(students)} */}

        {students.map(student => {
          return (
            <div key={student.id} className="student__row flex justify-between items-center gap-2 bg-slate-50 p-2 rounded-lg border">
              <Avatar name={student.name} variant="beam" size={32}/>
              <div className="text-left">{student.name}</div>
              <div className="text-left">{student.Lastname}</div>
              <div className="text-left">{student.email}</div>
              {/* <div className="text-left">{student.passWord}</div> */}
              <div className="text-left">{student.city}</div>
              <div className="flex gap-2">
                <button onClick={() => handleUpdate(student.id)}>✏</button>
                <button onClick={() => handleRemove(student.id)}>❌</button>
              </div>
            </div>
          )
        })}

      </div>
    </main>
  )
}

export default App