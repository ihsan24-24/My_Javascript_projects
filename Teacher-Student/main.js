let names = "";
let noteQuery = (name, names) => {
  let index = names.search(name);
  if (index != -1) {
    console.log(names.slice(index, index + name.length + 6));
  } else {
    console.log("no records found...");
  }
};

let giveNote = () => {
  let count = prompt("How many student data you will enter : ");
  let name = "";
  for (let i = 1; i <= count; i++) {
    //
    name = prompt(`${i}. student  name : `);
    names += "      " + name + " = "; // When adding a name to the list of names, we added a space before it so that it does not appear adjacent to the previous record.

    let count2 = Number(prompt(`How many notes will you enter for ${name} : `));
    let not = 0;
    let avg = 0;
    let sum = 0;
    for (let j = 1; j <= count2; j++) {
      not = Number(prompt(`Enter ${j}. note : `));
      sum += not;
    }
    avg = sum / count2;
    names += avg;
    console.log(names);
  }
};

while (true) {
  let menu = +prompt(
    "1 - Teacher menu\n2 - Student menu\n0 - exit  (In order for the grades to appear in the student menu, grades must be entered from the teacher menu.)"
  );
  if (menu == 0) {
    break;
  } else if (menu == 1) {
    giveNote();
  } else if (menu == 2) {
    let name = prompt("Enter name to you search : ");
    noteQuery(name, names);
  }
}
