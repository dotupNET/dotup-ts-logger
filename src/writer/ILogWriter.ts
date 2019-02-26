import { LogLevel } from '../LogLevelEnum';
import { LogEntry } from '../LogEntry';

export interface ILogWriter {

  LogLevel: LogLevel;

  Write(entry: LogEntry): void;
}