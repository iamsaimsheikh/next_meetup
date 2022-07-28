import MeetupList from '../components/meetups/MeetupList'
import {MongoClient} from 'mongodb';
import Head from 'next/head';
import { Fragment } from 'react';


function HomePage(props) {
  return (
    <Fragment>
        <Head>
            <title>NextJs Meetups</title>
            <meta name='description' content='A huge list of NextJs Meetups' />
        </Head>
        <MeetupList meetups ={props.meetups} />
    </Fragment>
  )
}

export async function getStaticProps() {

    const client = await MongoClient.connect('mongodb+srv://admin:mypassword@nextmeetup.iag8fbb.mongodb.net/?retryWrites=true&w=majority')
    const db = client.db('nextmeetup');
    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.find().toArray();

    console.log(result)

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