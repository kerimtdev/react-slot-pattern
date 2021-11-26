# React Slot Pattern

Slot-based children organization for React.

### Component

`useSlot` hook is a selector for named slots.

`withSlot` wrapper function generates `Slot` component for base component.

```tsx
const Card: React.FC = ({ children }) => {
  const HeaderTemplate = useSlot({
    children,
    name: "Header",
    fallback: <>Card header is not found!</>,
  });

  const BodyTemplate = useSlot({
    children,
    name: "Body",
    fallback: <>Card body is not found!</>,
  });

  return (
    <div className="card">
      <div className="card__header">
        <HeaderTemplate />
      </div>
      <div className="card__body">
        <BodyTemplate />
      </div>
    </div>
  );
};

export default withSlot(Card);
```


### Usage

```tsx
<Card>
  <Card.Slot name="Header">
    <h1>Card Header</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </Card.Slot>
  <Card.Slot name="Body">
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Repellendus officia saepe porro blanditiis laboriosam debitis
      corrupti, vero consequatur cumque adipisci itaque distinctio sint
      dolorum repudiandae aspernatur nihil iure optio minima?
    </p>
  </Card.Slot>
</Card>
```

