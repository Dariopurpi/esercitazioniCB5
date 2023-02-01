import Link from "next/link";

import styles from "../styles/persons.module.scss";

export default function Persons({ users }) {
  return (
    <div className={styles.Persons}>
      {users?.map((user) => (
        <div className={styles.singlePerson}>
          <h3 key={user.id}>Name:{user.firstName}</h3>
          <h3>Surname {user.lastName}</h3>
          <Link href={`/persons/${user.id}`}>Go to person page</Link>
        </div>
      ))}
    </div>
  );
}
export async function getStaticProps() {
  const resUsers = await fetch("https://dummyjson.com/users");

  const data = await resUsers.json();

  return {
    props: {
      users: data.users,
    },
  };
}

// ------ esercizio avanzato----

// export async function getServerSideProps() {
//   const resUsers = await fetch("https://dummyjson.com/users");

//   const data = await resUsers.json();

//   return {
//     props: {
//       users: data.users,
//     },
//   };
// }
