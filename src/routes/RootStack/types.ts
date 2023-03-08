import {StackScreenProps} from '@react-navigation/stack';

type RootStackParamsList = {
  home: undefined;
  details: {verses: string[][]; chorus: string[]; title: string};
};

type RooStackScreenProps<T extends keyof RootStackParamsList> =
  StackScreenProps<RootStackParamsList, T>;

type IRootStack = React.FC;
export type {IRootStack, RootStackParamsList, RooStackScreenProps};
