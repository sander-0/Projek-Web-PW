// Middleware untuk menangani error 404 (Not Found)
function errorNotFoundMiddleware(req, res, next) {
    res.status(404).json({
      message: 'Resource not found',
    });
  }
  
  // Middleware untuk menangani error server secara umum
  function errorServerMiddleware(err, req, res, next) {
    console.error(err);  // Log error di console untuk debugging
  
    // Jika ada error yang lebih spesifik
    const statusCode = err.status || 500;
    const message = err.message || 'Internal Server Error';
  
    res.status(statusCode).json({
      message,
      // Anda bisa menambahkan detail lebih lanjut untuk keperluan development
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    });
  }
  
  export default {
    errorNotFoundMiddleware,
    errorServerMiddleware,
  };
  