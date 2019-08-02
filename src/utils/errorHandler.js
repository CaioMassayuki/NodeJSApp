class ErrorHandler {
  constructor(name, httpCode, description) {
    Error.call(this);
    Error.captureStackTrace(this);
    this.name = name;
    this.httpCode = httpCode;
    this.description = description;
  }
}
ErrorHandler.prototype.__proto__ = Error.prototype

export default ErrorHandler
