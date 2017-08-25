'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
   
     return collectionA.filter((element,index,arr)=>(collectionB.value.includes(element.key))).map(element=>element.key);
}
