const Router = require('koa-router');
const postsCtrl = require('./posts.ctrl');

const posts = new Router();

posts.get('/karis/:id',postsCtrl.karis )
posts.get('/', postsCtrl.list);
posts.post('/', postsCtrl.write);
posts.get('/:id', postsCtrl.read);
posts.delete('/:id', postsCtrl.remove);
posts.patch('/:id', postsCtrl.update);

module.exports = posts;