function cookieAuthMiddleware(req,res,next){

    if(req.session.userId || req.cookies.userCookie)
    {   
        console.log("entre aca la cookie vale: "+ req.cookies.userCookie)
        console.log("entre aca session vale antes: "+ req.session.userId)

        if(req.cookies.userCookie)
        {
            req.session.userId = req.cookies.userCookie;
            console.log("entre aca session vale dsps: "+ req.session.userId)
        }
        // req.session.userID = req.session.userID ? req.session.userID : req.cookies.userCookie
    }
    else{
        console.log("no hay ni cookie ni session");
    }

    next();
}

module.exports = cookieAuthMiddleware;