const chalk = require('chalk');
const moment = require('moment');


module.exports = class Logger {
    static get now() {
        return new moment().format('DD/MM/YY hh:mm a');
    }

    static log(colour, title, message, error) {
        console.log(
            colour(chalk.bold(`[${this.now}] (${title}) `) + message + `${error ? ' ' + error : ''}`)
        );
    }

    static success(title, message, error) {
        return this.log(chalk.green, title, message, error)
    }

    static info(title, message, error) {
        return this.log(chalk.blue, title, message, error)
    }

    static warning(title, message, error) {
        return this.log(chalk.magenta, title, message, error)
    }

    static error(title, message, error) {
        return this.log(chalk.red, title, message, error)
    }

    static fatal(title, message, error) {
        return this.log(chalk.white, title, message, error)
    }
}