import { isOnAndroid } from './platform'

enum LogLevel {
  DEBUG,
  INFO,
  WARN,
  ERROR,
}

class Logger {
  debug(msg: string) {
    this.log(msg, LogLevel.DEBUG)
  }

  info(msg: string) {
    this.log(msg, LogLevel.INFO)
  }

  warn(msg: string) {
    this.log(msg, LogLevel.WARN)
  }

  error(msg: string) {
    this.log(msg, LogLevel.ERROR)
  }

  private log(msg: string, level: LogLevel) {
    switch (level) {
      case LogLevel.DEBUG:
        // eslint-disable-next-line no-console
        console.debug(msg)
        break
      case LogLevel.INFO:
        // eslint-disable-next-line no-console
        console.info(msg)
        break
      case LogLevel.WARN:
        console.warn(msg)
        break
      case LogLevel.ERROR:
        console.error(msg)
        break
    }

    if (isOnAndroid())
      window.Android.log(msg, level)
  }
}

export const logger = new Logger()
