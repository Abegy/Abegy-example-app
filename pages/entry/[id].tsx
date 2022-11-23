import styles from "../../styles/definition.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Entry = () => {
  const [data, setData] = useState<
    | {
        abbreviation: string;
        description: string;
        longName: string;
        id: number;
        tags: [{ id: number; name: string }];
      }
    | undefined
  >(undefined);
  const [isLoading, setLoading] = useState(false);
  const [uiid, setid] = useState("");
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    fetch("/api/idtest?testid=" + id)
      // https://alt.edge.mile-two.com/api/text/13
      .then((res) => res.json())
      .then((responsedata) => {
        console.log(responsedata);
        setData(responsedata);
        console.log(data);
        setLoading(false);
      });
  }, []);

  //   useEffect(() => {
  //     setLoading(true);
  //     fetch("/api/entry")
  //       // https://alt.edge.mile-two.com/api/text/13
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //         setLoading(false);
  //       });
  //   }, []);

  return (
    <div className={styles.main}>
      {data !== undefined ? (
        <>
          <h1>{data.abbreviation}</h1>
          <h2>{data.longName}</h2>
          <p>{data.description}</p>
        </>
      ) : (
        <h1>no data to display</h1>
      )}
    </div>
  );
};

export default Entry;
