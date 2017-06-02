
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

exports.anatomy = function(req, res) {
  res.render('anatomy',{});
}

exports.habitat = function(req, res) {
  res.render('habitat',{});
}

exports.behavior = function(req, res) {
  res.render('behavior',{});
}

exports.mating = function(req, res) {
  res.render('mating',{});
}

exports.communication = function(req, res) {
  res.render('communication',{});
}

exports.popculture = function(req, res) {
  res.render('popculture',{});
}

