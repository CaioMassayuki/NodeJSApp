import Winston from 'winston'
import { format } from 'logform'


const Logger = Winston.createLogger({
  format: format.combine(format.timestamp(), format.prettyPrint()),
  transports: [
    new Winston.transports.Console({ name: 'console-logger', format: Winston.format.cli() }),
    new Winston.transports.File({ name: 'file-logger', filename: 'application.log' }),
  ]
  // exceptionHandlers: [
  //   new Winston.transports.Console({ format: Winston.format.prettyPrint() }),
  //   new Winston.transports.File({
  //     filename: 'exceptions.log',
  //     format: Winston.format.json(),
  //   }),
  // ],
})

export default Logger
