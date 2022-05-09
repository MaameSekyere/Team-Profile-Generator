//create function -generateHtml
// teamInfo
// for loop through all teaminfo
// if statements for employee type

const generateHtml = (teamInfo) => {
  var html = "";
  console.log(teamInfo);
  for (var i = 0; i < teamInfo.length; i++) {
    if (teamInfo[i].officeNumber !== null) {
      html += `<div> 
    <p> ${teamInfo[i].getName()} </p>
    <p> ${teamInfo[i].getId()} </p>
    <p> ${teamInfo[i].getEmail()} </p>
    <p> ${teamInfo[i].getOfficeNumber()} </p>
 </div>
 `;
    }
    if (teamInfo[i].github !== null) {
      html += `<div> 
    <p> ${teamInfo[i].getName()}</p>
    <p> ${teamInfo[i].getId()} </p>
    <p> ${teamInfo[i].getEmail()} </p>
    <p> ${teamInfo[i].getGithub()} </p>
 </div>
 `;
    }
    if (teamInfo[i].school !== null) {
      html += `<div> 
    <p> ${teamInfo[i].getName()}</p>
    <p> ${teamInfo[i].getId()} </p>
    <p> ${teamInfo[i].getEmail()} </p>
    <p> ${teamInfo[i].getSchool()} </p>
 </div>
 `;
    }
  }
  return html;
};
module.exports = generateHtml;
