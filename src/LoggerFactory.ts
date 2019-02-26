import { ILogger } from "./ILogger";
import { Logger } from "./Logger";
import { LoggerManager } from "./LoggerManager";

export namespace LoggerFactory {

  export function createLogger(name: string): ILogger {
    const newLogger = new Logger(name);
    return newLogger;
  }

}