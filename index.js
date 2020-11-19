'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * 
 * identity: returns the value unchanged
 * 
 * @param {*} value: the value to be returned from this function
 * 
 * @returns {*} : the value unchanged 
 */
 
function identity(value) {
    return value;
}
module.exports.identity = identity;



/**
 * typeOf: takes any value and defines the data type
 * 
 * @param {Array, Number, Boolean, Undefined, String} anything: Any value
 * 
 * @returns {String}: returns a string with the data type
 * 
 */
 
 function typeOf(value){
    if (typeof value === 'string') {
       return 'string';
   } else if (Array.isArray(value)) {
       return 'array';
   } else if (value === null) {
       return 'null';
   } else if (typeof value === 'number') {
       return 'number';
   } else if (typeof value === 'object') {
       return 'object';
   } else if (typeof value === 'function') {
       return 'function';
   } else if (typeof value === 'boolean') {
       return 'boolean';
   } else if (typeof value === 'undefined') {
       return 'undefined';
   }  
};
module.exports.typeOf = typeOf;






/**
 * first: looks for the first occurrence of an element with an array 
 * 
 * @param {Array}: an array of numbers 
 * @param {Number}: numbers within the array
 * 
 * @returns {[]}: returns an empty array if no instace of the element occurs
 * @returns {Number}: returns the first instance of the number in the array
 * 
 */
 
 function first(array, number) {
    if (!Array.isArray(array) || number < 0) {
        return [];
    } 
    if (isNaN(number) || number === undefined || number === 1) {
        return array[0];
    } else {
    return array.slice(0, number);
    }    

}
module.exports.first = first;







/**
 * last: looks for the last element in an array
 * 
 * @param {Array}: an array of numbers 
 * @param {Number}: numbers within the array
 * 
 * @returns {[]}: returns an empty array if no instace of the element occurs
 * @returns {Number}: returns the last instance of the number in the array
 */
 
function last(array, number) {
    if (!Array.isArray(array) || number < 0) {
        return [];
    }
    if (isNaN(number) || number === undefined || number < 1) {
        return array[2];
    }
    if (number > array.length){
        return array;
    }
    else {
        return array.slice(array.length - number);
    }
};
module.exports.last = last;





/**
 * 
 * indexOf: gives the index of the element whose position we are trying to find
 * 
 * @param {Array}: an array of values
 * @param {Value}: values in the array
 * 
 * @return {returnValue}: the index of array that is the first occurrance of value
 * @return {-1}: if value is not in the array
 */
 
 function indexOf(array, value) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === value) { 
                let returnValue = i++;
            return returnValue;
        } 
    }
    return -1;
};
module.exports.indexOf = indexOf;






/**
 * contains: checks whether a particular value is given in the array
 * 
 * @param {Array}: an array of values
 * @param {value}: value in the array
 * 
 * @return {true}: if the array contains the value
 * @return {false}: if the array does not contain the value
 */
 
 function contains(array, value) {
        return (array.includes(value)  ? true : false);
};
module.exports.contains = contains;





/**
 * 
 * unique: checks whether an array is a duplicate or not
 * 
 * @param {Array}: an array of values 
 * 
 * @return {Array}: a new array of all elements from array with duplicates removed
 * 
 */

function unique(array) {
   return array.filter((a, b) => array.indexOf(a) === b);
};
module.exports.unique = unique;






/**
 * filter:
 * 
 * @param {Array}: an array of elements
 * @param {func}: a function to test for passing conditions in the array
 * 
 * 
 * @return {newArr}: returns an array consisting of elements which satisfy the condition.
 */
 
function filter(array, func){
 let newArr = [];
    each(array, function(ele, i, array) {

    if(func(ele, i, array)){
   newArr.push(ele);
}
    });
    return newArr;
};
module.exports.filter = filter;






