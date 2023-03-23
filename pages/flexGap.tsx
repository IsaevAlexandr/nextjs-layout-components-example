
import { Box } from '@/components/Box';
import { Page } from '@/components/Page';
import { Flex, Container } from '@gravity-ui/uikit/unstable_layout'

export default function FlexGapPage() {
    return (
        <Page prevExample='/flex' nextExample="/flexSpace">
            <Container>
                <Flex gap direction="column">
                    <Flex gap>
                        <Box randSize />
                        <Box randSize />
                        <Box randSize />
                        <Box randSize />
                    </Flex>
                    <Flex direction="column" alignItems="flex-start" gap>
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
