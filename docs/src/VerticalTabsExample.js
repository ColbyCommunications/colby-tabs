import React from 'react';
import Tabs from '../../src/tabs.js';

export default class VerticalExample extends React.Component {
    render() {
        return (
            <div>
                <h2>Vertical Tabs</h2>
                <Tabs
                    tabList={[
                        {
                            name: 'tab1',
                            title: 'Tab 1',
                            content:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis dolor sagittis tempus aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque eget mattis dui. Sed nec pretium erat, sed pellentesque ligula. Nunc et sapien iaculis, ornare elit vitae, ultricies ex. In fringilla urna vitae enim suscipit finibus. Integer scelerisque gravida nunc eu porta. Suspendisse lacinia justo nec aliquam egestas. Donec vulputate ornare nisi, sit amet vestibulum nisi sagittis id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
                        },
                        {
                            name: 'tab2',
                            title: 'Tab 2',
                            content:
                                'Sed est arcu, ornare nec pretium nec, sodales sed augue. Pellentesque id laoreet ante. Nullam sodales accumsan tincidunt. Vestibulum at lacinia lacus, vitae bibendum nisi. Integer eleifend, nunc non sagittis dignissim, quam lectus lacinia odio, vitae lacinia nisl velit ut metus. Donec sit amet diam sit amet metus sagittis mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed metus eget metus hendrerit ultricies sit amet eu dolor. Duis varius sapien odio, sit amet bibendum justo elementum at. Fusce vel hendrerit diam, sit amet vestibulum quam.',
                        },
                        {
                            name: 'tab3',
                            title: 'Tab 3',
                            content:
                                'Fusce erat lectus, commodo sed imperdiet eget, posuere in turpis. Nam tristique egestas molestie. Donec cursus erat eu lorem tincidunt sollicitudin.',
                        },
                    ]}
                    orientation="vertical"
                />
            </div>
        );
    }
}
