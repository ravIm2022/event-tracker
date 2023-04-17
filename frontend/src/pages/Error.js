import PageContent from "../components/PageConten";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
function ErrorPage() {
  let error = useRouteError();
  let title = "An error occuured";
  let message = "something went wrong";
  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }
  if (error.status === 404) {
    title = "Not found";
    message = "couldn't find content ";
  }
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
export default ErrorPage;
