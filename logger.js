
export class Logger {
    static log (message) {
        console.log(message)
    }

    static warrning (message) {
        console.warn(message)
    }

    static error (message) {
        console.error(message)
    }

    static success (message) {
        console.info(message);
    }
}