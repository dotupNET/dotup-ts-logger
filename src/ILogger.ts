import { LogLevel } from "./LogLevelEnum";

export interface ILogger {
  debug(message: string, memberName?: string): void;
  info(message: string, memberName?: string): void;
  warn(message: string, memberName?: string): void;
  error(exception: Error, memberName?: string): void;
  // log(message: string, level: string, name: string): void;
  callInfo(memberName: string): void;
  log(level: LogLevel, message: string, memberName: string, error: Error): void;


}