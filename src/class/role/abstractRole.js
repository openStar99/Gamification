const  { RoleFactory } = require('./RoleFactory.js')
RoleFactory.Role = function(){
  this.Iam = 'Role'
}
RoleFactory.Role.prototype = {
  getRoleName: function(){
    return new Error('抽象方法不能调用')
  }
}

module.exports = RoleFactory