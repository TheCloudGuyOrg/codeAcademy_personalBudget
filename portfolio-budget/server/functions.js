//Function: createId
const createId = (data) => {
    const latestRecord = data[data.length - 1];
    const newId = latestRecord.id + 1;
    return newId;
};

//Function: findById
const findById = (data, recordId) => {
    const record = data.find((item) => item.id === parseInt(recordId));
    return record;
  };

//Function: deleteById  
const deleteById = (data, recordId) => {
    var index = data.findIndex(function (item) {
      return item.id === parseInt(recordId);
    });
    data.splice(index, 1);
    return data;
  };

  module.exports = {createId, findById, deleteById};