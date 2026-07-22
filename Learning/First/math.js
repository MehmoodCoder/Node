
// Module

function add(a, b) {
    return a + b
}

function sub(a,b) {
    return a - b
}

// module.exports = 'Babar'

// module.exports = add

// if we write as it over write the export

// module.exports = sub




// Sol

// module.exports = {
//     add,
//     sub,
// }


// Also


// module.exports = {
//     Add: add,
//     Sub: sub,
// }




// In 26 we use export and import instead of this 


export const Add = (a,b) => a+b
export const Sub = (a,b) => a-b


// Old method

// exports.add = (a,b) => a + b
// exports.sub = (a,b) => a - b