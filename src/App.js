import './App.css';
import avatar from './avatar.jpg'

function App() {
  return (
    <div className="container bg-red-50 h-screen mx-auto p-8">
      <div className="grid gap-3">
        <Avatar url={avatar}
                alt="Cindy's avatar image"/>
        <Headline accountName="cindywritecode"
                  bio="Click on the links below for more information about my coding journey "/>
      </div>
      <List>
        <ListItem name="YouTube" url="https://www.youtube.com/channel/UCsh7Yv4gvEA8IAlhMK7oOCw"/>
        <ListItem name="LinkedIn" url="https://www.linkedin.com/in/lihsin-liang/" />
        <ListItem name="GitHub" url="https://github.com/Cindywritescode"/>
        <ListItem name="Portfolio" url="https://www.notion.so/cindy-liang/Cindy-Liang-363ef0b911f841cc906acfb6f30122b8" />
      </List>
    </div>
  );
}



const Avatar = ({
  url, alt
}) => (
  <img className="w-28 h-28 md:w-48 md:h-auto rounded-full ring-2 ring-white mx-auto"
       src={url}
       alt={alt}/>
)

const Headline = ({
  accountName, bio
}) => (
  <div className="text-center grid gap-3">
    <h1 className="font-bold text-xl">@{accountName}</h1>
    <p>{bio}</p>
  </div>
);

const List = ({
  children
}) => (
  <ul className="divide-y divide-slate-100">
    {children}
  </ul>
);

const ListItem = ({
  name, url
}) => (
  <li className="space-x-5 p-5  text-center">
    <a className="block px-3 py-4 rounded-md text-white bg-red-300 hover:bg-rose-500 font-bold text-lg "
       href={url}>{name}</a>
  </li>
);

export default App;
