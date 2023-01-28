import config from '@/config.json';

const { MongoClient } = require('mongodb');

const client = new MongoClient(config.MongoURI);

export async function getQuotes() {
	try {
		db = await client.connect();
		quotedata = await db
			.db('SyedBot')
			.collection('quotes')
			.find()
			.sort({ time: -1 })
			.toArray();
		db.close();
		return quotedata;
	} catch (e) {
		console.error(e);
	} finally {
		db.close();
	}
}
