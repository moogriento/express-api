const userController = require('./../controllers/user');

function userRoutes(express, app) {
  const router = express.Router();

  router.get('/:id', userController.getUser);
  router.post('/', userController.insertUser);
  router.put('/:id', userController.updateUser);
  router.delete('/:id', userController.deleteUser);

  app.use('/api/user', router);
}

module.exports = userRoutes;
