import {MongoClient} from 'mongodb';

// api/new-meetup

async function handler(req, res) {

    const client = await MongoClient.connect(`mongodb+srv://admin:mypassword@nextmeetup.iag8fbb.mongodb.net/?retryWrites=true&w=majority`,{ useNewUrlParser: true })
    const db = client.db('nextmeetup');

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