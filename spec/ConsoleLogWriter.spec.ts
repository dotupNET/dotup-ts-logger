import { ConsoleLogWriter } from '../src/ConsoleLogWriter';
import { LogLevel } from '../src/LogLevelEnum';
import { LogEntry } from '../src/LogEntry';

describe('ConsoleLogWriter',()=>{
  
  it('should create an instance', () => {
    const writer = new ConsoleLogWriter();
    expect(writer instanceof ConsoleLogWriter).toBeTruthy();
  });

});
