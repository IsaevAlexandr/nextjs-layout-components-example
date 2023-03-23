
import { Box } from '@/components/Box';
import { Page } from '@/components/Page';
import { Flex, Container } from '@gravity-ui/uikit/unstable_layout'

export default function FlexSpacePage() {
    return (
        <Page prevExample='/flexGap' nextExample="/flexComplex">
            <Container>
                <Flex space direction="column">
                    <Flex space>
                        <Box randSize />
                        <Box randSize />
                        <Box randSize />
                        <Box randSize />
                    </Flex>
                    <Flex direction="column" alignItems="flex-start" space>
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
