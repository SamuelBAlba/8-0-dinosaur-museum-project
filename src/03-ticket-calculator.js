/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleTicketData` variable below to gain access to tickets data. This data is pulled from the `data/tickets.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all tickets.
*/
const exampleTicketData = require("../data/tickets");
// Do not change the line above.

/**
 * calculateTicketPrice()
 * ---------------------
 * Returns the ticket price based on the ticket information supplied to the function. The `ticketInfo` will be in the following shape. See below for more details on each key.
 * const ticketInfo = {
    ticketType: "general",
    entrantType: "child",
    extras: ["movie"],
  };
 *
 * If either the `ticketInfo.ticketType` value or `ticketInfo.entrantType` value is incorrect, or any of the values inside of the `ticketInfo.extras` key is incorrect, an error message should be returned.
 *
 * @param {Object} ticketData - An object containing data about prices to enter the museum. See the `data/tickets.js` file for an example of the input.
 * @param {Object} ticketInfo - An object representing data for a single ticket.
 * @param {string} ticketInfo.ticketType - Represents the type of ticket. Could be any string except the value "extras".
 * @param {string} ticketInfo.entrantType - Represents the type of entrant. Prices change depending on the entrant.
 * @param {string[]} ticketInfo.extras - An array of strings where each string represent a different "extra" that can be added to the ticket. All strings should be keys under the `extras` key in `ticketData`.
 * @returns {number} The cost of the ticket in cents.
 *
 * EXAMPLE:
 *  const ticketInfo = {
      ticketType: "general",
      entrantType: "adult",
      extras: [],
    };
    calculateTicketPrice(tickets, ticketInfo);
    //> 3000
 *  
 * EXAMPLE:
 *  const ticketInfo = {
      ticketType: "membership",
      entrantType: "child",
      extras: ["movie"],
    };
    calculateTicketPrice(tickets, ticketInfo);
    //> 2500

 * EXAMPLE:
 *  const ticketInfo = {
      ticketType: "general",
      entrantType: "kid", // Incorrect
      extras: ["movie"],
    };
    calculateTicketPrice(tickets, ticketInfo);
    //> "Entrant type 'kid' cannot be found."
 */
// function calculateTicketPrice(ticketData, ticketInfo) {
// let genChild = 2000  
// let genAdult = 3000
// let genSenior = 2500
// // let childMem = genChild - 500
// // let memDiscount = 200
// // general admission
// if(ticketInfo.ticketType === 'general'){
//   // adult general
//   if(ticketInfo.entrantType === 'adult'){
//     if(ticketInfo.extras.includes('movie')){
//       genAdult += 1000
//     }else if(ticketInfo.extras.includes('education')){
//       genAdult += 1200
//     }else if(ticketInfo.extras.includes('terrace')){
//       genAdult += 1000
//     }
//     return genAdult
//     // child general
//   }else if(ticketInfo.entrantType === 'child'){
//     if(ticketInfo.extras.includes('movie')){
//       genChild += 1000
//     }else if(ticketInfo.extras.includes('education')){
//       genChild += 1000
//     }else if(ticketInfo.extras.includes('terrace')){
//       genChild += 500
//     }
//     return genChild
//     // senior general
//   }else if(ticketInfo.entrantType === 'senior'){
//     if(ticketInfo.extras.includes('movie')){
//       genSenior += 1000
//     }else if(ticketInfo.extras.includes('education')){
//       genSenior += 1200
//     }else if(ticketInfo.extras.includes('terrace')){
//       genSenior += 1000
//     }
//     return genSenior
//   }
//   // otherwise return error/ only 3 options for entrantType
//   return `Entrant type '${ticketInfo.entrantType}' cannot be found.`
 
