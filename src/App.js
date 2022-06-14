import './App.css';

function App() {
  return (
    <div className="container mx-auto p-8 bg-red-50">
      <div className="grid gap-2">
        <img className="w-28 h-28 md:w-48 md:h-auto rounded-full ring-2 ring-white mx-auto"
             src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
             alt=""/>
        <h1>@cindywritescode</h1>
        <p>Click on the links below for more information about my coding journey </p>
      </div>
      <List>
        <ListItem name="YouTube"/>
        <ListItem name="LinkedIn" />
        <ListItem name="GitHub" />
        <ListItem name="Portfolio" />
      </List>
    </div>
  );
}


const List = ({
  children
}) => (
  <ul className="divide-y divide-slate-100">
    {children}
  </ul>
);

const ListItem = ({
  name
}) => (
  <li className="space-x-6 p-6">
    <a className="block px-3 py-2 rounded-md bg-red-300 text-white" href="#">{name}</a>
  </li>
);

export default App;
