const hbs = require('hbs');
const fs = require('fs');
module.exports = (path, locals= {}) => {
    var template = fs.readFileSync(path,"utf8");
    return hbs.compile(template)(locals);
};
