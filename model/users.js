const db = require ('../database/db.js');

//authentification login
const authLogin = (body,callback) => {
    //request body
    const{username, password} = body;

    db.query("SELECT * from users where = ? and password =?" ,
    [username,password],
    function(err,result){
        if(err){
            callback(true,err);
        }else{
            callback(false, result)
        }
    })
    
}

module.exports = {
    authLogin
}