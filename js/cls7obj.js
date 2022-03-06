const devs = [
    {
        name    : 'Fahmid',
        age     : 20,
        skill   : 'java',
        location: 'Dhaka',
        salary  :200,
    
    },
    {
        name    : 'Akbar',
        age     : 30,
        skill   : 'MERN',
        location: 'Barishal',
        salary  :200,
    
    },
    {
        name    : 'Nahid',
        age     : 20,
        skill   : 'PHP',
        location: 'Sylhet',
        salary  :200,
    
    },
    {
        name    : 'Farid',
        age     : 21,
        skill   : 'PHP',
        location: 'Dhaka',
        salary  :300,
    
    }
];

let salatyTotal = 0;
devs.map( data =>{
    if (data.location == 'Dhaka') {
        console.log(`
        Name    :${data.name}
        AGE     :${data.age}
        Skill   :${data.skill}
        Location:${data.location}
        Salary  :${data.salary}
        `);
        salatyTotal+= data.salary;
    }
})
console.log('Total Salary = ' +  salatyTotal);
// devs.forEach( data => console.log(data.name,data.age,data.skill,data.location,data.selary))
// for( x of devs){console.log(x.name,x.age)};
// for( y in devs){console.log(devs[y].name,devs[y].age)};
