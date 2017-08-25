'use strict';



function find(collection, ch) {
    let result = null;
    collection.forEach(function (item) {
        if (item.key === ch)
            result = item;
    });
    return result;
}

module.exports = function countSameElements(collection) {
    let result = [];
    collection.forEach(function (item) {
        let obj = find(result, item)
        if (obj) {
            obj.count++;
        } else {
            result.push({key: item, count: 1});
        }
    })
    return result;
}