//   // membership admission
// } else if(ticketInfo.ticketType === 'membership'){
//   // adult membership
//   if(ticketInfo.entrantType === 'adult'){
//     if(ticketInfo.extras.includes('movie')){
//       genAdult += 1000
//     }else if(ticketInfo.extras.includes('education')){
//       genAdult += 1200
//     }else if(ticketInfo.extras.includes('terrace')){
//       genAdult += 1000
//     }
//     genAdult -= 200
//     return genAdult
//   }else if(ticketInfo.entrantType === 'child'){
//     if(ticketInfo.extras.includes('movie')){
//       genChild += 1000
//     }else if(ticketInfo.extras.includes('education')){
//       genChild += 1000
//     }else if(ticketInfo.extras.includes('terrace')){ 
//       genChild += 500
//     }
//     genChild -= 500
//     return genChild
//   }else if(ticketInfo.entrantType === 'senior'){
//     if(ticketInfo.extras.includes('movie')){
//       genSenior += 1000
//     }else if(ticketInfo.extras.includes('education')){
//       genSenior += 1200
//     }else if(ticketInfo.extras.includes('terrace')){
//       genSenior += 1000
//     }
//     genSenior -= 200
//     return genSenior
//   }
// } else{
//   return `Ticket type '${ticketInfo.ticketType}' cannot be found.`
// }
// }



function calculateTicketPrice(ticketData, ticketInfo) {
  let genChild = 2000  
  let genAdult = 3000
  let genSenior = 2500

  if(ticketInfo.ticketType === 'general'){
    if(ticketInfo.entrantType === 'adult'){
      for(let i = 0; i < ticketInfo.extras.length; i ++){
        if(ticketInfo.extras[i].includes('movie')){
          genAdult += 1000
        }else if(ticketInfo.extras[i].includes('education')){
          genAdult += 1200
        }else if(ticketInfo.extras[i].includes('terrace')){
          genAdult += 1000
        }else{
          return `Extra type '${ticketInfo.extras[i]}' cannot be found.`
        }

      }
      return genAdult
    
    }else if(ticketInfo.entrantType === 'child'){
      for(let i = 0; i < ticketInfo.extras.length; i ++){
        if(ticketInfo.extras[i].includes('movie')){
          genChild += 1000
        }else if(ticketInfo.extras[i].includes('education')){
          genChild += 1000
        }else if(ticketInfo.extras[i].includes('terrace')){
          genChild += 500
        }else{
        return `Extra type '${ticketInfo.extras[i]}' cannot be found.`
        }
      }
      return genChild
    }else if(ticketInfo.entrantType === 'senior'){
      for(let i = 0; i < ticketInfo.extras.length; i ++){
        if(ticketInfo.extras[i].includes('movie')){
          genSenior += 1000
        }else if(ticketInfo.extras[i].includes('education')){
          genSenior += 1200
        }else if(ticketInfo.extras[i].includes('terrace')){
          genSenior += 1000
        }else{
          return `Extra type '${ticketInfo.extras[i]}' cannot be found.`
        }
      }
      return genSenior
    }else{
     return `Entrant type '${ticketInfo.entrantType}' cannot be found.`
    }
  }else if(ticketInfo.ticketType === 'membership'){
    if(ticketInfo.entrantType === 'adult'){
      genAdult -= 200

      for(let i = 0; i < ticketInfo.extras.length; i++){
        if(ticketInfo.extras[i].includes('movie')){
          genAdult += 1000
        }else if(ticketInfo.extras[i].includes('education')){
          genAdult += 1200
        }else if(ticketInfo.extras[i].includes('terrace')){
          genAdult += 1000
        }else{
          return `Extra type '${ticketInfo.extras[i]}' cannot be found.`
        }
      }
      return genAdult
      // error
    }else if(ticketInfo.entrantType === 'child'){
      genChild -= 500

      for(let i = 0; i < ticketInfo.extras.length; i++){
        if(ticketInfo.extras[i].includes('movie')){
          genChild += 1000
        }else if(ticketInfo.extras[i].includes('education')){
          genChild += 1000
        }else if(ticketInfo.extras[i].includes('terrace')){
          genChild += 500
        }else{
          return `Extra type '${ticketInfo.extras[i]}' cannot be found.`
        }
      }
        return genChild
      // error
    }else if(ticketInfo.entrantType === 'senior'){
      genSenior -= 200

      for(let i = 0; i < ticketInfo.extras.length; i++){
        if(ticketInfo.extras[i].includes('movie')){
          genSenior += 1000
        }else if(ticketInfo.extras[i].includes('education')){
          genSenior += 1200
        }else if(ticketInfo.extras[i].includes('terrace')){
          genSenior += 1000
        }else{
          return `Extra type '${ticketInfo.extras[i]}' cannot be found.`
        } 
      }
      return genSenior

    }else{
      return `Entrant type '${ticketInfo.entrantType}' cannot be found.`
    }
  }else{
    return `Ticket type '${ticketInfo.ticketType}' cannot be found.`
  }
}










