
import { Box } from '@/components/Box';
import { Page } from '@/components/Page';
import { Flex, Container } from '@gravity-ui/uikit/unstable_layout'

export default function FlexGapPage() {
    return (
        <Page prevExample='/flexSpace' nextExample="/activeMediaQuery">
            <Container>
                <Flex direction='column' gap>
                    <Flex space={mm => mm('l') ? 'xl' : 'micro'} direction={mm => mm('l') ? 'column' : 'row'}>
                        <Box randSize />
                        <Box randSize />
                        <Box randSize />
                        <Box randSize />
                    </Flex>
                    <Flex direction={mm => mm('l') ? 'row' : 'column'} alignItems="flex-start" space={mm => mm('l') ? 'micro' : 'xl'}>
                        <Box randSize />
                        <Box randSize />
                        <Box randSize />
                        <Box randSize />
                    </Flex>
                </Flex>
            </Container>
        </Page>
    )
}
