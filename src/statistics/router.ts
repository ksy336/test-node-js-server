import { Router } from 'express';
import { StatusCodes } from '../common';
import { getStatistics, updateStatistic } from './repository';
import { WordStatistics } from './staistics';

const router = Router();

// Get all categoriesnpm
router.get('/', async (req, res) => {
  const allStatistics = await getStatistics();
  return res.json(allStatistics);
});

router.put('/', async (req, res) => {
  const wordsStatistics = req.body as WordStatistics[];

  try {
    const newWordStatistic = await updateStatistic(wordsStatistics);
    console.log('test');
    return res.json(newWordStatistic);
  } catch (e) {
    return res.status(StatusCodes.NotFound).send(e);
  }
});

export default router;
