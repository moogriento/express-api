const getUser = (request, response) => {
  console.log('GET USER', request.params.id);

  response.status(200).json({
    id: request.params.id
  });
};

const insertUser = (request, response) => {
  console.log('INSERT USER', request.body);

  response.status(200).json({
    message: 'inserted'
  });
};

const updateUser = (request, response) => {
  console.log('UPDATE USER', request.params.id);

  response.status(200).json({
    message: 'updated'
  });
};

const deleteUser = (request, response) => {
  console.log('DELETE USER', request.params.id);

  response.status(200).json({
    message: 'deleted'
  });
};

exports.getUser = getUser;
exports.insertUser = insertUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
