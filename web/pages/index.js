import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Row, Col, Divider } from 'antd';
import Layout from '../components/layout/Layout';
import Currency from '../components/Currency';
import Service from '../services';

export default function Home({ products }) {
  return (
    <Layout home>
      <div className={styles.wrapperItemsTitle}>
        <h1>
          Celulares
        </h1>
      </div>

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }} className={ styles.wrapperItems }>
        { products.map(product => (
          <Col className="gutter-row" span={6} key={ product?.id }>
            <Link  href={`/products/${ product?.id }`}>
              <div className={ styles.card }>
                <div className={ styles.cardHeader }>
                  <Image src={ product?.main_image } width={95} height={200} />
                </div>

                <Divider />

                <div className={ styles.cardContent }>
                  <h1>
                    <Currency value={ product?.value?.toString() } />
                  </h1>
                  <p>em <span>12x { handleFormatterPlots(product?.value) } sem juros</span></p>

                  <span>frete grátis</span>

                  <p>{ product?.name }</p>
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </Layout>
  )
}

const handleFormatterPlots = (value) => {
  const valuePlots = value / 12;
  const valuePlotsValue = (valuePlots).toFixed(2);
  const valuePlotsParsed = parseFloat(valuePlotsValue);

  return valuePlotsParsed.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
};

export async function getStaticProps() {
  const products = await Service.Products.findAll();

  return {
    props: {
      products
    }
  }
}
