# react-styled-components

Use fontawesome5 free or pro with styled-components the easy way.
[ficon](https://github.com/bkniffler/ficon) provider for [fela](https://github.com/rofrischmann/fela).

```jsx
import FiconProvider from 'ficon-fela';
import { FaFontAwesome } from 'ficon';

const MyComponent = () => (
  <FiconProvider>
    <div>
      <span style={{ fontSize: 14 }}>
        I can adapt to fontSize! <FaFontAwesome color="black" />
      </span>
      <span>
        I can use your themes color (using theme.color)! <FaFontAwesome color />
      </span>
      <span>
        I can use your any of your themes properties!{' '}
        <FaFontAwesome color="secondary" />
      </span>
      <span>
        I can use any other valid color too! <FaFontAwesome color="red" />I can
        use any other valid color too! <FaFontAwesome color="#666" />
      </span>
    </div>
  </FiconProvider>
);
```
