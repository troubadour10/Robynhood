import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { logout } from '../../actions/session/session_actions';
import { fetchShare } from '../../actions/shares/share_actions';
import { fetchUser } from '../../actions/users/user_actions';
import { fetchWatchlist } from '../../actions/watchlists/watchlist_actions';
import { 
  requestQuote, 
  requestQuotes,
  requestBatchIntradayPrices
 } from '../../actions/companies/company_actions';

const mSTP = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.userId];
  // debugger
  return {
    user: user,
    shares: Object.values(state.entities.shares),
    watchlists: Object.values(state.entities.watchlists),
    quotes: Object.values(state.entities.companies)
    // companies: Object.values(state.entities.companies)
  };
};

const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchShare: (shareId) => dispatch(fetchShare(shareId)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchWatchlist: (watchlistId) => dispatch(fetchWatchlist(watchlistId)),
    requestQuote: (symbol) => dispatch(requestQuote(symbol)),
    requestQuotes: (symbols) => dispatch(requestQuotes(symbols)),
    requestBatchIntradayPrices: symbols => dispatch(requestBatchIntradayPrices(symbols))
  };
};

export default connect(mSTP, mDTP)(Dashboard);