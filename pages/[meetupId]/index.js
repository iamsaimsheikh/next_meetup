import MeetupDetails from "../../components/meetups/MeetupDetails"
import Layout from "../../components/layout/Layout"

function MeetupDetailsPage() {
  return (
        <MeetupDetails 
            id='m1'
            title='The Initial Meetup'
            image='https://source.unsplash.com/user/c_v_r/1480x700'
            address='online - remote'
            description= 'The first remote meeting for the team'/>
  )
}

export default MeetupDetailsPage