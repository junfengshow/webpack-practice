import chalk from 'chalk'
import figures from 'figures'

const spread = (fn: any) => function (...rest: any) {
  // let args = arguments
  return fn([].slice.call(rest))
}
class Logger {
  static log = console.log.bind(console)

  static error = spread((messages: any) => {
    console.error(chalk.red.apply(chalk, [figures.cross].concat(messages)))
  })

  static info = spread((messages: Array<any>) => {
    console.info(chalk.cyan.apply(chalk, [figures.info].concat(messages)))
  })

  static warn  = spread((messages: any) => {
    console.warn(chalk.yellow.apply(chalk, [figures.warning].concat(messages)))
  })

  static success = spread((messages: any) => {
    console.log(chalk.green.apply(chalk, [figures.tick].concat(messages)))
  })
}

export {
  Logger
} 
