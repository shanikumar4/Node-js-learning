const express = require('express');
const users = require('./MOCK_DATA.json');
const fs = require('fs');
const app = express();
const PORT = 9000;

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next)=>{
    console.log("Hello from middleware");
    req.myUserName = "Shani.dev";
    next();
});


app.use((req, res, next)=>{
    console.log("Hello from middleware 2", req.myUserName);
    next();
});


//Routes
app.get('/users', (req, res) => {
    const html = `
    <ul>
    ${users.map(user => `<li>${user.first_name}</li>`).join('')}
    </ul>
    `;
    res.send(html);
    });

// REST API
app.get('/api/users', (req, res) => {
    res.setHeader('myName', 'Shani');
    return res.json(users);
});

app
.route('/api/users/:id').get((req, res) => { 
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
})
.patch((req, res) => {
    const id = Number(req.params.id);
    const body = req.body;

    const index = users.findIndex((user) => user.id === id);

    if (index === -1) {
        return res.status(404).json({ status: 'error', message: 'User not found' });
    }

    // update existing user
    users[index] = { ...users[index], ...body };

    // save into file
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
        if (err) {
            return res.status(500).json({ status: 'error', message: 'Failed to update user' });
        }

        return res.json({ status: 'success', message: 'User updated successfully' });
    });


})
.delete((req, res) => {
    const id = Number(req.params.id);
    const index = users.findIndex((user) => user.id === id);
    if(!users.some((user) => user.id === id)) {
        return res.status(404).json({ status: 'error', message: 'User not found' });
    }
    else {
        users.splice(index, 1);

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
        if (err) {
            return res.status(500).json({ status: 'error', message: 'Failed to delete user' });
        }

        return res.json({ status: 'success', message: 'User deleted successfully' });
    });
    }

});




app.post('/api/users', (req, res) => { 
    const body = req.body;
    users.push({...body, id : users.length + 1});
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ status: 'error', message: 'Failed to save user' });
        }
    return res.json({ status: 'success', id: users.length}); 
});
});


app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`) })