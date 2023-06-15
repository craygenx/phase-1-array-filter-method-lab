// Code your solution here
function findMatching(drivers, name) {
    let newArray = drivers.filter(driver => driver.toLowerCase() == name.toLowerCase());
    return newArray;
}

function fuzzyMatch(drivers, substring) {
    let newArray = drivers.filter(driver => driver.slice(0,2) == substring);
    return newArray;
}

function matchName(drivers, names) {
    let newArray = drivers.filter(driver => driver.name === names);
    return newArray;
}
// let drivers = ['Bobby', 'Sammy', "Sally", 'Annette']
// console.log(fuzzyMatch(drivers, 'br'));
