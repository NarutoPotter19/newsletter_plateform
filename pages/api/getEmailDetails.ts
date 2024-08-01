import type { NextApiRequest, NextApiResponse } from 'next';
import { connectDb } from '@/shared/libs/db';
import Email from '@/models/email.model';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectDb();
    const { title, newsLetterOwnerId } = req.query;
    const email = await Email.findOne({
      title,
      newsLetterOwnerId,
    });
    res.status(200).json(email);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
