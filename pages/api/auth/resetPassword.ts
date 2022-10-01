import { NextApiRequest, NextApiResponse } from 'next';
import { axiosFetch } from '../../../helper/axiosFetch';

const resetPassword = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const code = req.body.code;

    try {
      const response = await axiosFetch.post('/api/auth/reset-password', {
        code: req.body.code,
        password: req.body.password,
        passwordConfirmation: req.body.confirmPassword,
      });

      res
        .status(200)
        .json({
          message: 'Password reset successfull. Redirecting to login page',
        });
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

export default resetPassword;
