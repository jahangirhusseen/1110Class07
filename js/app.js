

// const student = {
//     id      :   001,
//     name    :   'Akib',
//     age     :   20,
//     location:   'BD',
// }
// console.log(`My Name is ${student.name} & I'm ${student.age} Years old. live in ${student.location}`);


// const devsStd = [
//     {
//     id          : 001,
//     name        : 'Akib',
//     age         : 20,
//     developer   :'MERN stack'
//     },
//     {
//     id          : 002,
//     name        : 'Babu',
//     age         : 21,
//     developer   :'MERN stack'
//     },
//     {
//         id          : 003,
//         name        : 'Babu',
//         age         : 21,
//         developer   :'MERN '
//         },
// ];
// for (let i = 0; i < devsStd.length; i++) {
//     console.log(devsStd[i].developer);
// }


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
    if(data.id == ''){
        console.log(`
    ID No    =   ${data.id}
    Name     =   ${data.name}
    Age      =   ${data.age}
    Devs     =   ${data.developer}
    Salary   =   ${data.salary}
    Location   = ${data.location}
    `);
    }
    total = total + data.salary;
    
} );
console.log(`Total Salary = $${total}`);