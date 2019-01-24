import { ILogger } from "./ILogger";
import { LogEntry } from "./LogEntry";
import { LoggerManager } from "./LoggerManager";
import { LogLevel } from "./LogLevelEnum";

export class Logger implements ILogger {

  private loggingAction: (entry: LogEntry) => void;

  private loggerName: string;

  Source: string;

  public constructor(loggerName: string) {
    this.loggerName = loggerName;
    this.loggingAction = LoggerManager.writeLogEntry;
  }

  public Log(level: LogLevel, message: string, memberName: string, error: Error = null) {
    let entry = new LogEntry(level, message, this.loggerName);
    entry.timeStamp = new Date(Date.now()).toISOString();
    entry.memberName = memberName;
    entry.exception = error;
    entry.source = this.Source;
    this.loggingAction(entry);
  }

  public Debug(message: string, memberName: string = ""):void {
    this.Log(LogLevel.Debug, message, memberName);
  }

  public Error(exception: Error, memberName: string = "") :void{
    this.Log(LogLevel.Error, exception.message, memberName);
  }

  public Info(message: string, memberName: string = ""):void {
    this.Log(LogLevel.Info, message, memberName);
  }

  public Warn(message: string, memberName: string = ""):void{
    this.Log(LogLevel.Warn, message, memberName);
  }

  public CallInfo(memberName: string, logLevel = LogLevel.Info): void {
    this.Log(logLevel, '', memberName);
  }

}