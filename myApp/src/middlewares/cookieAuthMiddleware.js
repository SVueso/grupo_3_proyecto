function cookieAuthMiddleware(req,res,next){

    if(req.session.userID || req.cookies.userCookies)
    {
        req.session.userID = req.session.userID ? req.session.userID : req.cookies.userCookie
    }
    next();
}

module.exports = cookieAuthMiddleware;