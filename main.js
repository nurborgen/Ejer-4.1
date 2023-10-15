'use strict'
async function main() {
let id = prompt("Introduce tu ID de usuario:")

const URLinit = ' https://jsonplaceholder.typicode.com/'

let URLuserById = URLinit + 'users/' + id
const result = await userById(URLuserById)
console.log(result)


console.log(`ID: ${result.id} nick: ${result.username} nombre: ${result.name}`)
 
let URLTareasPorUser = URLinit + 'todos?userId=' + id
const resultTareasPorUser = await tareasPorUser(URLTareasPorUser)
console.log(resultTareasPorUser)

let idDelete = prompt("Introduce el id de la tarea que quieres borrar:")
let URLTareaDelete = URLinit + 'todos/' + idDelete
const resultTareaDelete = await tareasDelete(URLTareaDelete)
console.log(resultTareaDelete)

let idStatusChange = prompt("Introduce el id de la tarea que quieres cambiar a completada:")
let URLStatusChange = URLinit + 'todos/' + idStatusChange
const resultStatusChange = await tareasStatusChange(URLStatusChange)
console.log(resultStatusChange)

let titleTarea = prompt("Introduce el titula de la nueva tarea:")
const resultURLnewTarea = await newTarea(titleTarea)
console.log(resultURLnewTarea)

async function userById(URL) {
  const response = await fetch(URL)
  if(!response.ok) {
    throw 'Error ' + response.status + ' de la BBDD: ' + response.statusText
  }
  const datos = await response.json()
  return datos
}

async function tareasPorUser(URL) {
  const response = await fetch(URL)
  if(!response.ok) {
    throw 'Error ' + response.status + ' de la BBDD: ' + response.statusText
  }
  const datos = await response.json()
  return datos
}

async function tareasDelete(URL) {
  const response = await fetch(URL, {
    method: 'DELETE',
  })
  if(!response.ok) {
    throw 'Error ' + response.status + ' de la BBDD: ' + response.statusText
  }
  const datos = await response.json()
  return datos
}

async function tareasStatusChange(URL) {
  const response = await fetch(URL, {
    method: 'PATCH',
    body: JSON.stringify({
      completed: true,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })

  if(!response.ok) {
    throw 'Error ' + response.status + ' de la BBDD: ' + response.statusText
  }
  const datos = await response.json()
  return datos
}

async function newTarea(title) {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify({
          userId: id,
          title: title,
          completed: false
      }),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      },
  })
  if (!response.ok) {
      throw `Error ${response.status} en la API: ${response.statusText}`
  }
  const myData = await response.json()
  return myData
}

}
main()