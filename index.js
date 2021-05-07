const newTask = (title, description) => {
  const task = {
    title,
    description,
    complete: false,

    completeTask: function() {
      this.complete = true;
    },

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

  }
  return task
}


newTask("Clean Cat Litter"); // task 0
newTask("Do Laundry"); // task 1


const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState();
task1.completeTask();
task1.logState();

console.log(tasks);
console.log(task1.title);


