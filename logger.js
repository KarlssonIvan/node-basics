import chalk from 'chalk'
export class Logger {
    static log (message) {
        console.log(chalk.blue.inverse(message));
    }

    static warrning (message) {
        console.warn(chalk.keyword('orange')(message))
    }

    static error (message) {
        console.error(chalk.red(message))
    }

    static success (message) {
        console.info(chalk.green(message))
    }
}