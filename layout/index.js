const header = require('./header.js');
const footer= require('./footer.js');
module.exports = function(head ={},body) {
    if(!body){
        const body = (req, res, next)=>{
            next();
        }
        return [header(head), body, footer];
    }
    return [header(head), body, footer];
}