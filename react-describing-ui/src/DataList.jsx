import { people } from './Data.jsx';
import { getImageUrl } from './utils.jsx';

export default function List() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p style={{ textAlign: 'left' }}>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for <br />{person.accomplishment}
      </p>
    </li>
  );
  return (
    <article>
      <h1 style={{ textAlign: 'left' }}>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );
}

