function loggerMiddleware(req, res, next) {
  console.log("Logger Middleware");
  console.log(`${req.method} ${req.url}`);
  next();
}

export default loggerMiddleware;