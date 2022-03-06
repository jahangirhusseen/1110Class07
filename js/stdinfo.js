const stdinfo = [
    {
    id          : 1,
    name        : 'Adil',
    age         : 15,
    location   :'mirpur'
    },
    {
        id          : 2,
        name        : 'Abrar',
        age         : 20,
        location   :'banani'
    },
    {
        id          : 3,
        name        : 'Yakin',
        age         : 20,
        location   :'rampura'
    },    
    {
        id          : 4,
        name        : 'Abdullh',
        age         : 20,
        location   :'amtoli'
    },
    {
        id          : 5,
        name        : 'Zunayed',
        age         : 20,
        location   :'kolabagan'
        },
        {
            id          : 6,
            name        : 'Yakin',
            age         : 20,
            location   :'banani'
            },  
            {
                id          : 7,
                name        : 'Kaled',
                age         : 20,
                location   :'banani'
            },
            {
                id          : 8,
                name        : 'Mustaq',
                age         : 20,
                location   :'banani'
                }, 
                {
                    id          : 9,
                    name        : 'Yakin',
                    age         : 20,
                    location   :'banani'
                    },
                    {
                        id          : 10,
                        name        : 'Yakin',
                        age         : 20,
                        location   :'mirpur'
                        }, 
];

stdinfo.forEach( (data) => {
   if(data.location == 'mirpur' || data.location == 'banani' ){
    console.log(`
    ID No    =   ${data.id}
    Name     =   ${data.name}
    Age      =   ${data.age}
    Location =   ${data.location}
    `);
   } 
} );