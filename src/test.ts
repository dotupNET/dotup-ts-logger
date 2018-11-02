// import { ConsoleLogWriter } from "./ConsoleLogWriter";
// import { LoggerManager } from "./LoggerManager";
// import { LoggerFactory } from "./LoggerFactory";
// import { LogLevel } from "./LogLevelEnum";

// class LoggerTest {

//   DoIt() {

//     const conso = new ConsoleLogWriter();
//     conso.logLevel = LogLevel.Debug |
//     LogLevel.Info |
//     LogLevel.Warn |
//     LogLevel.Error |
//     LogLevel.Fatal;
//     LoggerManager.AttachLogWriter(conso);

//     const f = new LoggerFactory();
//     const logger = f.CreateLogger("Test");

//     logger.debug("DEBBBUUUG");
//     logger.error(new Error("OHA"));
//     logger.info('infooooo');
//     // logger.log('');
//     logger.warn('warning');

//   }

// }

// const test = new LoggerTest();
// test.DoIt();