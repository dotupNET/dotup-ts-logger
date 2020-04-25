import { LogEntry } from "../LogEntry";
import { LogLevel } from "../LogLevelEnum";
import { ILogWriter } from "./ILogWriter";

export class CallbackLogWriter implements ILogWriter {

  logLevel: LogLevel;

  constructor(private callback: (message: LogEntry) => void) {
  }

  write(entry: LogEntry): void {
    this.callback(entry);
  }

}