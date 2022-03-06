const picnicinfo = [
    {
    name        : 'Akib',
    pnumber     : '01741159851',
    taka        : 500
    },
    {
        name        : 'hasan',
        pnumber     : '01741989796',
        taka        : 500
    },
    {
        name        : 'Mehedi',
        pnumber     : '01719929125',
        taka        : 500
        },
    {
        name        : 'Afzol',
        pnumber     : '01778124578',
        taka        : 500
    },
    {
        name        : 'mamun',
        pnumber     : '01730635241',
        taka        : 500
    },
    {
    name        : 'Namul',
    pnumber     : '01798147485',
    taka        : 500
    },
    {
    name        : 'Amdad',
    pnumber     : '01678962541',
    taka        : 500
    },
    {
        name        : 'Iqbal',
        pnumber     : '01878965874',
        taka        : 500
    },
    {
        name        : 'Afaza',
        pnumber     : '01303789654',
        taka        : 500
    },
    {
        name        : 'Rana',
        pnumber     : '01902963258',
        taka        : 500
    },
    {
        name        : 'Jony',
        pnumber     : '01596783741',
        taka        : 500
    },

    
];
let total = 0;
picnicinfo.forEach( (data) => {
    console.log(`
    Name    =   ${data.name}
    Number  =   ${data.pnumber}
    Taka    =   ${data.taka}
   
    `);
    total += data.taka;
    
} );
console.log(`Total Taka = $${total}`);
