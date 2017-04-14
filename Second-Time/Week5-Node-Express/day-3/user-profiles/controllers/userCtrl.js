var users = [{
        name: 'Preston McNeil',
        password: 'password1',
        friends: ['Lindsey Mayer', 'Terri Ruff']
    },
    {
        name: 'Ryan Rasmussen',
        password: '$akgfl#',
        friends: ['Lindsey Mayer']
    },
    {
        name: 'Terri Ruff',
        password: 'hunter2',
        friends: ['Lindsey Mayer', 'Preston McNeil']
    },
    {
        name: 'Lindsey Mayer',
        password: '777mittens777',
        friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
    }
];

module.exports = {
    login: (req, res, next) => {
        console.log('req.query', req.body);

        var personLoggingIn = users.find((user, i) => {
            // console.log('users.name', users[i].name)
            // console.log('users.password', users[i].password)
            if(user.name === req.body.name && user.password === req.body.password){
                return user;
            }
        });
        console.log(personLoggingIn);
        if (personLoggingIn) {
            req.session.currentUser = personLoggingIn;
            // console.log(req.session);
            res.send({userFound: true});
        } else {
            // res.status(400).send('error');
            res.send({userFound: false});

        }
    }

}