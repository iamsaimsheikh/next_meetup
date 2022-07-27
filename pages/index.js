import MeetupList from '../components/meetups/MeetupList'
import {MongoClient} from 'mongodb';


function HomePage(props) {
  return <MeetupList meetups ={props.meetups} />
}

export async function getStaticProps() {

    const client = await MongoClient.connect(`mongodb://admin:password@localhost:27017/next_meetup?authSource=admin`)
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: result.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        revalidate: 1
    }
}

export default HomePage