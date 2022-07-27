import MeetupDetails from "../../components/meetups/MeetupDetails"
import {MongoClient, ObjectId} from 'mongodb'

function MeetupDetailsPage(props) {

  console.log(props)

  return (
        <MeetupDetails 
            id={props.meetup.id}
            title={props.meetup.title}
            image={props.meetup.image}
            address={props.meetup.address}
            description={props.meetup.description}/>
  )
}

export async function getStaticPaths() {

  const client = await MongoClient.connect(`mongodb://admin:password@localhost:27017/next_meetup?authSource=admin`)
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find().toArray();

  return {
    fallback: false,
    paths: meetups.map(meetup => ({
      params: {meetupId : meetup._id.toString()}
    }))
  }
}

export async function getStaticProps(context) {

  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(`mongodb://admin:password@localhost:27017/next_meetup?authSource=admin`)
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetup = await meetupsCollection.findOne({_id: ObjectId(meetupId)});
  

  client.close();

  return {
    props: {
      meetup: {
        id: meetupId.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description
      }
    }
  }
}

export default MeetupDetailsPage