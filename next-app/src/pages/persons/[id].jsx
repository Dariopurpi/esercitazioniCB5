import { useRouter } from "next/router";

export default function Person() {
  const router = useRouter();
  console.log(router);
  const id = router.query.id;
  return <h1>user:{id}</h1>;
}
