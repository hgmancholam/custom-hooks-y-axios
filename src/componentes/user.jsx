export default function User({ user }) {
  return (
    <div className="card-user">
      <h2>{user.id}</h2>
      <p>{user.name}</p>
      <p>{user.username}</p>
      <p>{user.email}</p>
    </div>
  );
}
