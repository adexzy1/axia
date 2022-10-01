import { NextApiRequest, NextApiResponse } from 'next';
import { axiosFetch } from '../../../helper/axiosFetch';
import cookie from 'cookie';

const verifyCookie = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const { token } = cookie.parse(req.headers.cookie as string);

    if (!token) {
      res.status(403).json({ error: 'not authorized' });
      return;
    }

    try {
      const response = await axiosFetch.get('/api/users/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      res.status(200).json(response.data);
    } catch (error) {
      res.status(403).json({
        error: 'not authorized',
      });
    }
  }
};

export default verifyCookie;
