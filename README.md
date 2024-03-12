# Tail UI

Tailui is a **React UI library** that streamlines development and enhances UI design. It includes customizable components and sleek styles for stunning and responsive interfaces. **Tailui** provides all the necessary tools to create engaging and delightful modern web applications.

## Getting started

### 1. Install Package
Install the tail ui lib from your command line.
```bash
pnpm install tail-ui
```
### 2. Import Styles
```ts
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "tail-ui/index.css"; // ui component styles

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```
### 3. Example Component
```ts
import { Alert } from "tail-ui";

function App() {
  return (
    <Alert color="warning" size="lg">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    </Alert>
  );
}

export default App;
```

## Storybook
You can visit the storybook application to view all components. [See](https://tailui.haliscicek.com/)

## Contributing
Contributions to TailUI are always welcome!
