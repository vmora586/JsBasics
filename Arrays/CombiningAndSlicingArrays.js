const first = [1, 2, 3];
const second = [4, 5, 6];

//for combining arrays we use the concat method

const combined = first.concat(second);
console.log(combined);

//for dividing arrays we use the "slice" method. (int start, int finish index)

const sliced = combined.slice(2, 4);
console.log(sliced);

//if you exclude the end index, you will get all the elements starting from the starting index
const anotherSliced = combined.slice(2);
console.log(anotherSliced);

//if we exclude the starting index, this function will copy all the original values
const copiedArray = combined.slice();
console.log(copiedArray);

//Note: this works only with value types. If you use Reference types, it will storage not the values
//but the reference memory location to this. BE CAREFOUL on that!!!!.

const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

const slicedCourses = courses.slice(0, 1);
courses[0].name = "c"; //updating original value.
console.log(slicedCourses);
