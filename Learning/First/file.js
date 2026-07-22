import { log } from 'console'
import fs from 'fs'


// Write


const Text = 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the gre'
const Text2 = 'Async : But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the gre'

// Sync...
// overwrite

// fs.writeFileSync("./file.txt", `${Text}`)

// Async..
// overwrite

// fs.writeFile("./test.txt", `${Text2}`, (e) => console.log())




// Read


// Sync...

const r = fs.readFileSync('./contacts.txt', 'utf8')
// console.log(r);


// Async...

// it doesn't return anything so the output of below code is undefined

// const r2 = fs.readFile('./contacts.txt', 'utf8', (e) => {})
// console.log(r2);

fs.readFile('./contacts.txt', 'utf8', (e, result) => {
    if (e) {
        // console.log("Error :",e);
    } else{
        // console.log(result);  
    }
})




// Append


// Sync...
// not overwrite

// fs.appendFileSync("./contacts.txt", '\nSarah Black, 555-0998, sarah.w@blabla.com, 907 Birch Ct')


// Async...
// not overwrite

// fs.appendFile("./contacts.txt", '\nKali Black, 675-1234, kali.k@blabla.com, 987 New York Ct', (e) => {})




// Copy


// fs.cpSync("./contacts.txt", './copy.txt')



// Delete


// fs.unlinkSync("./contacts.txt")




// Stats


// console.log(fs.statSync("./contacts.txt"));


// check it is file

// console.log(fs.statSync("./contacts.txt").isFile());



// mkdir


// fs.mkdirSync("./my-docs")

// also

// fs.mkdirSync("./my-docx/Folder/File", {recursive: true})



// And Many More

