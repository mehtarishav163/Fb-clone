import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import SidebarRow from './SidebarRow';
import Feed from './Feed';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';

import './App.css';

function App() {
  return (
    <div className="app">
      <h3>Built a facebook clone</h3>
      <Header />
      <div className = "app_body">
        <Sidebar />
        <SidebarRow />
        <Feed />
      </div>
    </div>
  );
}

export default App;
