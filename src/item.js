/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';
import React from 'react';

export default class Item extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
        badge: PropTypes.node,
        isActive: PropTypes.bool,
        onSelectTab: PropTypes.func,
        tabClasses: PropTypes.object.isRequired,
    };

    static defaultProps = {
        name: '',
        title: '',
        badge: '',
        isActive: false,
        onSelectTab() {},
    };

    clicked = e => {
        e.preventDefault();
        this.props.onSelectTab(this.props.name);
    };

    render() {
        const className = this.props.isActive
            ? `active colby-tabs-tab ${this.props.tabClasses.tabs}`
            : `colby-tabs-tab ${this.props.tabClasses.tabs}`;
        const badge =
            this.props.badge === '' ? null : (
                <span className="badge badge-pill badge-primary">{this.props.badge}</span>
            );

        return (
            <li role="presentation" className={className} onClick={this.clicked}>
                <a href="#">
                    {this.props.title} {badge}
                </a>
            </li>
        );
    }
}
