import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import Card from 'react-rainbow-components/components/Card';
import Badge from 'react-rainbow-components/components/Badge';
import Chart from 'react-rainbow-components/components/Chart';
import Dataset from 'react-rainbow-components/components/Dataset';
import Spinner from 'react-rainbow-components/components/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import {
    ShoppingCartIcon,
    UsersIcon,
    LikeIcon,
    ErrorIcon,
} from '../../components/icons';
import ListCard from './listCard';
import LastMessagesList from './lastMessagesList';
import NewUsersList from './newUsersList';
import PageHeader from '../../components/PageHeader';
import Tile from '../../components/Tile';
import fetchDashboardData from '../../redux/actions/dashboard';
import './styles.css';

function ContentPage(props) {
    const {
        totals: {
            orders,
            users,
            followers,
            errors,
            successfulyOrdersAmount,
            totalUsers,
            followersActive,
        },
        chartsData,
        lastMessages,
        newUsers,
        isLoading,
    } = props;

    if (isLoading) {
        return <Spinner size="large" />;
    } return (
        <div>
            <section className="react-rainbow-admin-dashboard_section rainbow-align-content_space-between rainbow-p-top_large">
                <Tile
                    title="Orders"
                    label={orders}
                    icon={<ShoppingCartIcon />} />

                <Tile
                    title="Users"
                    label={users}
                    icon={<UsersIcon className="react-rainbow-admin-dashboard_tile-icon" />} />

                <Tile
                    title="Followers"
                    label={followers}
                    icon={<LikeIcon />} />

                <Tile
                    title="Errors"
                    label={errors}
                    icon={<ErrorIcon />} />
            </section>

            <section className="react-rainbow-admin-dashboard_section rainbow-align-content_space-between rainbow-p-top_large">
                <Card className="react-rainbow-admin-dashboard_card rainbow-p-vertical_medium rainbow-p-horizontal_small">
                    <div className="rainbow-flex rainbow-justify_spread">
                        <h1 className="react-rainbow-admin-dashboard_card--content rainbow-color_dark-1 rainbow-p-bottom_medium">{successfulyOrdersAmount}</h1>
                        <Badge className="react-rainbow-admin-dashboard_badge--success">
                            <FontAwesomeIcon icon={faArrowUp} pull="left" />
                            20.5%
                        </Badge>
                    </div>
                    <p className="react-rainbow-admin-dashboard_chart-title rainbow-align-content_center rainbow-font-size-text_x-small rainbow-color_gray-3">
                        Total successfuly orders
                    </p>
                    <Chart className="rainbow-p-top_x-small" showLegend={false} labels={chartsData.successfulyOrders.labels} type="line">
                        <Dataset values={chartsData.successfulyOrders.value} backgroundColor="#1de9b6" borderColor="#1de9b6" />
                    </Chart>
                </Card>

                <Card className="react-rainbow-admin-dashboard_card rainbow-p-vertical_medium rainbow-p-horizontal_small">
                    <div className="rainbow-flex rainbow-justify_spread">
                        <h1 className="react-rainbow-admin-dashboard_card--content rainbow-color_dark-1 rainbow-p-bottom_medium">{totalUsers}</h1>
                        <Badge className="react-rainbow-admin-dashboard_badge--error">
                            <FontAwesomeIcon icon={faArrowDown} pull="left" />
                            32.5%
                        </Badge>
                    </div>
                    <p className="react-rainbow-admin-dashboard_chart-title rainbow-align-content_center rainbow-font-size-text_x-small rainbow-color_gray-3">
                        Total users
                    </p>
                    <Chart className="rainbow-p-top_x-small" showLegend={false} labels={chartsData.totalUsers.labels} type="line">
                        <Dataset values={chartsData.totalUsers.value} backgroundColor="#01b6f5" borderColor="#01b6f5" />
                    </Chart>
                </Card>

                <Card className="react-rainbow-admin-dashboard_card rainbow-p-vertical_medium rainbow-p-horizontal_small">
                    <div className="rainbow-flex rainbow-justify_spread">
                        <h1 className="react-rainbow-admin-dashboard_card--content rainbow-color_dark-1 rainbow-p-bottom_medium">{followersActive}</h1>
                        <Badge className="react-rainbow-admin-dashboard_badge--success">
                            <FontAwesomeIcon icon={faArrowUp} pull="left" />
                            20.5%
                        </Badge>
                    </div>
                    <p className="react-rainbow-admin-dashboard_chart-title rainbow-align-content_center rainbow-font-size-text_x-small rainbow-color_gray-3">
                        Total followers active
                    </p>
                    <Chart className="rainbow-p-top_x-small" labels={chartsData.followersActive.labels} type="line">
                        <Dataset title="Google" values={chartsData.followersActive.googleValue} backgroundColor="#fe4849" borderColor="#fe4849" />
                        <Dataset title="Facebook" values={chartsData.followersActive.facebookValue} backgroundColor="#3c5997" borderColor="#3c5997" />
                    </Chart>
                </Card>
            </section>

            <section className="react-rainbow-admin-dashboard_section rainbow-align-content_space-between rainbow-p-top_large">
                <ListCard
                    title="Last Messages"
                    component={<LastMessagesList lastMessages={lastMessages} />}
                    footerLink={(
                        <Link className="react-rainbow-admin-dashboard_list-card--footer-link rainbow-color_brand" to="/messages">
                            View all messages
                        </Link>
                    )} />

                <ListCard
                    title="New Users"
                    component={<NewUsersList newUsers={newUsers} />}
                    footerLink={(
                        <Link className="react-rainbow-admin-dashboard_list-card--footer-link rainbow-color_brand" to="/pages/users">
                            View all users
                        </Link>
                    )} />
            </section>
        </div>
    );
}

ContentPage.propTypes = {
    totals: PropTypes.object.isRequired,
    chartsData: PropTypes.object.isRequired,
    lastMessages: PropTypes.array.isRequired,
    newUsers: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

class Dashboard extends Component {
    componentDidMount() {
        const { fetchDashboardData } = this.props;
        fetchDashboardData();
    }

    render() {
        return (
            <div className="react-rainbow-admin-dashboard_view-port rainbow-background-color_gray-1">
                <PageHeader
                    title="Dashboard"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <ContentPage {...this.props} />
            </div>
        );
    }
}

Dashboard.propTypes = {
    fetchDashboardData: PropTypes.func.isRequired,
};

function stateToProps(state) {
    return state.dashboard;
}

function dispatchToProps(dispatch) {
    return bindActionCreators({
        fetchDashboardData,
    }, dispatch);
}

export default connect(stateToProps, dispatchToProps)(Dashboard);
