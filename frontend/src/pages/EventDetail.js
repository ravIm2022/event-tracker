import { useRouteLoaderData, json, redirect } from "react-router-dom";
import EventItem from "../components/EventItem";
function EditDetailPage() {
  const data = useRouteLoaderData("event-detail");
  return (
    <>
      <h1> welcome to EditDetailPage</h1>
      <EventItem event={data.event} />
    </>
  );
}
export default EditDetailPage;
export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw json(
      { message: "could not fetch details for selected event " },
      { status: 500 }
    );
  } else {
    return response;
  }
}
export async function action({ params, request }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });
  if (!response.ok) {
    throw json({ message: "could not delete event" }, { status: 500 });
  }
  return redirect("/events");
}
