import { v4 as uuidv4 } from 'uuid';
import './FriendsBlock.scss';

interface FriendsBlockProps {
  friends: User[];
}

const FriendsBlock = ({ friends }: FriendsBlockProps) => {
  return (
    <div className="friends-block">
      {friends?.map((friend) => (
        <div className="friends-block__item" key={uuidv4()}>
          {friend.first_name} {friend.last_name}
        </div>
      ))}
    </div>
  );
};

export default FriendsBlock;