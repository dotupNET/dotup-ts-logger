import { LogLevel } from "./LogLevelEnum";
import { LogEntry } from "./ILogEntry";

export interface ILogWriter {

  logLevel: LogLevel;

  write(entry: LogEntry): void;
}