
const star= require('./src/class/role/abstractRole.js')
const star2= require('./src/class/role/RoleFactory.js')
const { Lazysingle } = require('./singleton.js')
// star.RoleFactory.Role = function(){
//   this.Iam = 'Role'
// }
// star.RoleFactory.Role.prototype.getRoleName =  function(){
//     return new Error('抽象方法不能调用')
  
// }
var EXPERT = function(exp){
  this.name = 'expert'
  this.exp = exp
}

star(EXPERT,'Role')
EXPERT.prototype.getExp = function(){
  return this.exp
}
EXPERT.prototype.getRoleName = function(){
  return this.exp
}

var expert1 = new EXPERT(1)
var expert2 = new EXPERT(999)
console.log(expert1,expert2)
//console.log(Singleton === Lazysingle)
console.log(star2.Singleton() === Lazysingle())
//console.log(RoleFactory === RoleFactory2)