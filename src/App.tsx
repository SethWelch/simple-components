import './App.scss';
import Button from './Buttons/Button';
import Input from './Inputs/Input';

function App() {
  return (
    <div>
      <h2>Buttons</h2>
      <h4>Sizes</h4>
      <div className="flex-row-container">
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div>

      <h4>Variants</h4>
      <div className="flex-row-container">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
        <Button variant="text">Text</Button>
      </div>

      <h4>Buttons Without Ripple</h4>
      <div className="flex-row-container">
        <Button variant="primary" ripple={false}>
          Primary
        </Button>
        <Button variant="secondary" ripple={false}>
          Secondary
        </Button>
        <Button variant="tertiary" ripple={false}>
          Tertiary
        </Button>
        <Button variant="text" ripple={false}>
          Text
        </Button>
      </div>

      <h2>Inputs</h2>
      <h4>Sizes</h4>
      <div className="flex-row-container">
        <Input size="small" placeholder="Small" />
        <Input size="medium" placeholder="Medium" />
        <Input size="large" placeholder="Large" />
      </div>

      <h4>With Label</h4>
      <div className="flex flex-col gap-2">
        <Input size="small" label="Small" />
        <Input size="medium" label="Medium" />
        <Input size="large" label="Large" />
      </div>
    </div>
  );
}

export default App;
