import Loading from '../components/Loading';

export default function Error({ title, message }) {
  return (
    <div className="error-container">
      <h2>{title}</h2>
      <Loading />
      <p>{message}</p>
    </div>
  );
}
