import { LogEntry } from "../LogEntry";
import { LogLevel } from "../LogLevelEnum";
import { ILogWriter } from "./ILogWriter";

export class ConsoleLogWriter implements ILogWriter {

  logLevel: LogLevel;

  static WithAllLevels(): ConsoleLogWriter {
    const result = new ConsoleLogWriter();
    result.logLevel = LogLevel.Debug |
      LogLevel.Info |
      LogLevel.Warn |
      LogLevel.Error |
      LogLevel.Fatal;

    return result;
  }

  write(entry: LogEntry): void {
    const level = LogLevel[entry.logLevel];
    console.log(`${entry.timeStamp} - ${entry.context}:${entry.memberName} - ${entry.message} - ${level}`);
  }

}