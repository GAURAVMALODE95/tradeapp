export type RootStackParamList = {
  Login: undefined;
  MainTabs: undefined;
  All_tickers_screen: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
