import { ILogger } from "./ILogger";
import { Logger } from "./Logger";
import { LoggerManager } from "./LoggerManager";

export class LoggerFactory {

  CreateLogger(name: string): ILogger {
    const newLogger = new Logger(name);
    return newLogger;
  }

}