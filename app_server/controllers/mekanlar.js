module.exports.anasayfa = function(req, res){
  res.render('mekanlar-liste', { title: 'Anasayfa' });
};
module.exports.mekanbilgisi = function(req, res){
  res.render('mekan-detay', { title: 'mekanbilgisi' });
}
module.exports.mekanbilgisi1 = function(req, res){
  res.render('mekan-detay1', { title: 'mekanbilgisi' });
}
module.exports.mekanbilgisi2 = function(req, res){
  res.render('mekan-detay2', { title: 'mekanbilgisi' });
}
module.exports.yorumekle = function(req, res){
  res.render('yorum-ekle', { title: 'yorumekle' });
};