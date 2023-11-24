import { Container } from '@mantine/core'
import { ReactNode } from 'react'

export const Layout = ({ children }: { children: ReactNode }) => {
  return <Container h="100vh">{children}</Container>
}
