exports.seed = function(knex, Promise) {
  return knex('tasks').insert([   
    { task_description: "task 1 description", task_notes: "notes 1", project_id: 1 },
    { task_description: "task 2 description", task_notes: "notes 2", project_id: 1 },
    { task_description: "task 3 description", task_notes: "notes 3", project_id: 1 },
    { task_description: "task 4 description", task_notes: "notes 4", project_id: 1 },
    { task_description: "task 1 project 2 description", task_notes: "notes 5", project_id: 2 }
  ]);
};
