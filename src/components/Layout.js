import Head from "next/head";
import styles from "../../styles/Layout.module.scss";
import NavBar from "./NavBar";

const Layout = ({ children, title }) => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>{title ?? "Global Enrollment Partner"}</title>
        <meta
          name="description"
          content="Backed by decades of experience in international enrollment, GEP  assists clients to identify and implement institutional strategies that will enable growth."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <NavBar />

      {children}

      <footer className={styles.footer}>
        Copyright © 2023 Global Enrollment Partners, Ltd. - All Rights Reserved.
      </footer>
    </div>
  );
};

export default Layout;
