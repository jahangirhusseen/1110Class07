 const devsStd = [
    {
    id          : 001,
    name        : 'Akib',
    age         : 25,
    developer   :'MERN stack',
    salary      :160,
    location   :'Us'
    },
    {
        id          : 2,
        name        : 'Ibrahim',
        age         : 23,
        developer   :'Laravel',
        salary      :190,
        location   :'BD'
},
    {
        id          : 003,
        name        : 'Khalil',
        age         : 24,
        developer   :'Django',
        salary      :190,
        location   :'USA'
    },
    {
        id          : 004,
        name        : 'Fahmid',
        age         : 27,
        developer   :'Golan',
        salary      :190,
        location   :'Uk'
    },
    {
        id          : 005,
        name        : 'Hussen',
        age         : 24,
        developer   :'WordPress',
        salary      :190,
        location   :'Bd'
    },
    {
        id          : 006,
        name        : 'Nabil',
        age         :  28,
        developer   :'Java',
        salary      :190,
        location   :'USA'
    },

    
];

let total = 0;
devsStd.forEach( (data) => {
    console.log(`
    ID No    =   ${data.id}
    Name     =   ${data.name}
    Age      =   ${data.age}
    Devs     =   ${data.developer}
    Salary   =   ${data.salary}
    Location   = ${data.location}
    `);
    total = total + data.salary;
    
} );
console.log(`Total Salary = $${total}`);