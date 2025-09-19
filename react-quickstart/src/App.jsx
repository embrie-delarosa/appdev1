import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function MyButton() {
  return (
    <button>I'm the 1st button</button>
  );
}

function MyButton2() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <div>
      <h3>I'm the 2nd button with alert</h3>
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}

function MyButton3() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

function MyButton4({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}


function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
      <img className="avatar" src={reactLogo} />
    </>
  )

}
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: '50%'
        }}
      />
    </>
  );
}

function AdminPanel() {
  return "This is the admin panel";
}

function LoginForm() {
  return "This is the login form";
}

const products2 = [
  { title: 'Cabbage2', isFruit: false, id: 1 },
  { title: 'Garlic2', isFruit: false, id: 2 },
  { title: 'Apple2', isFruit: true, id: 3 },
];

function ShoppingList() {
  const listItems2 = products2.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}

    </li>
  );

  return (
    <ul>{listItems2}</ul>
  );
}

export default function MyApp() {

  const isLoggedIn = true;

  let content;
  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }

  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];

  const listItems = products.map(product =>
    <li key={product.id}>
      {product.title}
    </li>
  );

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Welcome to my app</h1>
      <MyButton />
      <AboutPage />
      <Profile /><br />

      <>{content}</>

      <>
        {isLoggedIn ? <LoginForm /> : <AdminPanel />}
      </>

      <>
        {isLoggedIn && <AdminPanel />}
      </>

      <ul>{listItems}</ul>
      <ShoppingList />
      <MyButton2 /><br />
      <h3>I'm the 3rd button with counter</h3>
      <MyButton3 />

      <>
        <h3>Counters that update separately (same as 3rd button)</h3>
        <MyButton3 />
        <MyButton3 />
      </>

      <>
        <h3>Counters that update together</h3>
        <MyButton4 count={count} onClick={handleClick} />
        <MyButton4 count={count} onClick={handleClick} />
      </>
    </>
  );
}