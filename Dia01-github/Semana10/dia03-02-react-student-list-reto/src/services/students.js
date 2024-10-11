export const fetchStudents = async () => {
    const url = 'https://67074c70a0e04071d229b91d.mockapi.io/students'
  
    const response = await fetch(url)
  
    return await response.json()
  }
  
  // Crearemos una petición del tipo POST para el endpoint /students
  export const createStudent = async (data) => {
    const url = 'https://67074c70a0e04071d229b91d.mockapi.io/students'
  
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Mimetypes
      },
      body: JSON.stringify(data)
    }
  
    const response = await fetch(url, options)
  
    return await response.json()
  }
  
  export const updateStudent = async (data) => {
    const url = `https://67074c70a0e04071d229b91d.mockapi.io/students/${data.id}`
  
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        city: data.city
      })
    }
  
    const response = await fetch(url, options)
  
    return await response.json()
  }

  export const removeStudent = async (id) => {
    const url = `https://67074c70a0e04071d229b91d.mockapi.io/students/${id}`

    const options = {
        method: "DELETE"
        }
    
    const response = await fetch(url, options)
  
    return await response.json()
  }