import { ILogger } from "./ILogger";
import { Logger } from "./Logger";

export class LoggerFactory {

  CreateLogger(name: string): ILogger {
    return new Logger(name);
  }

}