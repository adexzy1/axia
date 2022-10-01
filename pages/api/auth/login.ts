import { NextApiRequest, NextApiResponse } from 'next';
import { axiosFetch } from '../../../helper/axiosFetch';
import cookie from 'cookie';

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const response = await axiosFetch.post('/api/auth/local', req.body);
      const jwt = response.data.jwt;
      const id = response.data.user.id;

      switch (req.body.keepMeLoggedIn) {
        case false:
          res
            .setHeader('Set-Cookie', [
              cookie.serialize('token', jwt, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                path: '/',
              }),
              cookie.serialize('userId', id, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                path: '/',
              }),
            ])
            .json({
              data: response.data.user,
            });
          break;
        default:
          res
            .setHeader('Set-Cookie', [
              cookie.serialize('token', jwt, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 60 * 24 * 7, // 1 week
                sameSite: 'strict',
                path: '/',
              }),
              cookie.serialize('userId', id, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 60 * 24 * 7, // 1 week
                sameSite: 'strict',
                path: '/',
              }),
            ])
            .json(response.data.user);
          break;
      }
    } catch (error: any) {
      if (!error.response?.data.error.message) {
        return res.status(500).json({ error: 'Internal server error' });
      } else {
        const messages = error.response.data.error.message;
        return res.status(403).json({ error: messages });
      }
    }
  } else {
    res.status(404).json({ error: 'invalid request' });
  }
};

export default login;
