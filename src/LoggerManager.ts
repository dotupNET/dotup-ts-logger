import { ILogWriter } from "./ILogWriter";
import { LogEntry } from "./LogEntry";
import { LogLevel } from "./LogLevelEnum";

export class LoggerManager {

  private static logWriter: Array<ILogWriter> = new Array<ILogWriter>();

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

  public AttachLogWriter(logger: ILogWriter) {
    LoggerManager.logWriter.push(logger);
  }

  public DetachLogWriter(logger: ILogWriter) {
    var index = LoggerManager.logWriter.indexOf(logger);
    if (index > -1) {
      LoggerManager.logWriter.splice(index, 1);
    }
  }

  public static IsLevel(level1: LogLevel, level2: LogLevel): boolean {
    return ((level1 & level2) == level2);
  }

  public static LogToWriter(message: LogEntry) {
    const writers = LoggerManager.logWriter.filter(item => {
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
