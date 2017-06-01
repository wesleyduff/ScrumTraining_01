
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.images = function(req, res){
  res.render('imageList', {});
};

exports.diet = function(req, res) {
  res.render('diet', {});
}