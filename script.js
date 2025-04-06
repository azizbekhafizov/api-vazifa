let userId = 11; // JSONPlaceholderda 10 tagacha user bor edi, yangi userlar uchun 11 dan boshlaymiz

document.addEventListener("DOMContentLoaded", function () {
    const userTable = document.getElementById("userTable");

    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((users) => {
            users.forEach((user) => {
                addUserRow(user);
            });
        })
        .catch((error) => console.error("Error fetching data:", error));
});

// Foydalanuvchini qo‘shish uchun funksiya
function addUserRow(user) {
    const userTable = document.getElementById("userTable");
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${user.id}</td>
        <td class="name">${user.name}</td>
        <td class="username">${user.username}</td>
        <td class="email">${user.email}</td>
        <td class="city">${user.address?.city || user.city}</td>
        <td>
            <button class="btn btn-sm btn-primary btn-edit">Edit</button>
            <button class="btn btn-sm btn-danger btn-delete">Delete</button>
        </td>
    `;

    // Delete tugmasi
    row.querySelector(".btn-delete").addEventListener("click", () => {
        row.remove();
    });

    // Edit tugmasi
    row.querySelector(".btn-edit").addEventListener("click", () => {
        const name = row.querySelector(".name");
        const username = row.querySelector(".username");
        const email = row.querySelector(".email");
        const city = row.querySelector(".city");

        const newName = prompt("Enter new name:", name.textContent);
        const newUsername = prompt("Enter new username:", username.textContent);
        const newEmail = prompt("Enter new email:", email.textContent);
        const newCity = prompt("Enter new city:", city.textContent);

        if (newName) name.textContent = newName;
        if (newUsername) username.textContent = newUsername;
        if (newEmail) email.textContent = newEmail;
        if (newCity) city.textContent = newCity;
    });

    userTable.appendChild(row);
}

// Add tugmasi bosilganda ishlaydigan funksiya
function addFn() {
    const name = prompt("Enter name:");
    const username = prompt("Enter username:");
    const email = prompt("Enter email:");
    const city = prompt("Enter city:");

    if (name && username && email && city) {
        const newUser = {
            id: userId++,
            name,
            username,
            email,
            city,
        };
        addUserRow(newUser);
    } else {
        alert("Barcha maydonlarni to'ldiring!");
    }
}
    