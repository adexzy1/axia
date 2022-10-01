import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

const logout = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    res.setHeader(
      'Set-Cookie',
      cookie.serialize('token', '', {
        httpOnly: true,
        expires: new Date(0),
        sameSite: 'strict',
        path: '/',
        secure: process.env.NODE_ENV === 'production',
      })
    );

    return res.status(200).json({ message: 'success' });
  }
};

export default logout;
