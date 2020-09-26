import React from 'react';

// Import default stack to be used in the app.
import Navigator from './routes/menuStack';

export default function App() {
  // Call the navigation and load the first screen on the stack.
  return <Navigator />;
}
