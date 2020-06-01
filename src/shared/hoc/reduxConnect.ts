import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";

import { AppState } from "../../store/store";

const mapStateToProps = (state: any) => state;

export const reduxConnect = <Props, LinkStateProps, LinkDispatchProps>(
  WrappedComponent: any,
  actions: MapDispatchToProps<LinkDispatchProps, Props>,
  state: MapStateToProps<LinkStateProps, Props, AppState> = mapStateToProps
) => {
  return connect(state, actions)(WrappedComponent);
};
