import React, { useState } from 'react';

const Menu = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div>
      <ul>
        <li className={activeItem === 1 ? 'active' : ''} onClick={() => handleItemClick(1)}>Item 1</li>
        <li className={activeItem === 2 ? 'active' : ''} onClick={() => handleItemClick(2)}>Item 2</li>
        <li className={activeItem === 3 ? 'active' : ''} onClick={() => handleItemClick(3)}>Item 3</li>
        <li className={activeItem === 4 ? 'active' : ''} onClick={() => handleItemClick(4)}>Item 4</li>
      </ul>
    </div>
  );
};

export default Menu;
