import config from '@/config.json';

const { MongoClient } = require('mongodb');

const client = new MongoClient(config.MongoURI);

export async function getQuotes() {
	let quotes;
	try {
		await client.connect();

		quotes = await client
			.db('SyedBot')
			.collection('quotes')
			.find()
			.sort({ time: -1 })
			.toArray();
	} catch (e) {
		console.error(e);
	} finally {
		await client.close();
		return quotes;
	}
}
