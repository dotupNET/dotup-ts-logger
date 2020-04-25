import { LogLevel } from "./LogLevelEnum";

export class LogEntry {

  constructor(public logLevel: LogLevel, public message: string, public context: string) {
    //   try(level, message.toString(), this.loggerName);//
  }

  get LogLevel(): string {
    return LogLevel[this.logLevel];
  }

  memberName: string;

  source: string;

  timeStamp: string;

  data: Record<string, any>;

  exception?: Error;
}
