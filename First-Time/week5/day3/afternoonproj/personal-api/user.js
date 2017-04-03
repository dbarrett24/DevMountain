var user = {
    name: null,
    location: null,
    occupations: [],
    hobbies: [
        {
        name: 'Computer Science',
        type: 'Technical'
        },
        {
        name: 'Basketball',
        type: 'Sports'
        },
        {
        name: 'Motion Design',
        type: 'Creative'
        }
    ],
    family: [
        {
        name: 'Dennis',
        relation: 'Father',
        gender: 'Male'
        },
        {
        name: 'Linda',
        relation: 'Mother',
        gender: 'Female'
        },{
        name: 'Kelsey',
        relation: 'Spouse',
        gender: 'Female'
        }
    ],
    restaurants: [
        {
        name: 'TacoBell',
        type: 'Mexican',
        rating: 9.5
        },
        {
        name: 'Chipotle',
        type: 'Mexican',
        rating: 10
        },
        {
        name: 'Maria Bonitas',
        type: 'Mexican',
        rating: 1200
        }
    ]
};
module.exports = user;

