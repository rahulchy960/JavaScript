
const course = {
    name : "DSA and CP",
    instructor : "Sandeep Jain",
    price : 4999
};

const {instructor} = course;
console.log(instructor)

const {instructor : ins} = course;   // De-Structuring
console.log(ins);


{                     // JSON Object format
    "name" : "Rahul",
    "age" : 23,
    "city" : "Kolkata"
}

[                // Array of JSON objects
    {},
    {},
    {}
]