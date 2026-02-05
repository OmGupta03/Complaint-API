function authMiddleware(req, res, next) {
  console.log("Auth checked");
  next();
}

export default authMiddleware;