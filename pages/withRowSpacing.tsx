
import { Box } from '@/components/Box';
import { Page } from '@/components/Page';
import { Col, Container, Row } from '@gravity-ui/uikit/unstable_layout'

export default function WithRowSpacing() {
  return (
    <Page prevExample="/withContainer" nextExample="/withRowSpacing">
      <Container>
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
        </Row>
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
        </Row>
      </Container>
    </Page>
  )
}
