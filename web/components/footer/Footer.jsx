import React from 'react';
import Image from 'next/image';
import { Col, Row } from 'antd';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }} className={styles.wrapperFooter}>
        <Col className="gutter-row" span={8}>
          <div className={styles.footerItem}>
            <Image src='/payment.svg' width='66px' height='46px' />

            <h2>Pague com cartão de crédito</h2>

            <p>Aqui você paga parcelado sem juros.</p>

            <p>É sempre seguro!</p>
          </div>
        </Col>

        <Col className="gutter-row" span={8}>
          <div className={styles.footerItem}>
            <Image src='/shipping.svg' width='66px' height='46px' />

            <h2>Frete grátis a partir de R$ 49,99</h2>

            <p>Só por estar cadastrado, você tem frete</p>

            <p>grátis em milhares de produtos.</p>
          </div>
        </Col>

        <Col className="gutter-row" span={8}>
          <div className={styles.footerItem}>
            <Image src='/payment.svg' width='66px' height='46px' />

            <h2>Pague com cartão de crédito</h2>

            <p>Você não gostou do que comprou? Devolva! </p>

            <p>Aqui não há nada que você não possa fazer, </p>

            <p>porque você está sempre protegido.</p>
          </div>
        </Col>
      </Row>
    </footer>
  )
}
