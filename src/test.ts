import { ConsoleLogWriter } from "./ConsoleLogWriter";
import { LoggerManager } from "./LoggerManager";
import { LoggerFactory } from "./LoggerFactory";
import { LogLevel } from "./LogLevelEnum";

class LoggerTest {

  DoIt() {

    const conso = new ConsoleLogWriter();
    conso.LogLevel = LogLevel.Debug |
    LogLevel.Info |
    LogLevel.Warn |
    LogLevel.Error |
    LogLevel.Fatal;

    const lm = new LoggerManager();
    lm.AttachLogWriter(conso);

    const f = new LoggerFactory();
    const logger = f.CreateLogger("Test");

    logger.Debug("DEBBBUUUG");
    logger.Error(new Error("OHA"));
    logger.Info('infooooo');
    // logger.log('');
    logger.Warn('warning');

  }

}

const test = new LoggerTest();
test.DoIt();