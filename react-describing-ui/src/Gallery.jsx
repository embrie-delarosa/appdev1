import Profile from './Profile.jsx';

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>

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
