import { CallbackLogWriter } from '../src/writer/CallbackLogWriter';
import { LogLevel } from '../src/LogLevelEnum';
import { LogEntry } from '../src/LogEntry';

describe('CallbackLogWriter', () => {


  it('should create an instance', () => {
    const writer = new CallbackLogWriter(entry => {
      expect(entry instanceof LogEntry).toBeTruthy();
      expect(entry.message).toBe('Nice');
      expect(entry.context).toBe('No context');
    });
    const logEntry = new LogEntry(LogLevel.Info, 'Nice', 'No context');

    writer.Write(logEntry);
  });

});
