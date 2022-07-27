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