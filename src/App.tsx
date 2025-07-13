import React from 'react';
import './App.scss';
import Button from './Buttons/Button';
import Card from './Cards/Card';
import Input from './Inputs/Input';

function App() {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <div className="">
      <h2>Buttons</h2>
      <div className="flex flex-col gap-4">
        <Card header="Sizes">
          <div className="flex-row-container p-4">
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
          </div>
        </Card>
        <Card header="Variants">
          <div className="flex-row-container p-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="tertiary">Tertiary</Button>
            <Button variant="text">Text</Button>
          </div>
        </Card>
        <Card header="Buttons Without Ripple">
          <div className="flex-row-container p-4">
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
        </Card>
        <Card header="Buttons Without Shadow">
          <div className="flex-row-container p-4">
            <Button variant="primary" shadow={false}>
              Primary
            </Button>
            <Button variant="secondary" shadow={false}>
              Secondary
            </Button>
            <Button variant="tertiary" shadow={false}>
              Tertiary
            </Button>
            <Button variant="text" shadow={false}>
              Text
            </Button>
          </div>
        </Card>
      </div>

      <div className="flex flex-col">
        <h2>Inputs</h2>
        <div className="flex flex-col gap-4">
          <Card header="Sizes">
            <div className="flex flex-col gap-2 p-4">
              <Input size="small" placeholder="Small" />
              <Input size="medium" placeholder="Medium" />
              <Input size="large" placeholder="Large" />
            </div>
          </Card>
          <Card header="Labels">
            <div className="flex flex-col gap-2 p-4">
              <Input size="small" label="Small Label for Small Input" />
              <Input size="medium" label="Medium Label for Medium Input" />
              <Input size="large" label="Large Label for Large Input" />
            </div>
          </Card>
          <Card header="Error State">
            <div className="flex flex-col gap-2 p-4">
              <Input label="Error" error />
              <Input
                label="Error with value"
                error={!!inputValue}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Input
                label="Error with Error Message"
                error
                errorMessage="Example Error Message"
              />
            </div>
          </Card>
        </div>
      </div>

      <div className="flex flex-col">
        <h2>Cards</h2>
        <div className="flex flex-col gap-4">
          <Card header="Card with Header">
            <div className="p-4 w-full text-center">Example</div>
          </Card>
          <Card>
            <div className="p-4 w-full text-center">Card without header</div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
