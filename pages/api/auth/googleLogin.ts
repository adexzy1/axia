import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';
import { axiosFetch } from '../../../helper/axiosFetch';

const googleLogin = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const response = await axiosFetch.get(
        `/api/auth/google/callback?access_token=${req.body.access_token}`
      );

      const jwt = response.data.jwt;
      const id = response.data.user.id;

      res.setHeader('Set-Cookie', [
        cookie.serialize('token', jwt, {
          httpOnly: true,
          sameSite: 'strict',
          maxAge: 60 * 60 * 24 * 7, // 1 week
          secure: process.env.NODE_ENV === 'production',
          path: '/',
        }),
        cookie.serialize('userid', id, {
          httpOnly: true,
          sameSite: 'strict',
          maxAge: 60 * 60 * 24 * 7, // 1 week
          secure: process.env.NODE_ENV === 'production',
          path: '/',
        }),
      ]);

      return res.status(200).json(response.data.user);
    } catch (error) {
      res
        .status(405)
        .json({ error: 'already registered with another provider' });
    }
  }
};

export default googleLogin;
