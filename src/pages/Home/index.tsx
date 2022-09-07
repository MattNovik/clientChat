import { NameInput } from '../../components/NameInput';
import { Room } from '../../components/Room';
import { USER_KEY } from '../../constants';
import storage from '../../utils/storage';

export const Home = () => {
  const user: any = storage.get(USER_KEY);

  return user ? <Room /> : <NameInput />;
};
