"use strict";
/**
 * interface -- lets you describe how a thing should look and also implement it
 * eg - class person implement user
 */
const user = {
    firstname: "Vasant",
    lastname: "Negi",
    age: 25,
};
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    return false;
}
console.log(isLegal(user));
