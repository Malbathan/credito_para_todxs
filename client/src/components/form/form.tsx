import { Input, Form, Row, Col, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export default function FormUserInput () {
  const handleFinish = (a: any) => {
    console.log(a)
  }
  return <>
        <Form 
          layout="vertical"
          className = "form"
          onFinish = { handleFinish }
        >
          <Row gutter={20}>
            <Col span={10} offset = {2}>
              <Form.Item
                name= {['fullname']}
                label = "Nome"
              >
                <Input 
                  prefix={<UserOutlined />}
                  placeholder="Digite seu nome"
                />
              </Form.Item>
            </Col>
            <Col span={10}>
              <Form.Item
                name= {['cpf']}
                label = "CPF"
              >
                <Input placeholder="Digite seu CPF" />
              </Form.Item> 
            </Col>
          </Row>
          <Row justify="center">
            <Button shape="round" size={'large'} htmlType="submit">
              Simule
            </Button>
          </Row>
        </Form>
      </>
}
