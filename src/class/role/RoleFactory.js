
const Singleton = require('../../../singleton.js')
var RoleFactory = function(subclass,superclass){
  if(typeof RoleFactory[superclass] === 'function'){
    function F(){}
    //F.prototype = RoleFactory[superclass].prototype   
    F.prototype = new RoleFactory[superclass]()   
    //subclass.constructor = subclass
    subclass.prototype = new F()
    subclass.prototype.constructor = subclass
  }else{
    throw new Error('不存在此抽象类')
  }
}

exports.RoleFactory =  RoleFactory
exports.Singleton = Singleton.Lazysingle