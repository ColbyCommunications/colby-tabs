import PropTypes from 'prop-types';
import React from 'react';
import PillItem from './pillItem.js';
// import style from './style.css';

/** Allows a user to create multiple tabs on a single page. */
export default class Pills extends React.Component {
    static propTypes = {
        /** Array with the structure {name: ???, title: ???, content: ???} */
        tabList: PropTypes.array,

        /** Save the current tab in the URL hash or not? */
        saveInHash: PropTypes.bool,

        /** Tab orientation (vertical or horizontal) */
        orientation: PropTypes.string,

        /** Callback for what to do when a tab is selected */
        onTabSelect: PropTypes.func,

        /** If orientation is vertical, you can pass the bootstrap grid widths of tab and content cols */
        verticalTabWidths: PropTypes.object,
    };

    static defaultProps = {
        tabList: [],
        saveInHash: false,
        orientation: 'horizontal',
        onTabSelect: () => {},
        verticalTabWidths: {
            left: 3,
            right: 9,
        },
    };

    constructor(props) {
        super(props);
        let tab = props.tabList[0].name;

        if (props.saveInHash) {
            if (window.location.hash !== '') {
                tab = window.location.hash.substring(1);
            }

            window.location.hash = tab;
        }

        this.state = {
            // set the first tab as default
            currentTab: tab,
        };
    }

    componentDidUpdate() {
        if (this.props.saveInHash) {
            const newTab = (window.location.hash && window.location.hash.substring(1)) || '';
            if (newTab !== this.state.currentTab) {
                // eslint-disable-next-line react/no-did-update-set-state
                this.setState({ currentTab: newTab });
                this.props.onTabSelect(newTab);
            }
        }
    }

    onSelectTab = tab => {
        if (this.props.saveInHash) {
            window.location.hash = tab;
        }

        this.setState({
            currentTab: tab,
        });

        this.props.onTabSelect(tab);
    };

    render() {
        if (this.props.tabList.length === 0) {
            return null;
        }

        let tabContent = '';
        const rows = this.props.tabList.map(item => {
            if (this.state.currentTab === item.name) {
                tabContent = item.content;
            }

            return (
                <PillItem
                    key={item.name}
                    name={item.name}
                    title={item.title}
                    badge={item.badge}
                    isVertical={this.props.orientation === 'vertical'}
                    isActive={this.state.currentTab === item.name}
                    onSelectTab={this.onSelectTab}
                />
            );
        });

        if (this.props.orientation === 'vertical') {
            let left = this.props.verticalTabWidths.left;
            let right = this.props.verticalTabWidths.right;
            if (left + right !== 12) {
                console.warn('Vertical tab widths do not add up to 12, using defaults...');
                left = 3;
                right = 9;
            }

            return (
                <div className="row colby-pills">
                    <div className={`col-sm-${left}`}>
                        <div
                            className="nav flex-column nav-pills"
                            id="v-pills-tab"
                            role="tablist"
                            aria-orientation="vertical"
                        >
                            {rows}
                        </div>
                    </div>
                    <div className={`col-sm-${right}`}>
                        <div className="tab-content" id="v-pills-tabContent">
                            {tabContent}
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className="colby-pills">
                <ul className="nav nav-pills">{rows}</ul>
                <div className="tab-content">{tabContent}</div>
            </div>
        );
    }
}
