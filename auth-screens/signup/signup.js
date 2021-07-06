const currentUser = localStorage.getItem('currentUser')
const parsedUser = currentUser && JSON.parse(currentUser)

if (parsedUser) {
    location.href = '../../dashboard/dashboard.html'
}


let signup = (e) => {
    console.log('event:', e)
    e.preventDefault()

    const username = document.getElementById('username').value
    const email = document.getElementById('inputEmail').value
    const password = document.getElementById('inputPassword').value
    
    const confirmPassword = document.getElementById('reInputPassword').value

    if (!email || !password || !confirmPassword || !username) {
        swal("ERROR", "Please enter all the fields", "error");
    } else {
        swal({
            title: "AWESOME!",
            text: "You have successfully created an account!",
            icon: "success",
        }).then((value) => {
            location.href = '../../auth-screens/login/login.html'
        });
    }

    const userData = {
        email,
        password,
        username
    }

    var users = localStorage.getItem("allUsers")
    var parsedUsers = users && JSON.parse(users)

    parsedUsers && parsedUsers.push(userData)
    let dataToStore = parsedUsers ? parsedUsers : [userData]
    console.log('data to store :', dataToStore);
    localStorage.setItem("allUsers", JSON.stringify(dataToStore))


}