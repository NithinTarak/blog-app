import useFetch from './useFetch';
import {useParams} from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const BlogDetails = () => {
    const { id } = useParams();
    const {data: blogs , isPending,error} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blogs.id , {
            method: 'DELETE'
        }).then (() => {
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            
            {blogs && (
                <article>
                    <h2>{ blogs.title }</h2>
                    <p>written by { blogs.author }</p>
                    <div>{ blogs.body }</div>
                    <button onClick = {handleDelete}>DELETE</button>
                </article>
            )}
            {error && <div>{ error }</div>}
        </div>
     );
}
 
export default BlogDetails;