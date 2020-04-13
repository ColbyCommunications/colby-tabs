/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';
import React from 'react';

export default class Item extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
        badge: PropTypes.node,
        isActive: PropTypes.bool,
        isVertical: PropTypes.bool,
        onSelectTab: PropTypes.func,
        tabClasses: PropTypes.object.isRequired,
    };

    static defaultProps = {
        name: '',
        title: '',
        badge: '',
        isActive: false,
        isVertical: false,
        onSelectTab() {},
    };

    clicked = e => {
        e.preventDefault();
        this.props.onSelectTab(this.props.name);
    };

    render() {
        const className = this.props.isActive
            ? `active colby-tabs-pill ${this.props.tabClasses.tabs}`
            : `colby-tabs-pill ${this.props.tabClasses.tabs}`;

        const ariaSelected = this.props.isActive || false;

        const badge =
            this.props.badge === '' ? null : (
                <span className="badge badge-pill badge-light">{this.props.badge}</span>
            );

        let item = (
            <li className="nav-item">
                <a
                    className={className}
                    data-toggle="pill"
                    href="#"
                    role="tab"
                    aria-selected={ariaSelected}
                    onClick={this.clicked}
                >
                    {this.props.title} {badge}
                </a>
            </li>
        );

        if (this.props.isVertical) {
            item = (
                <a
                    className={className}
                    data-toggle="pill"
                    href="#"
                    role="tab"
                    aria-selected={ariaSelected}
                    onClick={this.clicked}
                >
                    {this.props.title} {badge}
                </a>
            );
        }

        return <>{item}</>;
    }
}
