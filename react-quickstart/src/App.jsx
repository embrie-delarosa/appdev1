import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function MyButton() {
  return (
    <button>I'm a button</button>
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

    return (
      <div>
        <h1>Welcome to my app</h1>
        <MyButton />
        <AboutPage />
        <Profile /><br /><div>{content}</div>
        <div>
          {isLoggedIn ? <LoginForm /> : <AdminPanel />}
        </div>
        <div>
          {isLoggedIn && <AdminPanel />}
        </div>
        <ul>{listItems}</ul>
        <ShoppingList />
      </div>
    );
  }