// import 'core-js'
class Main {
  say () {
    // let isIn = [1, 2, 3].includes(1);
    // let map = new Map()
    // map.set('a', 'a')
    // console.log('hi isIn: ', isIn)
  }
  async fetch () {
    const printf = (ms = 0) => new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(ms)
      }, ms)
    })
    const ms = await printf(1000)
    console.log(ms)
  }
}
let main = new Main()
main.fetch()
