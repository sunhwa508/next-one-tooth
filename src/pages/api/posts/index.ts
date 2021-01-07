import { NextApiRequest, NextApiResponse } from 'next';
import { samplePostData } from '../../../utils/sample-data';

//동적(다이나믹) 라우팅
const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(samplePostData)) {
      throw new Error('Cannot find data');
    }
    res.status(200).json(samplePostData);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
