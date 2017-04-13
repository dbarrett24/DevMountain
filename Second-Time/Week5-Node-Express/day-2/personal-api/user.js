const user = {
    name: 'David Barrett',
    location: 'Orem, UT',
    occupations: ['BYU Science', 'Progrexion', '97thFloor', 'Leadgenix', ],
    hobbies: [{
            name: 'basketball',
            type: 'sports'
        },
        {
            name: 'after effects animation',
            type: 'creative'
        },
        {
            name: 'coding',
            type: 'creative'
        }
    ],
    family: [{
            name: 'Kelsey',
            relation: 'Spouse',
            gender: 'F'
        },
        {
            name: 'Connor',
            relation: 'Son',
            gender: 'M'
        }, {
            name: 'Dennis',
            relation: 'Father',
            gender: 'M'
        }
    ],
    restaurants: [{
            name: 'Rubios',
            type: 'SeaMexican',
            rating: 10
        },
        {
            name: 'Chipotle',
            type: 'Mexican',
            rating: 9
        },
        {
            name: 'Maria Bonitas',
            type: 'Mexican',
            rating: 10000
        }
    ]
}

module.exports = user;