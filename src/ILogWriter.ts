import { LogLevel } from "./LogLevelEnum";
import { LogEntry } from "./LogEntry";

export interface ILogWriter {

  logLevel: LogLevel;

  write(entry: LogEntry): void;
}