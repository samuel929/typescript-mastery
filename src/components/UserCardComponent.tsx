import { User } from "../types";

type UserProps = {
  key: string;
  user: User;
};

function UserCardComponent({ user }: UserProps) {
  return (
    <div className='card shadow-lg compact side bg-base-100 w-80'>
      <div className='flex-row items-center space-x-4 p-4'>
        <div className='avatar'>
          <div className='rounded-full w-16 h-16 mb-2'>
            <img
              src={`https://i.pravatar.cc/150?img=${user.id}`}
              alt={user.first_name}
            />
          </div>
        </div>
        <div className='text-center'>
          <h2 className=' text-center'>{user.first_name}</h2>
          <p className='text-center p-1'>{user.email}</p>
          <div className='card-actions flex justify-center'>
            <button className='btn btn-primary btn-sm'>Edit</button>
            <button className='btn btn-secondary btn-sm'>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCardComponent;
