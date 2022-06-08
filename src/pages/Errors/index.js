import Error from '../../components/Error';

export const PageNotFound = () => {
  let message = '404! Page Not Found!';
  return (
    <div className="position-relative">
      <Error error={message} />
    </div>
  );
};
