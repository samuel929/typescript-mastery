import React from "react";

function UserCardComponent({ user }) {
  return (
    <div className='card shadow-lg compact side bg-base-100'>
      <div className='flex-row items-center space-x-4 p-4'>
        <div className='avatar'>
          <div className='rounded-full w-16 h-16'>
            <img
              src={`https://i.pravatar.cc/150?img=${user.id}`}
              alt={user.name}
            />
          </div>
        </div>
        <div>
          <h2 className='card-title'>{user.name}</h2>
          <p>{user.email}</p>
          <div className='card-actions'>
            <button className='btn btn-primary btn-sm'>Edit</button>
            <button className='btn btn-secondary btn-sm'>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCardComponent;
