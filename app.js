new Vue({

  el: '#tasks',

  data: {

    tasks: [],
    newTask: ''

  },

  computed: {
    completions: function() {
      return this.tasks.filter(function(task) {
        return task.completed;
      });
    },

    remaining: function() {
      return this.tasks.filter(function(task) {
        return ! task.completed;
      });
    }
  },

  filters: {
    inProcess: function(tasks){
      return tasks.filter( function(task){
        return ! task.completed;
      });
    }
  },

  methods: {

    addTask: function(evt) {
      evt.preventDefault();

      if (! this.newTask) return;

      this.tasks.push({

        body: this.newTask,
        completed: false
      });

      this.newTask = '';
    },

    editTask: function(task) {
      //remove the task
      this.removeTask(task);
      //update the newTask input
      this.newTask = task.body;
      //focus the new task input
      this.$$.newTask.focus();
    },

    toggleTaskCompletion: function(task) {
      task.completed = ! task.completed;
    },

    completeAll: function() {
      this.tasks.forEach( function(task) {
        task.completed = true;
      });
    },

    removeTask: function(task) {

      this.tasks.$remove(task);
    },

    clearCompleted: function() {
        this.tasks = this.tasks.filter(function(task){
          return ! task.completed;
        });
    }

  }

});
