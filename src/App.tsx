import React, { useState } from 'react';

function App() {

  let [data, setData] = useState<any[]>([])

  const a = () => {
    fetch("https://api.coincap.io/v2/assets")
      .then(response => response.json())
      .then(res => {
        console.log(res.data)
        setData(res.data)
      })
  }

  return (
    <div className="App" onClick={a}>
      +
      {data.map(item => <div className='card'>{item.id}:{Number(item.priceUsd).toFixed(2)} USD</div>)}
    </div>
  );
}

export default App;
