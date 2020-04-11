import React from 'react';
import ReactDOM from 'react-dom';
import Pills from '../../src/pills.js';
// eslint-disable-next-line import/no-unresolved
import 'bootstrap/dist/css/bootstrap.css?raw';

import HorizontalExample from './HorizontalTabsExample';
import VerticalExample from './VerticalTabsExample';

const Examples = class Examples extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1>Tabs</h1>
                    </div>
                </div>
                <Pills
                    tabList={[
                        {
                            name: 'horizontal',
                            title: 'Horizontal Tabs',
                            content: <HorizontalExample />,
                        },
                        {
                            name: 'vertical',
                            title: 'Vertical Tabs',
                            content: <VerticalExample />,
                        },
                    ]}
                    orientation="vertical"
                />
            </div>
        );
    }
};

ReactDOM.render(<Examples />, document.querySelector('#examples'));
