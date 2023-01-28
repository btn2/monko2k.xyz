import config from '@/config.json';

const { MongoClient } = require('mongodb');

const client = new MongoClient(config.MongoURI);

export default async function handler(req, res) {
	try {
		db = await client.connect();
		quotedata = await db
			.db('SyedBot')
			.collection('quotes')
			.find()
			.sort({ time: -1 })
			.toArray();
		res.json(quotedata);
	} catch (e) {
		console.error(e);
	}
}
