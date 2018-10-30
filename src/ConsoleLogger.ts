import { ILogger } from "./ILogger";

export class ConsoleLogger implements ILogger {
  constructor(private loggerName: string) { }

  debug(message: string) {
    this.log(message, 'debug', this.loggerName);
  }

  info(message: string) {
    this.log(message, 'info', this.loggerName);
  }

  warn(message: string) {
    this.log(message, 'warn', this.loggerName);
  }

  error(message: string) {
    this.log(message, 'error', this.loggerName);
  }

  log(message: string, level: string, loggerName: string) {
    console.log(`${loggerName} - ${level} - ${message}`);
  }

}