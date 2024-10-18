import React, { useState } from 'react';
import { Send } from 'lucide-react';
import Post from '../components/Post';

interface PostData {
  id: number;
  username: string;
  content: string;
  timestamp: string;
}

const Home: React.FC = () => {
  const [post, setPost] = useState('');
  const [feed, setFeed] = useState<PostData[]>([
    {
      id: 1,
      username: 'johndoe',
      content: 'Hello, Summitter! This is my first post.',
      timestamp: '2 minutes ago'
    },
    {
      id: 2,
      username: 'janedoe',
      content: 'Excited to join this new platform! #NewUser',
      timestamp: '5 minutes ago'
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (post.trim()) {
      const newPost: PostData = {
        id: feed.length + 1,
        username: 'currentuser', // This should be replaced with the actual logged-in user
        content: post,
        timestamp: 'Just now'
      };
      setFeed([newPost, ...feed]);
      setPost('');
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Home</h1>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={post}
            onChange={(e) => setPost(e.target.value)}
            placeholder="What's happening?"
            className="input flex-grow"
          />
          <button type="submit" className="btn btn-primary">
            <Send size={20} />
          </button>
        </div>
      </form>
      <div className="space-y-4">
        {feed.map((post) => (
          <Post
            key={post.id}
            username={post.username}
            content={post.content}
            timestamp={post.timestamp}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;