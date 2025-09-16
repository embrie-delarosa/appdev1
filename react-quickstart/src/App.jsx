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
      <img className="avatar" src={reactLogo} style={{ borderRadius: '50%' }} />
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
          height: user.imageSize
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


export default function MyApp() {

  const isLoggedIn = true;

  let content;
  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }

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
    </div>
  );
}