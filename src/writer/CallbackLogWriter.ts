import { LogEntry } from "../LogEntry";
import { LogLevel } from "../LogLevelEnum";
import { ILogWriter } from './ILogWriter';

export class CallbackLogWriter implements ILogWriter {

  LogLevel: LogLevel;

  constructor(private callback: (message: LogEntry) => void) {
  }

  Write(entry: LogEntry): void {
    this.callback(entry);
  }

}