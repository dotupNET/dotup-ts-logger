import { LogEntry } from "./LogEntry";
import { LogLevel } from "./LogLevelEnum";
import { ILogWriter } from './writer/ILogWriter';

export class LoggerManager {

  static LogWriter: Array<ILogWriter> = new Array<ILogWriter>();

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
    LoggerManager.LogWriter.push(logger);
  }

  public DetachLogWriter(logger: ILogWriter): void {
    var index = LoggerManager.LogWriter.indexOf(logger);
    if (index > -1) {
      LoggerManager.LogWriter.splice(index, 1);
    }
  }

  public static IsLevel(level1: LogLevel, level2: LogLevel): boolean {
    return ((level1 & level2) == level2);
  }

  public static writeLogEntry(message: LogEntry): void {
    const writers = LoggerManager.LogWriter.filter(item => {
      return LoggerManager.IsLevel(item.LogLevel, message.logLevel);
    });
    writers.forEach(element => {
      try {
        element.Write(message);
      } catch (error) {
        console.error(error.message);
      }
    });
  }

}
