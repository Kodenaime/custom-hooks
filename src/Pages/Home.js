import React from 'react'
import useFetchData from '../Hooks/useFetchData';



const Home = () => {

    const url = "https://jsonplaceholder.typicode.com/posts?limit=12";

    const {data, loading, error} = useFetchData(url);

    if (error) return <h3>Error: {error.message} </h3>;

  return (
    <div className="container">
        {
            loading ? <div className="container"><h3>Loading...</h3></div> :
            <ul className="posts">
                {
                    data?.map((post, id) => {
                       return <li key={id} className='post'>
                            <a href={`/post/${post.id}`}>{post.title}</a>
                        </li>
                    })
                }
            </ul>
        }
    </div>
  );
};

export default Home