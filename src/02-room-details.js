/*
  Do not change the lines below. If you'd like to run code from this file, you may use the `exampleDinosaurData` and `exampleRoomData` variables below to gain access to each data set. This data is pulled from the relevant files in the `data/` directory.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.
*/
const exampleDinosaurData = require("../data/dinosaurs");
const exampleRoomData = require("../data/rooms");
// Do not change the lines above.

/**
 * getRoomByDinosaurName()
 * ---------------------
 * Return the name of the room where the given dinosaur can be found. If the dinosaur does not exist in the `dinosaurs` list or cannot be found in any room, return an error message that says so.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {Object[]} rooms - An array of room objects. See the `data/rooms.js` file for an example of the input.
 * @param {string} dinosaurName - The name of the dinosaur.
 * @returns {string} The name of the room where the dinosaur can be found. Alternatively, an error message.
 *
 * EXAMPLE:
 *  getRoomByDinosaurName(dinosaurs, rooms, "Tyrannosaurus");
 *  //> "Roberts Room"
 *
 * EXAMPLE:
 *  getRoomByDinosaurName(dinosaurs, rooms, "Pterodactyl");
 *  //> "Dinosaur with name 'Pterodactyl' cannot be found."
 */
// function getRoomByDinosaurName(dinosaurs, rooms, dinosaurName) {
//   for(let i = 0; i < dinosaurs.length; i++){
//     // checks if dinosaurName is not in dinosaurs
//     if(dinosaurs[i].name !== dinosaurName){
//       return `Dinosaur with name '${dinosaurName}' cannot be found.`
//     }else{
//       if(dinosaurs[i].dinosaurId !== rooms[i].dinosaurs){
//         return `Dinosaur with name '${dinosaurName}' cannot be found in any room.`
//       }
//       return rooms[i].name
//     }
//   }
// }

// solution
function getRoomByDinosaurName(dinosaurs, rooms, dinosaurName){

  for(let i = 0; i < dinosaurs.length; i++){
    if(dinosaurs[i].name === dinosaurName){
      let dinoId = dinosaurs[i].dinosaurId
      for(let j = 0; j < rooms.length; j++){
        if(rooms[j].dinosaurs.includes(dinoId)){
          return rooms[j].name
        }
      }
      return `Dinosaur with name '${dinosaurName}' cannot be found in any rooms.` 
    }
  }
  return `Dinosaur with name '${dinosaurName}' cannot be found.`
}

// function getRoomByDinosaurName(dinosaurs, rooms, dinosaurName){
//   let dinoId

//   for(let i = 0; i < dinosaurs.length; i++){
//     if(dinosaurs[i].name !== dinosaurName){
//       return `Dinosaur with name '${dinosaurName}' cannot be found.` 
//     }else{
//       dinoId = dinosaurs[i].dinosaurId
//       if(rooms[i].dinosaurs === dinoId){
//         return rooms[i].name
//       }
//       return `Dinosaur with name '${dinosaurName}' cannot be found in any room.`
//     }
//   }
// }

// function getRoomByDinosaurName(dinosaurs, rooms, dinosaurName) {

//   for(let i = 0; i < dinosaurs.length; i++){
//     if(dinosaurs[i].name !== dinosaurName){
//       return `Dinosaur with name '${dinosaurName}' cannot be found.`
//     }else{
//       for(let j = 0; j < rooms.length; j++){
//         if(rooms[j].dinosaurs !== dinosaurs[i].dinosaurId){
//           return `Dinosaur with name '${dinosaurName}' cannot be found in any room.`
//         }
//       }
//       return rooms[j].name
//     }
// }

// create loop
// if dinosaurName doesnt exist in dinosaurs return error string
// search through dinosaurs for name and get the dinosaurId
//
// use dinosaurId to search through rooms.dinosaur to get name of the room
//return a string
/**
 * getConnectedRoomNamesById()
 * ---------------------
 * Returns an array of strings, where each string is the name of a room connected to the given room. If a room ID cannot be found, an error message is returned.
 *
 * @param {Object[]} rooms - An array of room objects. See the `data/rooms.js` file for an example of the input.
 * @param {string} id - A unique room identifier.
 * @returns {string|string[]} An array of room names, or an error message.
 *
 * EXAMPLE:
 *  getConnectedRoomNamesById(rooms, "aIA6tevTne");
 *  //> ["Ticket Center"]
 *
 * EXAMPLE:
 *  getConnectedRoomNamesById(rooms, "A6QaYdyKra");
 *  //> [
      "Entrance Room",
      "Coat Check Room",
      "Ellis Family Hall",
      "Kit Hopkins Education Wing"
    ]
 */

// function getConnectedRoomNamesById(rooms, id){
//   //begin loop
//   for(let i = 0; i < rooms.length; i++){
//     let connectedTo = []
//     let finalReturn = []
//     // checks if id exist within rooms
//     if(rooms[i].roomId === id){
//      // push id's of connected rooms into connectedTo
//       connectedTo.push(rooms[i].connectsTo)
//      // new loop to search through connectedTo
//       for(let j = 0; j < connectedTo.length; j++){
//         //if id's in connectedTo match id's in rooms
//         if(connectedTo[j].includes(rooms[i].roomId)){
//          //push names of those that match into finalReturn 
//           finalReturn.push(rooms[i].name)
//         }
//       }
//       return "Room with ID of 'incorrect-id' could not be found."
//     } 
//   } 
//   return `Room with ID of '${id}' could not be found.`
// }

// function getConnectedRoomNamesById(rooms, id){
// let idArray = false
// let finalReturn = []
//   for(let i = 0; i < rooms.length; i++){
//     if(rooms[i].roomId === id){
//       idArray = rooms[i].connectsTo
//     }    
// }
//   if(idArray === false ){
//     return `Room with ID of '${id}' could not be found.`
//   }

//   for(let j = 0; j < idArray.length; j++){
//     for(let i = 0; i < rooms[i].roomId; i++){
//       if(idArray[j] === rooms[i].roomId){
//         finalReturn.push(rooms[i].name)

//       }
//     }
//   }
//   return finalReturn
// }




function getConnectedRoomNamesById(rooms, id){
  let finalReturn = []
  let exist = false
  for(let i = 0; i < rooms.length; i++){
    if(rooms[i].roomId === id){
      exist = true
    }
    if(rooms[i].connectsTo.includes(id)){
      finalReturn.push(rooms[i].name)
    }
  }
  if(exist === true && finalReturn.length > 0){
    return finalReturn 
  }else if(exist === false){
    return `Room with ID of '${id}' could not be found.`
  }
}












// use loop
// using loop search through rooms to see if id exist
// if Id doesnt exist in rooms return error
// if it does exist return rooms connected to it
// returns an array of strings

module.exports = {
  getRoomByDinosaurName,
  getConnectedRoomNamesById,
};
