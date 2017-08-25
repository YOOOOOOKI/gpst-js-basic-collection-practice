'use strict';

function find(collection, ch) {
    let result = null;
    collection.forEach(function (item) {
        if (item.key === ch)
            result = item;
    });
    return result;
}

function summarize(collection) {
    let result = [];
    collection.forEach(function (item) {
        let obj = find(result, item)
        if (obj) {
            obj.count++;
        } else {
            result.push({key: item, count: 1});
        }
    });
    return result;
}

function includes(collection, ch) {
    if (collection.includes(ch))
        return true;
    else
        return false;
}

function discount(collection, promotionItems) {
    let result = [];
    collection.forEach(function (item) {
        let key = item.key;
        let count = item.count;
        if (includes(promotionItems, key)) {
            count = count - Math.floor(count / 3);
        }
        result.push({key, count});
    });
    return result;
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let summarized = summarize(collectionA);
    return discount(summarized, objectB.value);
}