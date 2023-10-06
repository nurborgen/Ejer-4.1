'use strict'
async function main() {
let id = prompt("Introduce tu ID de usuario:")

const URLinit = ' https://jsonplaceholder.typicode.com/users'

let URL = URLinit + '?id=' + id
const result = await pideDatos(URL)
console.log(result)


console.log(`ID: ${result.id} nick: ${result.username} nombre: ${result.name}`)
 


async function pideDatos(URL) {
  const response = await fetch(URL)
  if(!response.ok) {
    throw 'Error ' + response.status + ' de la BBDD: ' + response.statusText
  }
  const datos = await response.json()
  return datos
}
}
main()