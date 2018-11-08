import { ILogWriter } from "./ILogWriter";
import { LogEntry } from "./LogEntry";
import { LogLevel } from "./LogLevelEnum";

export class ConsoleLogWriter implements ILogWriter {

  logLevel: LogLevel;

  write(entry: LogEntry): void {
    const level = LogLevel[entry.logLevel];
    console.log(`${entry.timeStamp} - ${entry.context} - ${level} - ${entry.message}`);
  }

}