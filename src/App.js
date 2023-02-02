import React from 'react';
import './App.css';

function App() {
  const sunsets = [
    { id: 1, src: 'C:\Users\user\my-app\sunset_files\beautiful-sunset-tropical-beach-palm-260nw-1716193708.jpg' },
    { id: 2, src: 'C:\Users\user\my-app\download.jpeg' },
    { id: 3, src: 'C:\Users\user\my-app\sunsetpic.jpg' },
    { id: 4, src: 'C:\Users\user\my-app\sunsetpic.jpg' },
  ];

  return (
    <div className="App">
      <h1>My Best Sunset Pictures</h1>
      <div className="photo-grid">
        {sunsets.map(sunset => (
          <img key={sunset.id} src={sunset.src} alt="Sunset" />
        ))}
      </div>
    </div>
  );
}

export default App;
