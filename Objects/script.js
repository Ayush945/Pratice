const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
];

const fifteen = inventors.filter(inventor => (inventor.year >= 1500));

const fullName = inventors.map(inventor => `${inventor.first}   ${inventor.last}`);

const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1)

const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year)
}, 0);

const oldest = inventors.sort((a, b) => {
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;
    return lastGuy > nextGuy ? -1 : 1;
});
console.table(oldest)