import funcb from './b'

export default () => {
  const printf = (ms = 0) => new Promise((resolve, reject) => {
    setTimeout(() => {
      funcb()
      resolve(ms)
    }, ms)
  })
  // ;(async function () {
  //   console.log('begin')
  //   const ms = await printf(1000)
  //   console.log(ms)
  // })();
  ;(function () {
    let arrayLike = {
      0: 0, 1: 1, 2: 2, length: 3
    }
    console.log(Array.from(arrayLike))
  })();
}
