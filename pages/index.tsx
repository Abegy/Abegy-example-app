import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import fetch from "node-fetch";
import React from "react";
import Entry from "components/Entry";

export default function Home() {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [label, setlabel] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    fetch("/api/test?testlabel=" + label)
      .then((res) => res.json())
      .then((responsedata) => {
        console.log(responsedata);
        setData(responsedata);
        console.log(data);
        setLoading(false);
      });
    event.preventDefault();
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setlabel(event.target.value);
  }

  useEffect(() => {
    setLoading(true);
    fetch("/api/test")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div className="text-3xl font-bold">
      <main className={styles.main}>
        <h1 className="text-3xl font-bold underline">Tag Search Tool</h1>
        <div className={styles.main}>
          <form onSubmit={handleSubmit}>
            <label>
              TAG NAME:
              <input type="text" value={label} onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className={styles.body}>
          {data?.map((item, idx) =>
            item.texts.map((text: any) => (
              <Entry
                longName={text.longName}
                href={`entry/${text.id}`}
                key={idx}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
}
