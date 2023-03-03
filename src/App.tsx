import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
interface IState {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
}
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState<IState[]>(items)
  const [categories,setCategories] = useState<string[]>(allCategories)

  const filterItems = (category:string) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };


  return <main>
    <section className="menu section">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories  categories={categories} filterItems={filterItems}/>
      <Menu items={menuItems} />
    </section>
  </main>
}

export default App;