// two types of tickets general or membership
// 3 add on options
  


// will be looping through tickets ??
// returns 3 different erros
// 1. ticketType error 2. entrantType error & extras error
// two base prices for each ticket (general or membership)
// membership discount: childMem = 500 memDiscount = 200 (subtract from general )
// 3 add on posibilities (terraceChild = 500 & terraceAdd = 100)
// eduChild = 1000 eduAdd = 1200
// movieAdd = 1000
// create finalAddOn
// returns final price of ticket in cents



/**
 * purchaseTickets()
 * ---------------------
 * Returns a receipt based off of a number of purchase. Each "purchase" maintains the shape from `ticketInfo` in the previous function.
 *
 * Any errors that would occur as a result of incorrect ticket information should be surfaced in the same way it is in the previous function.
 * 
 * NOTE: Pay close attention to the format in the examples below and tests. You will need to have the same format to get the tests to pass.
 *
 * @param {Object} ticketData - An object containing data about prices to enter the museum. See the `data/tickets.js` file for an example of the input.
 * @param {Object[]} purchases - An array of objects. Each object represents a single ticket being purchased.
 * @param {string} purchases[].ticketType - Represents the type of ticket. Could be any string except the value "extras".
 * @param {string} purchases[].entrantType - Represents the type of entrant. Prices change depending on the entrant.
 * @param {string[]} purchases[].extras - An array of strings where each string represent a different "extra" that can be added to the ticket. All strings should be keys under the `extras` key in `ticketData`.
 * @returns {string} A full receipt, with each individual ticket bought and the total.
 *
 * EXAMPLE:
 *  const purchases = [
      {
        ticketType: "general",
        entrantType: "adult",
        extras: ["movie", "terrace"],
      },
      {
        ticketType: "general",
        entrantType: "senior",
        extras: ["terrace"],
      },
      {
        ticketType: "general",
        entrantType: "child",
        extras: ["education", "movie", "terrace"],
      },
      {
        ticketType: "general",
        entrantType: "child",
        extras: ["education", "movie", "terrace"],
      },
    ];
    purchaseTickets(tickets, purchases);
    //> "Thank you for visiting the Dinosaur Museum!\n-------------------------------------------\nAdult General Admission: $50.00 (Movie Access, Terrace Access)\nSenior General Admission: $35.00 (Terrace Access)\nChild General Admission: $45.00 (Education Access, Movie Access, Terrace Access)\nChild General Admission: $45.00 (Education Access, Movie Access, Terrace Access)\n-------------------------------------------\nTOTAL: $175.00"

 * EXAMPLE:
    const purchases = [
      {
        ticketType: "discount", // Incorrect
        entrantType: "adult",
        extras: ["movie", "terrace"],
      }
    ]
    purchaseTickets(tickets, purchases);
    //> "Ticket type 'discount' cannot be found."
 */
function purchaseTickets(ticketData, purchases) {
  let genAdult = 3000
  let genChild = 2000
  let genSenior = 2500

  for(let i = 0; i < purchases.length; i++){
    if(purchases[i].ticketType === 'general'){
      if(purchases[i].entrantType === 'adult'){
        for(let j = 0; j < purchases[i].extras.length; j++){
          if(purchases[i].extras[j].includes('movie')){
            genAdult += 1000
          }else if(purchases[i].extras[j].includes('education')){
            genAdult += 1200
          }else if(purchases[i].extras[j].includes('terrace')){
            genAdult += 1000
          }else{
            return `Extra type '${purchases[i].extras[j]}' cannot be found.`
          }
        }
      }else if(purchases[i].entrantType === 'child'){
        for(let j = 0; j < purchases[i].extras.length; j++){
          if(purchases[i].extras[j].includes('movie')){
            genChild += 1000
          }else if(purchases[i].extras[j].includes('education')){
            genChild += 1000
          }else if(purchases[i].extras[j].includes('terrace')){
            genChild += 500
          }else{
            return `Extra type '${purchases[i].extras[j]}' cannot be found.`
          }
        }
      }
    }
  }
}



// will return a string
// takes in an array of objects
// will need to loop throgh purchases
// Do not change anything below this line.
module.exports = {
  calculateTicketPrice,
  purchaseTickets,
};
