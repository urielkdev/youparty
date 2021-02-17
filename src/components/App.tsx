import React, { useState } from 'react';
import { Input, Layout } from 'antd';

import Navbar from './Navbar'
import Player from './Player'

import './app.css'
import 'antd/dist/antd.css'

function App() {
  const [url, setUrl]: any = useState('https://www.youtube.com/watch?v=ysz5S6PUM-U');

  const { Content } = Layout;
  const { Search } = Input;

  return (
    <Layout className="main-container">
      <Navbar />
      <Content className="full-height">
        <Search placeholder="Paste your youtube url here" onSearch={value => setUrl(value)} enterButton />
        <Player url={url} />
      </Content>
    </Layout>
  );
}

export default App;
