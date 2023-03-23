
import { Box } from '@/components/Box';
import { Page } from '@/components/Page';
import { Col, Row } from '@gravity-ui/uikit/unstable_layout'

export default function Home() {
  return (
    <Page nextExample="/withContainer">
      <Row>
        <Col s='12' m='6' l='3'>
          <Box>s: 12, m: 6, l: 3</Box>
        </Col>
        <Col s='12' m='6' l='3'>
          <Box>s: 12, m: 6, l: 3</Box>
        </Col>
        <Col s='12' m='6' l='3'>
          <Box>s: 12, m: 6, l: 3</Box>
        </Col>
        <Col s='12' m='6' l='3'>
          <Box>s: 12, m: 6, l: 3</Box>
        </Col>
        <Col s='12' m='6' l='3'>
          <Box>s: 12, m: 6, l: 3</Box>
        </Col>
        <Col s='12' m='6' l='3'>
          <Box>s: 12, m: 6, l: 3</Box>
        </Col>
        <Col s='12' m='6' l='3'>
          <Box>s: 12, m: 6, l: 3</Box>
        </Col>
        <Col s='12' m='6' l='3'>
          <Box>s: 12, m: 6, l: 3</Box>
        </Col>
      </Row>
    </Page>
  )
}
