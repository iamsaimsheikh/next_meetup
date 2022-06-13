import MeetupList from '../components/meetups/MeetupList'

const DUMMY_DATA = [
    {
        id:'m1',
        title:'The Initial Meetup',
        image:'https://source.unsplash.com/user/c_v_r/1480x700',
        address:'online - remote',
        description: 'The first remote meeting for the team'
    },
    {
        id:'m2',
        title:'The Second Meetup',
        image:'https://source.unsplash.com/user/c_v_r/1200x700',
        address:`Parkson's Club`,
        description: 'Live rave meetup for the team'
    }
]

function HomePage() {
  return <MeetupList meetups ={DUMMY_DATA} />
}

export default HomePage