import { NextApiRequest, NextApiResponse } from 'next';
import { samplePostData } from 'utils/sample-data';

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
