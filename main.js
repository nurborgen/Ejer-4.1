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

let URLTareaStatusChange = URLinit + 'todos/' + id
const resultTareaStatusChange = await tareaStatusChange(URLTareaStatusChange)
console.log(resultTareaStatusChange)

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

async function tareaStatusChange(URL) {
  const response = await fetch(URL, {
    method: 'DELETE',
  })
  if(!response.ok) {
    throw 'Error ' + response.status + ' de la BBDD: ' + response.statusText
  }
  const datos = await response.json()
  return datos
}

}
main()