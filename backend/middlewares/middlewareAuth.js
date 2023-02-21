const checkAuth = (req, res, next) => {
    console.log("Desde middleware de prueba");
    next();
}

export {checkAuth}