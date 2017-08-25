'use strict';

'use strict';

function find(collection, ch) {
    let result = null;
    collection.forEach(function (item) {
        if (item.key === ch) {
            result = item;
        }
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

function split(item) {
    let array = item.split("-");
    return {key: array[0], count: parseInt(array[1], 10)};
}

function push(result, key, count) {
    while ((count--) > 0)
        result.push(key);
}

function expand(collection) {
    let result = [];
    collection.forEach(function (item) {
        if (item.length === 1) {
            result.push(item);
        } else {
            let {key, count} = split(item);
            push(result, key, count);
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
    let expandedArray = expand(collectionA);
    let summarizedArray = summarize(expandedArray);
    return discount(summarizedArray, objectB.value);
}