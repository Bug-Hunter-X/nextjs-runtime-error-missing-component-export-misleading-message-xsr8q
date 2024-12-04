```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Hello, world!</h1>
      {/* This is the problematic part.  The component is imported, but never used. */}
      <MyComponent/>
    </div>
  );
}

// components/MyComponent.js
export default function MyComponent() {
  // Some component logic
  return <p>This is my component</p>;
}
```