const currentUser = localStorage.getItem('currentUser')
const parsedUser = currentUser && JSON.parse(currentUser)

if (!parsedUser) {
    location.href = '../auth-screens/login/login.html'
}
console.log(parsedUser.userName)
document.getElementById('userName').innerText = `Welcome ${parsedUser.username}!`

let logout = () => {
    localStorage.setItem("currentUser", JSON.stringify(null))
    location.href = '../auth-screens/login/login.html'
}

var expenses = localStorage.getItem("allexpenses")
var parsedexpenses = expenses && JSON.parse(expenses)

console.log(parsedexpenses)

var html = "<table >";
for (var i = 0; i < parsedexpenses.length; i++) {
    html += "<tr>";
    html += "<td>" + parsedexpenses[i].id + "</td>";
    html += "<td>" + parsedexpenses[i].discription + "</td>";
    html += "<td>" + parsedexpenses[i].amount + "</td>";
    html += "<td>" + parsedexpenses[i].category + "</td>";
    html += "<td>" + parsedexpenses[i].createdOn + "</td>";
    html += "<td>" + parsedexpenses[i].action + "</td>";
    html += "</tr>";
}
html += "</table>";
console.log(html)
document.getElementById("dataShow").innerHTML = html;

