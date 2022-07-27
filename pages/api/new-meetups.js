import {MongoClient} from 'mongodb';

// api/new-meetup

async function handler(req, res) {

    const client = await MongoClient.connect(`mongodb://admin:password@localhost:27017/next_meetup?authSource=admin`)
    const db = client.db();

    if(req.method === 'POST'){

        const data = req.body;
        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data).then(() => {
            res.send("Meetup Added Successfully!");
        }).catch(e => {
            res.send(e);
        })

        client.close();
    }

}

export default handler