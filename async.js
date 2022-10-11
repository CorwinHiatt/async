import fs, { readFile } from 'fs'
const filename = 'file.txt'

//this is a callback
fs.readFile(filename,'utf8',function (err,data) {
console.log(data)
})
/
// this is a promise(.then)
fs.readFile(filename,'utf8').then((err,data) => {
console.log(data)
})

//async...await

async function showText() {
    const data = await fs.promises.readFile(filename, 'utf8');
    return data
}

console.log(await showText())
