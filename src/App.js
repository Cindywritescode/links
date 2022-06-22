import './App.css';
import avatar from './avatar.jpg'
import { List, ListItem } from './components/List';
import { Avatar } from './components/Avatar';

function App() {
  return (
    <div className="container bg-red-50 h-screen mx-auto p-8">
      <div className="grid gap-3">
        <Avatar url={avatar}
                alt="Cindy's avatar image"/>
        <Headline accountName="cindywritescode"
                  bio="Click on the links below for more information about my coding journey "/>
      </div>
      <List>
        <ListItem/>
     </List>
    </div>
  );
}


const Headline = ({
  accountName, bio
}) => (
  <div className="text-center grid gap-3">
    <h1 className="font-bold text-xl">@{accountName}</h1>
    <p className='pb-3'>{bio}</p>
  </div>
);


export default App;