/**
 * reject:  gives the elements which does not match the given condition
 * 
 * @param {Array}: an array of elements
 * @param {func}: a function to test for passing conditions in the array
 * 
 * @return {newArr}: returns an array of elements for which calling <function> returned false
 */
 
 function reject(array, func){

 let newArr = [];
    each(array, function(ele, i, array) {

    if(!func(ele, i, array)){
       newArr.push(ele);
    }

    });
    return newArr;
};
module.exports.reject = reject;







/**
 * partition: 
 * 
 * @param {Array}: an array of items
 * @param {func}: a function to test for passing conditions in the array
 * 
 * @return {2 arrays}: returns 2 new arrays seperated based on the func condition
 */
 
function partition(array, func) {
    return [filter(array, func), reject(array, func)]; 
};
module.exports.partition = partition;






/**
 * map: used to produce a new array of values by mapping each value in collection
 * 
 * @param {Collection}: list containing elements 
 * @param {func}: a function which is executed by taking each element of the collection
 * 
 * @return {newArr}: returns the object property value or array element value at the current position
 */
 
 function map(collection,func){
 let newArray = [];
 for(let i = 0; i < collection.length; i++){
  if(func(collection[i],[i],collection) === true){
   newArray.push(collection[i]);
  };
 }for (let key in collection ){
  newArray.push(func(collection[key], [key], collection));
 }return newArray;
}
module.exports.map = map;







/**
 * pluck: used when we need to extract a list of a given property
 * 
 * @param {Array}: array of elements
 * @param {Property}: property on which we need to extract
 * 
 * @return {array}: return an array containing the value of property for every element in array
 */
 
function pluck(array,property){
  return map(array, function(obj) {
        return obj[property];
    });
}
module.exports.pluck = pluck;





/**
 * every:  used to test all the elements of the list can pass the given test
 * 
 * @param {Collection}: a list of elements 
 * @param {Iterator}: tests the conditions
 * 
 * @return {true}: returns true if the return value of calling function for every element is true
 * @return {false}: returns false if even one element is false
 */
 
 function every(collection, iterator) {
        var check = iterator || identity;
    for (var i = 0;i < collection.length;i++) {
        if (! check(collection[i])) {
            return false;
        }
    }
    return true; 
 };
 module.exports.every = every;
 
 
 
 
 
 
 
 /**
  * some: used to find whether any value in the given list matches the given condition or not
  * 
  * @param {Collection}: a list of elements 
  * @param {Iterator}: tests the conditions
  * 
  * @return {false}: returns false if the return value of calling function for every element is false
  * @return {true}: returns true if even one element is true
  */
  
function some(collection, func){
    let result = false;
    each(collection, function(e, i, collection){
        if (typeof func !== 'function'){
            if (e){
            result = true;    
            }
        }
        else if (func(e, i, collection)){
            result = true;
        }
    });
    return result;
};
module.exports.some = some;







/**
 * reduce: takes a list of values into a single value
 * 
 * @param {Array}: array of values
 * @param {callBackFunction}: function which is used to take all the elements of the list
 * @param {initialValue}: the seed/ starting value
 * 
 * @return {result}: returns the value of the final function call
 */
 
function reduce(arr, action, seed) {
   
    if(seed !== undefined) {
        
        let result = seed;
        
        each(arr, function(element, index, array){

            result = action(result, element, index);
            
        });
        
        return result;
    } else {
        
        let result = arr[0];
        
        each(arr, function(element, index, array) {
            
            if (index !== 0) {
                
                result = action(result, element, index, array);
            }
        });
        return result;
    }
    
}
module.exports.reduce = reduce;






/**
 * extend: used to create a copy of all of the properties of the source objects over the destination object and return the destination object
 * 
 * @param {...obj}: list of objects
 * 
 * @return {newObject}:  returns a copy all of the properties of the source objects over the destination object, and return the destination object
 * 
 */
 
 function extend(...obj) {
    var newObject = {};
    return Object.assign(...obj); 
 };
 module.exports.extend = extend;