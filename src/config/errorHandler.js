class ErrorHandler {
  constructor(name, description, httpCode) {
    Error.call(this);
    Error.captureStackTrace(this);
    this.name = name;
    this.description = description;
    this.httpCode = httpCode;
  }
}
ErrorHandler.prototype.__proto__ = Error.prototype

export default ErrorHandler
