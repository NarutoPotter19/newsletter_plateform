import { NextApiRequest, NextApiResponse } from 'next';
import Subscribers from '@/models/subscribers.model';
import { connectDb } from '@/shared/libs/db';
import { validateEmail } from '@/shared/utils/ZeroBounceApi';
import { clerkClient } from "@clerk/nextjs/server";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        await connectDb();
        const { email } = req.body;
        const { username } = req.query;

        // Fetch all users
        const allResponse = await clerkClient.users.getUserList();
        const allUsers= allResponse.data;
        const newsletterOwner = allUsers.find((user) => user.username === username);

        if (!newsletterOwner) {
            return res.status(400).json({ error: 'Username is not valid' });
        }

        // Check if the subscriber already exists
        const isSubscriberExist = await Subscribers.findOne({
            email,
            newsletterOwnerId: newsletterOwner.id,
        });

        if (isSubscriberExist) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        // Validate email
        const validationResponse = await validateEmail({ email });
        if (validationResponse.status === 'invalid') {
            return res.status(400).json({ error: 'Email is not valid' });
        }

        // Create a new subscriber
        const subscriber = await Subscribers.create({
            email,
            newsletterOwnerId: newsletterOwner.id,
        });

        return res.status(200).json(subscriber);
    }  catch (error) {
        if (error instanceof Error) {
            console.error('Subscription error:', error.message);
        } else {
            console.error('Subscription error: An unknown error occurred');
        }
    }
}

