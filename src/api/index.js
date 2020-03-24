import { Router } from 'express';

const router = Router();

router.get('/api', (req, res) => {
  const data = {
    id: 1,
    name: 'solenoid',
    email: 'maruisansmai@gmail.com',
    twitter: 'https://twitter.com/maruisannsimai',
    github: 'https://github.com/Solenoidal',
  };
  res.send(JSON.stringify(data, null, 2));
});

export default router;
