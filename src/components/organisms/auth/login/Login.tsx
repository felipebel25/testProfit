import { useState } from 'react'
import { Eye, EyeClosed } from 'phosphor-react'
import { Button, Divider, Flex, Form, Image, Input, Tooltip, Typography } from 'antd'

import styles from './login.module.scss'

export const LoginView = () => {
  const { Title, Text } = Typography
  const [showPassword, setShowPassword] = useState(false)
  return (
    <main className={styles.home}>
      <Flex align="center" className={styles.container}>
        <Flex className={styles.companySection}>
          <Image
            className={styles.imageLogo}
            src="/images/login/01-example-login-logo.png"
            alt="Logo Company"
            preview={false}
            width={'70%'}
          />
          <div className={styles.textCompanyContainer}>
            <Divider />
            <Title level={1} style={{ fontSize: '1.6rem', fontWeight: 500 }}>
              Sistema de gestion de cobranzas
            </Title>
          </div>
        </Flex>
        <Flex className={styles.loginSection} align="center" justify="center">
          <Flex className={styles.login} vertical align="center" justify="space-between">
            <Title level={2} className={styles.title}>
              Bienvenido
            </Title>
            <Form className={styles.form}>
              <Input
                className={styles.input}
                placeholder="Usuario"
                variant="borderless"
                size="large"
              />
              <Input
                size="large"
                type={showPassword ? 'text' : 'password'}
                className={styles.input}
                placeholder="Contrasena"
                variant="borderless"
                suffix={
                  <Tooltip title={showPassword ? 'Hidden Password' : 'Show Password'}>
                    {!showPassword ? (
                      <Eye
                        onClick={() => setShowPassword(true)}
                        style={{ cursor: 'pointer', fontSize: '1.5rem' }}
                      />
                    ) : (
                      <EyeClosed
                        onClick={() => setShowPassword(false)}
                        style={{ cursor: 'pointer', fontSize: '1.5rem' }}
                      />
                    )}
                  </Tooltip>
                }
              />
              <Flex className={styles.buttonContainer}>
                <Button className={styles.buttonLogin}>Ingresar</Button>
                <Text underline className={styles.textForgotPassword}>
                  Olvide mi contraseña
                </Text>
              </Flex>
            </Form>
          </Flex>
        </Flex>
      </Flex>
    </main>
  )
}
