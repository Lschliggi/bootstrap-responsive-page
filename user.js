class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    toString() {
        return JSON.stringify({
            name: this.name,
            email: this.email
        });
    }
}

class UserManager {
    constructor() {
        this.users = [];
    }

    addUser(name, email) {
        const user = new User(name, email);
        this.users.push(user);
        console.log(user.toString());
        return user;
    }

    displayUsers() {
        const userList = document.getElementById('userList');
        userList.innerHTML = '';

        this.users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = `${user.name} - ${user.email}`;
            userList.appendChild(li);
        });
    }
}

const userManager = new UserManager();

const userForm = document.getElementById('userForm');
userForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    userManager.addUser(name, email);
    userManager.displayUsers();
    userForm.reset();
});