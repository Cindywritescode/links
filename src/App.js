import './App.css';

function App() {
  return (
    <div className="container min-h-screen mx-auto p-8 bg-red-50">
      <div className="grid gap-2">
        <Avatar url="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""/>
        <Headline accountName="cindywritecode"
                  bio="Click on the links below for more information about my coding journey "/>
      </div>
      <List>
        <ListItem name="YouTube" url="https://www.youtube.com/channel/UCsh7Yv4gvEA8IAlhMK7oOCw"/>
        <ListItem name="LinkedIn" />
        <ListItem name="GitHub" />
        <ListItem name="Portfolio" />
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
  <div className="text-center">
    <h1 className="font-bold text-2lg">@{accountName}</h1>
    <p>{bio}</p>
  </div>
);

const List = ({
  children
}) => (
  <ul className="divide-y divide-slate-100 ">
    {children}
  </ul>
);

const ListItem = ({
  name, url
}) => (
  <li className="space-x-6 p-6">
    <a className="block px-3 py-2 rounded-md text-white bg-red-300 hover:bg-rose-500" href={url}>{name}</a>
  </li>
);

export default App;
