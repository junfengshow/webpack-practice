export default () => {
  const printf = (ms = 0) => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms)
    }, ms)
  })
  ;(async function () {
    console.log('begin')
    const ms = await printf(1000)
    console.log(ms)
  })();
}
