import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "9s";
const military = "YoRHa";
export const siteTitle = "Android";

const layout = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="favicon.ico" />
        <meta name="description" content="Nier Automata" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
      </Head>
      <header className={styles.header}>
        {home ? (
          <div>
            <Image
              priority
              src="/9s.png"
              className={utilStyles.borderCircle}
              height={244}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2x1}>{name}</h1>
          </div>
        ) : (
          <div>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/yorha.jpg"
                  className={utilStyles.borderCircle}
                  height={208}
                  width={208}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{military}</a>
              </Link>
            </h2>
          </div>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default layout;
