```javascript
//App.js
import React, { useState, useEffect, useMemo } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const title = useMemo(() => `You clicked ${count} times`, [count]);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default App;
```