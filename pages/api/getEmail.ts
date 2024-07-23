// // // pages/api/getEmails.ts
// import type { NextApiRequest, NextApiResponse } from 'next';
// import Email from '@/models/email.model';
// import { connectDb } from '@/shared/libs/db';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'GET') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   const { newsLetterOwnerId } = req.query;

//   try {
//     await connectDb();
//     const emails = await Email.find({ newsLetterOwnerId });
//     return res.status(200).json(emails);
//   } catch (error) {
//     console.error('Error fetching emails:', error);
//     return res.status(500).json({ message: 'Failed to fetch emails' });
//   }
// }





// projname/pages/api/getEmail.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import Email from '@/models/email.model';
import { connectDb } from '@/shared/libs/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectDb();
    const { newsLetterOwnerId } = req.query;

    // Ensure query parameter is a string
    if (typeof newsLetterOwnerId !== 'string') {
      return res.status(400).json({ message: 'Invalid query parameter' });
    }

    const emails = await Email.find({ newsLetterOwnerId });
    res.status(200).json(emails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}



