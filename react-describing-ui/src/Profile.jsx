export default function Profile({ name, imageUrl }) {
  return (
    <img
      src={imageUrl}
      alt={name}
    />
  );
}
