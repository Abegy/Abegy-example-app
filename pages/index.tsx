import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import fetch from 'node-fetch'
import React from 'react'
import { useForm } from 'react-hook-form'
import useSWR from 'swr'
import { createSemicolonClassElement } from 'typescript'



export default function Home() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [label, setlabel] = useState("")

  function handleSubmit(event:React.FormEvent<HTMLFormElement>) {
    alert('A name was submitted: ' + label);
    event.preventDefault();
    const str1 = 'https://alt.edge.mile-two.com/api/tag/'
    const str2 = str1.concat('', label);
    // fetch(str2);
    useEffect(() => {
      setLoading(true)
      fetch(str2)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setData(data)
          setLoading(false)
        })
    }, [])

  }

  function handleChange(event:React.ChangeEvent<HTMLInputElement>) {
    setlabel(event.target.value)
  }

  // useEffect(() => {
  //   setLoading(true)
  //   fetch('/api/test')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data)
  //       setData(data)
  //       setLoading(false)
  //     })
  // }, [])
  
  if (isLoading) return <p>Loading...</p>
  // if (!data) return <p>No profile data</p>

  
  return (
    <div className={styles.container}>
      <Head>
        <title>welcome to abegy-app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my Example App
        </h1>
        <p className={styles.description}>
          Manually search the label intel in the <a href="http://localhost:3000/api/test">AltRestAPI</a>
        </p>
        <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={label} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
        <div>
    </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
