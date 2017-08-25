'use strict';


module.exports = function collectSameElements(collectionA, collectionB) {
   
     return collectionA.filter((x)=>(collectionB[0].includes(x)));
}
