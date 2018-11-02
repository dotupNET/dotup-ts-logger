import { LogLevel } from "./LogLevelEnum";

export class LogEntry {

  constructor(public logLevel: LogLevel, public message: string, public context: string)
  {
 //   try(level, message.toString(), this.loggerName);//
  }

  memberName: string;
  
  source: string;

  timeStamp: string;

  data: Object;

  exception: Error;
}
