import {connect} from "react-redux";

import {AppStore} from "../../store/store";

const mapStateToProps = (state: any) => state;

export const reduxConnect = (
  WrappedComponent: any,
  actions: any,
  state: (state: AppStore) => any = mapStateToProps
) => {
  return connect(state, actions)(WrappedComponent);
};
