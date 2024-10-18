import React, { useState } from 'react';
import { Heart, MessageCircle, Repeat, Bookmark } from 'lucide-react';

interface PostProps {
  username: string;
  content: string;
  timestamp: string;
}

const Post: React.FC<PostProps> = ({ username, content, timestamp }) => {
  const [likes, setLikes] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
      <div className="flex items-center mb-4">
        <img
          src={`https://api.dicebear.com/6.x/initials/svg?seed=${username}`}
          alt={`${username}'s avatar`}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <p className="font-semibold text-gray-800">{username}</p>
          <p className="text-gray-500 text-sm">{timestamp}</p>
        </div>
      </div>
      <p className="mb-4 text-gray-700">{content}</p>
      <div className="flex justify-between text-gray-500">
        <button onClick={() => setLikes(likes + 1)} className="flex items-center hover:text-red-500 transition-all">
          <Heart size={20} className="mr-1" />
          <span>{likes}</span>
        </button>
        <button className="flex items-center hover:text-blue-500 transition-all">
          <MessageCircle size={20} className="mr-1" />
          <span>Reply</span>
        </button>
        <button className="flex items-center hover:text-green-500 transition-all">
          <Repeat size={20} className="mr-1" />
          <span>Repost</span>
        </button>
        <button
          onClick={() => setIsBookmarked(!isBookmarked)}
          className={`flex items-center transition-all ${isBookmarked ? 'text-yellow-500' : 'hover:text-yellow-500'}`}
        >
          <Bookmark size={20} className="mr-1" />
          <span>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
        </button>
      </div>
    </div>
  );
};

export default Post;