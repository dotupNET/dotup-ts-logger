import { ILogger } from "./ILogger";
import { LogEntry } from "./ILogEntry";
import { LoggerManager } from "./LoggerManager";
import { LogLevel } from "./LogLevelEnum";

export class Logger implements ILogger {

  private loggingAction: (entry: LogEntry) => void;

  private loggerName: string;

  Source: string;


  public constructor(loggerName: string) {
    this.loggerName = loggerName;
    this.loggingAction = LoggerManager.LogToWriter;
  }



  public log(level: LogLevel, message: string, memberName: string, error: Error = null) {
    let entry = new LogEntry(level, message.toString(), this.loggerName);
    entry.timeStamp = new Date(Date.now()).toISOString();
    entry.memberName = memberName;
    entry.exception = error;
    entry.source = this.Source;
    this.loggingAction(entry);
  }

  public debug(message: string, memberName: string = ""):void {
    this.log(LogLevel.Debug, message, memberName);
  }

  public error(exception: Error, memberName: string = "") :void{
    this.log(LogLevel.Error, exception.message, memberName);
  }

  public info(message: string, memberName: string = ""):void {
    this.log(LogLevel.Info, message, memberName);
  }

  public warn(message: string, memberName: string = ""):void{
    this.log(LogLevel.Warn, message, memberName);
  }
}