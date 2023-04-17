import EventForm from "../components/EventForm";
import { useRouteLoaderData } from "react-router-dom";
function EditEventPage() {
  const data = useRouteLoaderData("event-detail");
  // const event = da ta.event;
  // console.log(data.event);
  return <EventForm method="patch" event={data.event} />;
}
export default EditEventPage;
