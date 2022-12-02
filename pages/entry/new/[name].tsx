import styles from "../../../styles/definition.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const New = () => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const { name } = router.query;

  console.log(name);
  useEffect(() => {
    fetch("/api/test?testlabel=" + name)
      .then((res) => res.json())
      .then((responsedata) => {
        console.log(responsedata);
        setData(responsedata);
        console.log(data);
        setLoading(false);
      });
  }, [router]);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data, invalid id</p>;

  return (
    <div className={styles.main}>
      {data?.map((item) =>
        item.texts.map((text: any) => <p> {text.longName} </p>)
      )}
    </div>
  );
};

export default New;
