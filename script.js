const requestURL = 'https://jsonplaceholder.typicode.com/users';
const button23 = document.querySelector('.button23');


button23.addEventListener('click', () => {
    const input23 = document.querySelector("#input23").value;
    async function fetchUsers() {
        try {
            const response = await fetch(requestURL)
            const users = await response.json();
            const userList = document.querySelector('#userList');

            userList.innerHTML = '';
            
            users.forEach(user => {
                const listItem = document.createElement('li');
                const gg = user[input23];
                listItem.textContent = `${gg}`;
                userList.appendChild(listItem);
            })
        } catch (error) {
            throw new Error('error:', error);
        }
    }
    
    fetchUsers()
})

