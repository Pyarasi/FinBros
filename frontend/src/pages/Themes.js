import React from 'react';

const Themes = () => {
  const themes = [
    'light',
    'dark',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'synthwave',
    'retro',
    'cyberpunk',
  ];

  const changeTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">Change Theme</h1>
      <div className="grid grid-cols-2 gap-4">
        {themes.map((theme) => (
          <button
            key={theme}
            onClick={() => changeTheme(theme)}
            className="btn btn-primary"
          >
            {theme}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Themes;