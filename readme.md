# install

Use with expressjs.
```express --view hbs```

Create a module directory in root directory

```mkdir modules```

put layout and compile to modules directory.

# use

routes/index.js

```
var express = require('express');
var router = express.Router();

const layout = require('../modules/layout');
let body = (req1, res, next) =>{
   res.write('This is body \n');
   next();
}
const header = {
  title:'This is the title',
  url:'/url'
}

router.get('/', layout(header,body) );
module.exports = router;
```
# note

```
layout(header, body)

```
if layout with no arg it will show default template.

header is obj with. only title.
You should add more property for it.
```
const header = {
    title ="This is the title"
}
```

body is middleware with return next().
body should be array of multiple middleware.

