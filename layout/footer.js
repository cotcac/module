const compile = require('../compile');
module.exports = function(req, res, next){
    res.write(compile(__dirname + '/footer.hbs'));
    res.end();
}