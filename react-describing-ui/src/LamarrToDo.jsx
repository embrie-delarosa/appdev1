export default function TodoList() {
  return (
    <>
    <div style ={{ textAlign: "left"}}>
      <h1 style={{ fontSize: "2em" }}>Hedy Lamarr's Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
      />
      <ul>
        <li className="todo-list">Invent new traffic lights</li>
        <li className="todo-list">Rehearse a movie scene</li>
        <li className="todo-list">Improve spectrum technology</li>
      </ul>
    </div>
    </>);
}
