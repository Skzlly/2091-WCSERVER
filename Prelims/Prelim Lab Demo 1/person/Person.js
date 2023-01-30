module.exports = function (firsName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullname = function () {
    return this.firstName + ' ' + this.lastName;
  }
}