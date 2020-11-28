/**
 * this is a function that enumurates an object using the impairative approach ( for in..... for of )
 * @param {*} obj 
 * @returns logs out the content of the object
 */


// this function returns the properties and the entire object content

function retrieveObjectData(obj){

    // this is strict type check to make sure that type of data passed into this function is an object
    if(Object.prototype.toString.call(checkedProp) === "[object Object]"){
        for(const prop in obj){
            console.log(prop, obj[prop]);
          }
    }else{
        return `not an object ${obj}`
    }
    
  }


// this function returns the properties and valuesof the nested object

function checkObject(obj){

    // this is strict type check to make sure that type of data passed into this function is an object
    if(Object.prototype.toString.call(obj) === "[object Object]"){

        for(const prop in obj){
            const checkedProp = obj[prop];
            if(Object.prototype.toString.call(checkedProp) === "[object Object]")
              for(const key in checkedProp){
                return(obj[prop]);
              }
          }

    }else{
        return `not an object ${obj}`
    }
   
  }

// this function logs out the content on any object passed into it using the object.keys from the declearative approach

  function checkObjectwithForOf(obj){
      // this is strict type check to make sure that type of data passed into this function is an object
    if(Object.prototype.toString.call(obj) === "[object Object]"){

        for(const prop of Object.keys(obj)){
            console.log(obj[prop]);
          }

    }

    return `not an object ${obj}`
    
  }


  /**
   * this function access the content of an object with the declearative approach
   */

  function objectDeclearativeApproach(obj){
    if(Object.prototype.toString.call(obj) === "[object Object]"){
        console.log(Object.entries(obj));

    }else{
        `return not an object ${obj}`
    }
    
  
  }
  
  objectDeclearativeApproach(myCustomGameConsole)

