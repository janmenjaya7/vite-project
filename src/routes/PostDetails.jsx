import { useLoaderData, Link, useNavigate } from "react-router-dom";
import classes from "./PostDetails.module.css";
import Modal from "../component/Modal";
// import Modal from "../component/Modal";

function PostDetails() {
  const post = useLoaderData();
  const navigate = useNavigate();
  function closeHandler() {
    navigate("/");
  }
  const handleRemove = async (id) => {
    const proceed = window.confirm(
      "Are you sure you want to remove this post?"
    );
    if (proceed) {
      try {
        // Make a DELETE request to remove the post
        const response = await fetch(`http://localhost:8080/posts/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          // If the deletion is successful, navigate back to the main page
          navigate("/");
        } else {
          // Handle errors
          console.error("Failed to delete post:", response.status);
        }
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    }
  };

  // const handleRemove = (id) => {
  //   // async function deletePost(id) {
  //   //   const response = await fetch(`http://localhost:8080/posts/${id}`, {
  //   //     method: "DELETE",
  //   //   });
  // };
  // console.log(post);

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
      </main>
      <span>
        <button className={classes.close} onClick={closeHandler}>
          close
        </button>
        <button
          className={classes.remove}
          onClick={() => handleRemove(post.id)}
        >
          Remove
        </button>
      </span>
    </Modal>
  );
}

export default PostDetails;

export async function loader({ params }) {
  const response = await fetch("http://localhost:8080/posts/" + params.id);
  const resData = await response.json();
  return resData.post;
}

// export async function remove(id) {
//   const storedData = await readData();
//   const updatedData = storedData.postData.filter((ev) => ev.id !== id);
//   await writeData({ postData: updatedData });
// }

// export async function loader() {
//   const response = await fetch("http://localhost:8080/posts");
//   const resData = await response.json();
//   console.log(resData.posts);
//   return resData.posts;
// }
