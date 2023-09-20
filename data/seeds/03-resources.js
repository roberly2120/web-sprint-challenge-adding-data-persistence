exports.seed = function(knex, Promise) {
  return knex('resources').insert([   
    { resource_name: "resource 1", resource_description: "r-description 1"},
    { resource_name: "resource 2", resource_description: "r-description 2"},
    { resource_name: "resource 3", resource_description: "r-description 3"},
    { resource_name: "resource 4", resource_description: "r-description 4"},
    { resource_name: "resource 5", resource_description: "r-description 5"},
    { resource_name: "resource 6", resource_description: "r-description 6"},
    { resource_name: "resource 7", resource_description: "r-description 7"},
    { resource_name: "resource 8", resource_description: "r-description 8"},
  ]);
};
