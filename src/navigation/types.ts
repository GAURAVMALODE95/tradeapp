export type RootStackParamList = {
  Login: undefined;
  MainTabs: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
