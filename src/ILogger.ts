import { LogLevel } from "./LogLevelEnum";

export interface ILogger {
  Debug(message: string, memberName?: string): void;
  Info(message: string, memberName?: string): void;
  Warn(message: string, memberName?: string): void;
  Error(exception: Error, memberName?: string): void;
  // log(message: string, level: string, name: string): void;
  CallInfo(memberName: string): void;
  Log(level: LogLevel, message: string, memberName: string, error: Error): void;


}