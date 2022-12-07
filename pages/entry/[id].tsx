import styles from "../../styles/definition.module.css";
import { FaBeer } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface DataModel {
  abbreviation: string;
  description: string;
  longName: string;
  id: number;
  tags: [{ id: number; name: string }];
}

const Entry = () => {
  const [data, setData] = useState<DataModel | undefined>(undefined);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    fetch("/api/idtest?testid=" + id)
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
      {data !== undefined ? (
        <>
          <p className={styles.tagdescription}>
            <h1 className={styles.tagdescription}>
              Abbreviation: {data.abbreviation}
            </h1>
            <h2 className={styles.tagdescription}>
              Long name: {data.longName}
            </h2>
            <p>Description: {data.description}</p>
          </p>
          <p className={styles.description}>
            All Associated Tags
            {data.tags.map((tag, idx) => (
              <p className={styles.tagborder}>
                <FaBeer />
                <Link key={`link-${idx}`} href={`new/${tag.name}`}>
                  {tag.name}
                </Link>
              </p>
            ))}
          </p>
        </>
      ) : (
        <h1>no data to display</h1>
      )}
      <header className={styles.tagborder}>
        <button onClick={() => router.back()}>Back</button>
      </header>
    </div>
  );
};

export default Entry;
