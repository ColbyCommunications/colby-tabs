# colby-tabs

A bootstrap tabs react component

## Props

| Name              | Description                                                                                | Type                                                       | Default Value         |
| ----------------- | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------- | --------------------- |
| tabList           | Array with the structure {name: ???, title: ???, content: ???}                             | array                                                      | []                    |
| saveInHash        | Whether to save the current tab in the URL hash or not                                     | bool                                                       | false                 |
| orientation       | Tab orientation (vertical or horizontal)                                                   | string                                                     | horizontal            |
| onTabSelect       | A function to run when a tab is selected                                                   | function                                                   | () => {}              |
| verticalTabWidths | If orientation is vertical, you can pass the bootstrap grid widths of tab and content cols | object                                                     | { left: 3, right: 9 } |
| tabClasses        | Pass specific classes to tabs or tab containers                                            | {tabContainer: 'nav nav-tabs', tabs: 'nav-item nav-link' } |

## Usage

### Horizontal Tabs

```javascript
import React, { Component } from 'react';
import Tabs from 'colby-tabs';

export default class MyComponent extends Component {
    render() {
        return (
            <div>
                <Tabs
                    tabList={[
                        { name: 'tab1', title: 'Tab 1', content: 'Lorem Ipsum...' },
                        { name: 'tab2', title: 'Tab 2', content: <SomeReactComponent /> },
                    ]}
                />
            </div>
        );
    }
}
```

### Vertical Tabs

```javascript
import React, { Component } from 'react';
import Tabs from 'colby-tabs';

export default class MyComponent extends Component {
    render() {
        return (
            <div>
                <Tabs
                    tabList={[
                        { name: 'tab1', title: 'Tab 1', content: 'Lorem Ipsum...' },
                        { name: 'tab2', title: 'Tab 2', content: 'Lorem ipsum 2...' },
                    ]}
                    orientation="vertical"
                />
            </div>
        );
    }
}
```

### Badges

```javascript
import React, { Component } from 'react';
import Tabs from 'colby-tabs';

export default class MyComponent extends Component {
    render() {
        return (
            <div>
                <Tabs
                    tabList={[
                        { name: 'tab1', title: 'Tab 1', badge: '9', content: 'Lorem Ipsum...' },
                        {
                            name: 'tab2',
                            title: 'Tab 2',
                            badge: 'hello',
                            content: 'Lorem ipsum 2...',
                        },
                    ]}
                />
            </div>
        );
    }
}
```

### Tabs Right Aligned

```javascript
import React, { Component } from 'react';
import Tabs from 'colby-tabs';

export default class MyComponent extends Component {
    render() {
        return (
            <div>
                <Tabs
                    tabList={[
                        {
                            name: 'tab1',
                            title: 'Tab 1',
                            content: 'Lorem ipsum dolor sit amet...',
                        },
                        {
                            name: 'tab2',
                            title: 'Tab 2',
                            content: 'Sed est arcu, ornare nec pretium nec...',
                        },
                        {
                            name: 'tab3',
                            title: 'Tab 3',
                            content: 'Fusce erat lectus, commodo sed imperdiet eget...',
                        },
                    ]}
                    tabClasses={{
                        tabContainer: 'nav nav-tabs justify-content-end',
                        tabs: 'nav-item nav-link',
                    }}
                />
            </div>
        );
    }
}
```

### Horizontal Pills

```javascript
import React, { Component } from 'react';
import { Pills } from 'colby-tabs';

export default class MyComponent extends Component {
    render() {
        return (
            <div>
                <Pills
                    tabList={[
                        { name: 'tab1', title: 'Tab 1', content: 'Lorem Ipsum...' },
                        { name: 'tab2', title: 'Tab 2', content: 'Lorem ipsum 2...' },
                    ]}
                />
            </div>
        );
    }
}
```

### Vertical Pills

```javascript
import React, { Component } from 'react';
import { Pills } from 'colby-tabs';

export default class MyComponent extends Component {
    render() {
        return (
            <div>
                <Pills
                    tabList={[
                        { name: 'tab1', title: 'Tab 1', content: 'Lorem Ipsum...' },
                        { name: 'tab2', title: 'Tab 2', content: 'Lorem ipsum 2...' },
                    ]}
                    orientation="vertical"
                />
            </div>
        );
    }
}
```
