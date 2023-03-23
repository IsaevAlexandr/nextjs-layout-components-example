
import { Box } from '@/components/Box';
import { Page } from '@/components/Page';
import { Col, Container, Row } from '@gravity-ui/uikit/unstable_layout'

export default function WithRowSpacingComplex() {
  return (
    <Page prevExample="/withRowSpacing" nextExample="/flex">
      <Container spaceRow={mm => mm('l') ? 'micro' : 'l'} maxWidth="m">
        <Row space={mm => mm('m') ? 'm' : 'micro'}>
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
        <Row space={mm => mm('l') ? 'l' : 'nano'}>
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
