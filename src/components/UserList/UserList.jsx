import { users } from '../../data/users';
import UserListItem from 'components/UserListItem/UserListItem';

const UserList = () => {
  return (
    <div className="white] shadow-[-2px 4px 10px w-[500px] rounded-lg bg-white">
      <ul className="px-11 py-14">
        {users.map((itemData) => (
          <UserListItem itemData={itemData} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
