import { ConsoleLogWriter } from "./writer/ConsoleLogWriter";
import { LoggerManager } from "./LoggerManager";
import { LoggerFactory } from "./LoggerFactory";
import { LogLevel } from "./LogLevelEnum";

class LoggerTest {

  DoIt() {

    const conso = new ConsoleLogWriter();
    conso.logLevel = LogLevel.Debug |
      LogLevel.Info |
      LogLevel.Warn |
      LogLevel.Error |
      LogLevel.Fatal;

    const lm = new LoggerManager();
    lm.AttachLogWriter(conso);

    const logger = LoggerFactory.createLogger("test");

    logger.debug("DEBBBUUUG");
    logger.error(new Error("OHA"));
    logger.info("infooooo");
    // logger.log('');
    logger.warn("warning");

  }

}

const test = new LoggerTest();
test.DoIt();