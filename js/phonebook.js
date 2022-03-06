const phonebook = [
    {
    name        : 'Akib',
    pnumber     : '01741159851'
    },
    {
        name        : 'hasan',
        pnumber     : '01741989796'
    },
    {
        name        : 'Mehedi',
        pnumber     : '01719929125'
        },
    {
        name        : 'Afzol',
        pnumber     : '01778124578'
    },
    {
        name        : 'mamun',
        pnumber     : '01730635241'
    },
    {
    name        : 'Namul',
    pnumber     : '01798147485'
    },
    {
    name        : 'Amdad',
    pnumber     : '01678962541'
    },
    {
        name        : 'Iqbal',
        pnumber     : '01878965874'
    },
    {
        name        : 'Afaza',
        pnumber     : '01303789654'
    },
    {
        name        : 'Rana',
        pnumber     : '01902963258'
    },
    {
        name        : 'Jony',
        pnumber     : '01596783741'
    },

    
];

phonebook.forEach( (data) => {
    console.log(`
    Name     =   ${data.name}
    Number  =   ${data.pnumber}
   
    `);
    
} );
