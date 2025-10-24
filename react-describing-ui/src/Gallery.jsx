import Profile from './Profile.jsx';

export default function Gallery() {
  return (
    <section style={{ textAlign: "left" }}>
      <h1 style={{ fontSize: "2em" }}>Amazing scientists</h1>

      <Profile
        name="Alan L. Hart"
        imageUrl="https://i.imgur.com/QIrZWGIs.jpg"
      />

      <Profile
        name="Katherine Johnson"
        imageUrl="https://i.imgur.com/MK3eW3As.jpg"
      />
    </section>
  );
}
