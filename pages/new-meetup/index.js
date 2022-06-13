
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

function NewMeetupPage() {

    function addMeetupHandler(meetupprops) {
        console.log(meetupprops);
    }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default NewMeetupPage