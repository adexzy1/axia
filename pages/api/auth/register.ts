import { axiosFetch } from '../../../helper/axiosFetch';
import { NextApiRequest, NextApiResponse } from 'next';

const register = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const response = await axiosFetch.post(
        '/api/auth/local/register',
        req.body
      );

      return res.status(200).json({
        message: 'success',
      });
    } catch (error: any) {
      if (!error.response?.data) {
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

export default register;
