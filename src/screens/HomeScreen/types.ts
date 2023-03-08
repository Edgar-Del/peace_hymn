import {RooStackScreenProps} from 'routes/RootStack/types';

type Props = Pick<RooStackScreenProps<'home'>, 'navigation'>;

type IHomeScreen = React.FC<Props>;
export type {IHomeScreen};
