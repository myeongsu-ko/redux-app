import React,{useEffect,useReducer} from 'react';
import store from '../../common/store';
import { getNextFriend } from '../../common/mockData';
import { addFriend } from '../state';
import FriendList from '../component/FriendList';
import { useDispatch, useSelector } from 'react-redux';

// 리팩터링 후
export default function FriendMain() {
  const friends = useSelector(state => state.friend.friends);
  const dispatch = useDispatch();
  function onAdd  ()  {
    const friend = getNextFriend();
    dispatch(addFriend(friend));
  };
    console.log('FriendMain render');
    return (
      <div>
        <button onClick={onAdd}>친구 추가</button>
        <FriendList friends={friends} />
      </div>
    );
} 

 