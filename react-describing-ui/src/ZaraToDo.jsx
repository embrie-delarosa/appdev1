const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink',
    textAlign: 'left',
    padding: '10px'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1 style={{fontSize: '2em'}}>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
    <ul>
        <li className="zara-todo-list">Improve the videophone</li>
        <li className="zara-todo-list">Prepare aeronautics lectures</li>
        <li className="zara-todo-list">Work on the alcohol-fuelled engine</li>
    </ul>

    </div>
  );
}

