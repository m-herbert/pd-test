var userName;
var getName = function(){
console.log('test');
userName= document.getElementById('input-name').value;
console.log(userName)
document.getElementById('show-name').innerHTML = userName;
}
var userRobotResponse;
var robotResponse = function() {
console.log('test');
userRobotResponse= document.getElementById('input-robot').value;
userRobotResponse = userRobotResponse.toLowerCase();
console.log (userRobotResponse);
if (userRobotResponse==='yes') {
  document.getElementById('feedback').innerHTML= 'You are lying';

}
else if (userRobotResponse==="no") {
  document.getElementById('feedback').innerHTML= 'I believe you';
}
else {
  document.getElementById('feedback').innerHTML= 'Not answered in correct format';
}
}
