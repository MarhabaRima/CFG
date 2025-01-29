function banner(bannerContents) {
    console.log('____________________')
    console.log(bannerContents)
    console.log('____________________')
}

function makeStart(name) {
    return `Hello ${name}`
}

function makeEnd(name) {
    return `Goodbye ${name}`
}

const inputName = 'Ben'
const hello = makeStart(inputName)
banner(hello)
const goodbye = makeEnd(inputName)
banner(goodbye)
// good practice to have functions at the top of the file
// then variables and then the code that runs the functions
