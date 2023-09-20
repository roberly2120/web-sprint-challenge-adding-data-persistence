exports.seed = function(knex, Promise) {
  return knex('projects').insert([   
    {project_name: "Project 1", project_description: "description 1"},
    {project_name: "Project 2", project_description: "description 2"},
    {project_name: "Project 3", project_description: "description 3"},
    {project_name: "Project 4", project_description: "description 4"}
  ]);
};
