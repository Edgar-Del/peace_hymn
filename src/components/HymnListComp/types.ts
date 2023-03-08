import {RooStackScreenProps} from 'routes/RootStack/types';

type Props = Pick<RooStackScreenProps<'home'>, 'navigation'>;

type IHymnListComp = React.FC<Props>;
export type {IHymnListComp};
