document.addEventListener("DOMContentLoaded", function () {
    const userTable = document.getElementById("userTable");

    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((users) => {
            users.forEach((user) => {
                const row = document.createElement("tr");

                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                    <td>${user.address.city}</td>
                    <td>
                        <button class="btn-edit">Edit</button>
                        <button class="btn-delete">Delete</button>
                    </td>
                `;

                userTable.appendChild(row);
            });
        })
        .catch((error) => console.error("Error fetching data:", error));
});
