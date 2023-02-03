import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { GET } from "@/utils/api";
import styles from "@/styles/dPost.module.scss";

export default function () {
  //-------- senza getStaticPaths,il refresh funziona con l'inspect aperto -------

  const router = useRouter();
  let { id } = router.query;

  const [postData, setPostData] = useState({});
  console.log(id);

  useEffect(() => {
    GET(`posts/${id}`).then((data) => setPostData(data));
  }, [router]);

  return (
    <div className={styles.dPost}>
      <img src={postData.image} alt={postData.title} />
      <h1>{postData.title}</h1>
      <p>{postData.body}</p>
    </div>
  );
}

// export async function getStaticPaths() {
//   const res = await fetch(`https://dummyjson.com/post`);
//   const posts = await res.json();

//   const paths = await posts.posts.map((post) => ({
//     params: { id: String(post.id) },
//   }));
//   console.log(paths);

//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   console.log(params);
//   const res = await fetch(`https://dummyjson.com/post/${params.id}`);
//   const post = await res.json();

//   return { props: { posts: post.posts } };
// }
