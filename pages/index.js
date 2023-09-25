import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Layout from "../src/components/Layout";
import { Col, Container, Row } from "react-bootstrap";
import ButtonComponent from "../src/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <Layout title="Global Enrollment Partner" navType="home">
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className="text-center">Global Enrollment Partners</h1>
          <div className="mt-2">
            <Link href="/contact">
              <a>
                <ButtonComponent text="CONTACT US" />
              </a>
            </Link>
          </div>
        </section>

        <section className={styles.aboutUs}>
          <h1>About Us</h1>
          <Container>
            <Row className={styles.aboutSection}>
              <Col xs={12} md={6}>
                <Image
                  src="/about-us-1.webp"
                  alt="about-us-1"
                  width="600px"
                  height="300px"
                />
              </Col>
              <Col className={styles.aboutSubSection}>
                <h4>GEP: A customized global network</h4>
                <div className={styles.aboutUsSubtitle}>
                  Backed by decades of experience in international enrollment,
                  GEP assists clients to identify and implement institutional
                  strategies that will enable growth.
                </div>
              </Col>
            </Row>
            <Row>
              <Col className={styles.aboutSubSection} xs={12} md={6}>
                <h4>Targeted support throughout the funnel</h4>
                <div className={styles.aboutUsSubtitle}>
                  International enrollment and immigration advising is a niche
                  field. In addition to long-term institutional enrollment
                  capacity building, we provide a range of consulting services
                  that include:
                </div>
                <ul>
                  <li>Degree verification and credential analysis</li>
                  <li> F and J Visa student advising support</li>
                  <li>
                    Physical and digital recruitment to yield support worldwide
                  </li>
                  <li>Temporary Designated School Official (DSO) staffing</li>
                </ul>
              </Col>
              <Col>
                <Image
                  src="/about-us-2.webp"
                  alt="about-us-2"
                  width="600px"
                  height="300px"
                />
              </Col>
            </Row>
            <Row className={styles.aboutSection}>
              <Col xs={12} md={6}>
                <Image
                  src="/about-us-3.webp"
                  alt="about-us-1"
                  width="600px"
                  height="300px"
                />
              </Col>
              <Col className={styles.aboutSubSection}>
                <h4>
                  Worldwide representation to enhance diversity and enrollment
                </h4>
                <div className={styles.aboutUsSubtitle}>
                  Building an entering class has never been more challenging.
                  The competition has never been greater.
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </Layout>
  );
}
