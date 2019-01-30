const compile = require('../compile');
module.exports = function(data) {
    return function(req, res, next){
    res.write(compile(__dirname + '/header.hbs', data));
    next();
    }
}