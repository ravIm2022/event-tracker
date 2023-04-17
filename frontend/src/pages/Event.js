import EventsList from "../components/EventsList";
import { json, useLoaderData } from "react-router-dom";

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;
  console.log(events);
  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: "could not fetch event " }), {
    //   status: 500,
    // });
    throw json(
      { message: "could not fetch event " },
      {
        status: 500,
      }
    );
  } else {
    // const resData = await response.json();
    // return resData.events;
    return response;
  }
}
// import { Link } from "react-router-dom";
// const DUMMY_EVENTS = [
//   {
//     id: "e1",
//     title: "SomeEvent",
//   },
//   {
//     id: "e2",
//     title: "Another Event",
//   },
// ];

// function EventPage() {
//   return (
//     <>
//       <h1> welcome to EventPage</h1>
//       <ul>
//         {DUMMY_EVENTS.map((event) => (
//           <li key={event.id}>
//             <Link to={event.id}>{event.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }
// export default EventPage;
