import {Request, Response} from 'express';
import createUser from './services/CreateUser';

export function helloWorld(req: Request, res: Response) {
  const user = createUser({
    email: 'lucasbarroso23@gmail.com',
    password: '1234',
    techs: [
      'Node.js', 
      'React.js',
      { title: 'Javascript', experience: 100}
    ]
  });

  return res.json(user)
}