let _list = {
    autopush: require('./autopush/index'),
    boorudl: require('./boorudl/index'),
    help: require('./help/index'),
    version: require('./version/index'),
};

try {
    _list.musicdl = require('./musicdl/index');
} catch (e) {
    _list.musicdl = null;
}

module.exports = _list;