// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
  description: description,
  complete: false,
  completeTask: function(){
    this.complete = true;
  },
  logTaskState: function(task){
    console.log(`${this.title} is ${this.complete? " ": " not "} complete.`)
  }
  };
  return task;
};

const task1 = newTask('Homework', 'Finish my flipping HW.');
task1.logTaskState();
task1.completeTask();
task1.logTaskState();

