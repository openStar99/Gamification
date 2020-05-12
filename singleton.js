var Lazysingle = (function(){
  var _instance = null
  function single(){
    return {
      publicMethod:function(){console.log('publicMethod')},
      publicProperty:1
    }
  }

  return function(){
    if(!_instance){
      _instance = single()
    } 
    return _instance
  }
})()
exports.Lazysingle = Lazysingle