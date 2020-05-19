exports.seed = function (knex) {
    // 000-cleanup.js alread cleaned out all tables
  
    const users = [
      {
        username: "jimmy",
        password: "newtron",
        role: 1,
      },
      {
        username: "bond",
        password: "007.",
        role: 1,
      },
      {
        username: "rodger",
        password: "rabbit",
        role: 2,
      },
      {
        username: "simba",
        password: "noworries",
      },
      {
        username: "batman",
        password: "bruce123",
      },
    ];
  
    return knex("users").insert(users);
  };
  