import { LogEntry } from "./LogEntry";
import { LogLevel } from "./LogLevelEnum";
import { ILogWriter } from "./writer/ILogWriter";

const LogWriter: ILogWriter[] = new Array<ILogWriter>();

export class LoggerManager {

  //       /* static */ constructor() {

  //   // TODO: lock is not supported at this time
  //   if ((LoggerConfiguration == null)) {
  //     LoggerConfiguration = new LoggerConfiguration();
  //   }

  //   if ((Factory == null)) {
  //     Factory = new LoggerFactory();
  //   }

  // }

  // public static get LoggerConfiguration(): LoggerConfiguration {
  // }
  // public static set LoggerConfiguration(value: LoggerConfiguration) {
  // }

  // public static get Factory(): ILoggerFactory {
  // }
  // public static set Factory(value: ILoggerFactory) {
  // }

  public AttachLogWriter(logger: ILogWriter): void {
    LogWriter.push(logger);
  }

  public DetachLogWriter(logger: ILogWriter): void {
    const index = LogWriter.indexOf(logger);
    if (index > -1) {
      LogWriter.splice(index, 1);
    }
  }

  public static IsLevel(level1: LogLevel, level2: LogLevel): boolean {
    return ((level1 & level2) == level2);
  }

  public static writeLogEntry(message: LogEntry): void {
    const writers = LogWriter.filter(item => {
      return LoggerManager.IsLevel(item.logLevel, message.logLevel);
    });
    writers.forEach(element => {
      try {
        element.write(message);
      } catch (error) {
        console.error(error.message);
      }
    });
  }

}
