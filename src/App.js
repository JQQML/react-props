import React from 'react';
import Button from './Button'
import "./App.css"

function App() {
  return (
    <main>
      <div className="btn_container">
        <Button> 默认按钮 </Button>
        <Button color="red"> 红色按钮 </Button>
        <Button color="black"> 黑色按钮 </Button>
        <Button type='secondary'> 线框按钮 </Button>
        <Button type='secondary' color="red"> 线框按钮 </Button>
        <Button type='secondary' color="black"> 线框按钮 </Button>
      </div>
    </main>
    
  );
}

export default App;
