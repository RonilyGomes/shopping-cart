import React from 'react';
import { Button, DatePicker, Form, Input, Modal, Row } from 'antd';
import styles from './Checkout.module.css'
import * as Mask from "../../utils/masks";

const formRef = React.createRef();

const Checkout = ({ visible, handleCancel, handleSubmit }) => {
  return (
    <Modal
      width={650}
      centered
      title="Registro de compra"
      onCancel={handleCancel}
      visible={visible}
      footer={null}
    >
      <Form
        ref={ formRef }
        onFinish={handleSubmit}
        layout='vertical'>
        <Form.Item
          name='card_number'
          label='Número do cartão'
          rules={[{ required: true, message: 'Por favor, preencha o valor acima' }]}>
          <Input
            autoFocus
            onChange={({ target }) => handleChangeWithMask(target.value, 'card_number', 'card_number' )}
            placeholder="Número do cartão" />
        </Form.Item>

        <Form.Item
          name='name'
          label='Nome completo'
          rules={[{ required: true, message: 'Por favor, preencha o valor acima' }]}>
          <Input placeholder="Número do completo" />
        </Form.Item>

        <Form.Item
          name='valid_until'
          label='Data de vencimento'
          rules={[{ required: true, message: 'Por favor, preencha o valor acima' }]}>
          <DatePicker format='MM/YYYY' picker="month" />
        </Form.Item>

        <Form.Item
          name='security_code'
          label='Código de segurança'
          rules={[{ required: true, message: 'Por favor, preencha o valor acima' }]}>
          <Input
            onChange={({ target }) => handleChangeWithMask(target.value, 'security_code', 'security_code' )}
            placeholder="Código de segurança" />
        </Form.Item>

        <Form.Item
          name='cpf'
          label='CPF do titular'
          rules={[{ required: true, message: 'Por favor, preencha o valor acima' }]}>
          <Input
            onChange={({ target }) => handleChangeWithMask(target.value, 'cpf', 'cpf' )}
            placeholder="CPF do titular" />
        </Form.Item>

        <Row type='flex' justify='end'>
          <Button
            className={styles.primaryButton}
            htmlType='submit'>
            Registrar
          </Button>
        </Row>
      </Form>
    </Modal>
  )
};

// Handle functions
const handleChangeWithMask = (value, field, mask) => {
  const formattedValue = Mask[mask](value);

  formRef.current.setFieldsValue({
    [field]: formattedValue
  });
};

export default Checkout;
