import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Entry = () => {
  const [data, setData] = useState<any[]>([]);
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

  useEffect(() => {
    setLoading(true);
    fetch("/api/entry")
      // https://alt.edge.mile-two.com/api/text/13
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false);
      });
  }, []);

  //   const displayfields = () => {
  //     let html = "";
  //     for (const property in data) {
  //       html += `<div> ${property}: ${data[property]}</div>`;
  //     }
  //     return html;
  //   };

  //   {Object.values(data).map((value, index)

  return (
    <div>
      return{" "}
      {Object.values(data).map((value, index) => (
        <div key={index}>
          <h2>{value}</h2>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Entry;
