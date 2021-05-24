/**
 * As we saw on previows lections, objects can have functions as attributes.
 * person={
 * name:victor,
 * lastName:mora,
 * fullName=function(){
 *  return `${person.name} ${person.lastName}`
 * }
 * }
 * console.log(person.fullName());
 * However, with the above approach, we have two problems:
 * This method is read only.
 * If we want to call it, we must use method invocation convention (by using parenthesis).
 */

const person = {
  firstName: "victor",
  lastName: "Mora",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

person.fullName = "testing setter"; //comment this line to check original get method value return
console.log(person);
