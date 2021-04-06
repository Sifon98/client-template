import React from 'react'
import { Link } from 'react-router-dom';

function ManageComp({ post, deletePost }) {
    return (
        <tr>
            <th>{post.title}</th>
            <td>{post.price}</td>
            <td>{post.stock}</td>
            <td>            
                <Link to={`/update-post/${post['_id']}`}><button className="btn btn-primary">Update</button></Link>
                <button className="btn btn-danger" onClick={(e) => deletePost(post['_id'])}>Delete</button>
            </td>
        </tr>
    )
}

export default ManageComp
