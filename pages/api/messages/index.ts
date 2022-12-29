import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

export default async (req: NextApiRequest, res: NextResponse) => {
    switch (req.method) {
        case 'GET':
            return await get(req, res);
        case 'POST':
            return await save(req, res);
        default:
            //@ts-ignore
            return res.status(500).json({ error: 'method not found' });
    }
};
const get = async (req: NextApiRequest, res: NextResponse) => {
    try {
        const client = await clientPromise;
        const db = client.db('message');
        const messages = await db.collection('movies').find({ email: req.body.email }).toArray();
        //@ts-ignore
        res.json(messages);
    } catch (e) {
        console.error(e);
    }
};
const save = async (req: NextApiRequest, res: NextResponse) => {
    try {
        const client = await clientPromise;
        const db = client.db('message');

        const message = await db.collection('message').insertOne(req.body);
        //@ts-ignore
        res.json(message);
    } catch (e) {
        console.error(e);
    }
};
