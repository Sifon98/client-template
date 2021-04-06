import React from 'react'
import { Link } from 'react-router-dom';

function Table({ post, deletePost }) {
    return (
      <tbody>
          <tr>
          <th scope="row">{post.title}</th>
          <td>{post.price}</td>
          <td>{post.stock}</td>
          <td>            
              <Link to={`/update-post/${post['_id']}`}><button className="btn btn-primary">Update</button></Link>
              <button className="btn btn-danger" onClick={(e) => deletePost(post['_id'])}>Delete</button>
          </td>
          </tr>
      </tbody>
    )
}

export default Table
