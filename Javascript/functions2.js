function dashBanner(message) {
    console.log('__________________________')
    console.log(message)
    console.log('__________________________')
}

const userName = 'Sarah'

function makeStart(name) {
    return `My name is ${name}`
}

function makeEnd(name) {
    return `It was nice to meet you, ${name}`
}

const intro = makeStart(userName)
const conclusion = makeEnd(userName)

dashBanner(intro)
dashBanner(conclusion)

