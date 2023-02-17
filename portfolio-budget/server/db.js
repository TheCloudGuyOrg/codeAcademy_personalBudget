// Starter evenlopes object
const envelopes = [
    {
      id: 1,
      title: "Rent",
      budget: 1000,
    },
    {
      id: 2,
      title: "Groceries",
      budget: 300,
    },
    {
      id: 3,
      title: "Entertainment",
      budget: 400,
    },
  ];
  
  module.exports = envelopes;
  
/*
CREATE TABLE envelopes (
  id integer PRIMARY KEY NOT NULL CHECK (id > 0),
  title varchar(50) NOT NULL UNIQUE, 
  budget money NOT NULL
);
*/
