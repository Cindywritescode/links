import { links } from '../data';

export const List = ({
  children
}) => (
  <ul className="divide-y divide-slate-100">
    {children}
  </ul>
);

export const ListItem = () => {
  return links.map((link) =>
    <li className="space-x-5 p-5  text-center ">
      <a className="block px-3 py-4 rounded-md text-white
      bg-gradient-to-r from-red-300 to-red-400
      hover:from-pink-500 hover:to-blue-300
      font-bold text-lg drop-shadow-md "
         href={link['url']}>{link['name']}</a>
    </li>
  )
};