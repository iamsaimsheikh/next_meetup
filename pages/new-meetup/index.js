
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import { useRouter } from 'next/router';
import axios from 'axios';

function NewMeetupPage() {

  const router = useRouter();

    async function addMeetupHandler(meetupprops) {
        const result = await axios.post('/api/new-meetups', meetupprops)
    }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default NewMeetupPage