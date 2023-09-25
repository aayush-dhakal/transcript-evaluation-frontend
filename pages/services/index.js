import React from "react";
import Layout from "../../src/components/Layout";
import styles from "../../styles/Services.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import ButtonComponent from "../../src/components/Button";
import Link from "next/link";
import { useRouter } from "next/router";

const Services = () => {
  return (
    <Layout>
      <section className={styles.serviceSection}>
        <Container fluid>
          <Row>
            <Col xs={12} md={6} className={styles.serviesLeftSection}>
              <h2>Basic Credential Evaluation</h2>
              <div className={styles.servicesSubText}>
                Evaluation of an overseas educational credential from English
                translation ($35 USD)
              </div>
              <Link href="/services">
                <a>
                  <ButtonComponent text="ORDER NOW" />
                </a>
              </Link>
            </Col>

            <Col className={styles.serviesRightSection}>
              <Image
                src="/services.webp"
                alt="services"
                width="900px"
                height="500px"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Services;
