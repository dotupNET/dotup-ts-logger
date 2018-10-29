import { ILogger } from "./ILogger";

export class ConsoleLogger implements ILogger {
  constructor(private name: string) { }

  debug(message: string) {
    this.log(message, 'debug', name);
  }

  info(message: string) {
    this.log(message, 'info', name);
  }

  warn(message: string) {
    this.log(message, 'warn', name);
  }

  error(message: string) {
    this.log(message, 'error', name);
  }

  log(message: string, level: string, name: string) {
    console.log(`${name} - ${level} - ${message}`);
  }

}