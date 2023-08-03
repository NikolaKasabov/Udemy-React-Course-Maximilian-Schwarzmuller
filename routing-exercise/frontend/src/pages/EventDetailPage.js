import { useParams } from 'react-router-dom';

function EventDetailPage() {
  const { id } = useParams();

  return (
    <>
      <h1>Event detail page</h1>
      <p>event id: {id}</p>
    </>
  );
}

export default EventDetailPage;
