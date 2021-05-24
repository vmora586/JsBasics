/**
 * We use try-catch blocks when handling exception errors thrown by the application is
 * required.
 */

const person = {
  firstName: "victor",
  lastName: "Mora",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== "string") throw new Error("value is not a string");

    const parts = value.split(" ");
    if (parts.length != 2) throw new Error("Enter a firs and a last name");

    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

person.fullName = "";

try {
  console.log(person);
} catch (e) {
  alert(e);
}
