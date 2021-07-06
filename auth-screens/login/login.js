const currentUser = localStorage.getItem('currentUser')
const parsedUser = currentUser && JSON.parse(currentUser)

if (parsedUser) {
    location.href = '../../dashboard/dashboard.html'
}



let login = (e) => {
    console.log('event:', e)
    e.preventDefault()

    const email = document.getElementById('inputEmail').value
    const password = document.getElementById('inputPassword').value

    if (!email || !password) {
        return alert('Please enter all the fields')
    }

    let allUsers = localStorage.getItem('allUsers')
    let parsedUsers = allUsers && JSON.parse(allUsers)

    const currentUser = parsedUsers.find(user => user.email == email && user.password == password)
    console.log('currentUser :', currentUser)

    if (currentUser) {
        localStorage.setItem('currentUser', JSON.stringify(currentUser))
        swal({
            title: "AWESOME!",
            text: "You have successfully logged in!",
            icon: "success",
        }).then((value) => {
            location.href = '../../dashboard/dashboard.html'
        });

    } else {
        swal("ERROR", "Wrong email or password", "error");
    }
  }