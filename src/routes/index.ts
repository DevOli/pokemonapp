import express from 'express';
import path from 'path';
import pokemonRoute from './pokemon';
import typeRoute from './type';

const router = express.Router();

router.get('/', function (req: any, res: any) {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.use('/api/v2/pokemon', pokemonRoute);
router.use('/api/v2/type', typeRoute);

export default router;
