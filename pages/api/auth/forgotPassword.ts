import { NextApiRequest, NextApiResponse } from 'next';
import { axiosFetch } from '../../../helper/axiosFetch';

const forgotPassword = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const email = req.body.email;

    try {
      const response = await axiosFetch.post('/api/auth/forgot-password', {
        email,
      });

      res.status(200).json({ message: 'success' });
    } catch (error: any) {
      if (!error.response?.data.error.message) {
        return res.status(500).json({ error: 'Internal server error' });
      } else {
        const messages = error.response.data.error.message;
        return res.status(403).json({ error: messages });
      }
    }
  }
};

export default forgotPassword;
