import { ILogger } from "./ILogger";
import { ConsoleLogger } from "./ConsoleLogger";

export class LoggerFactory {

  CreateDebugLogger(name: string): ILogger {
    return new ConsoleLogger(name);
  }

}