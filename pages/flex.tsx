
import { Box } from '@/components/Box';
import { Page } from '@/components/Page';
import { Flex, Container } from '@gravity-ui/uikit/unstable_layout'

export default function FlexPage() {
    return (
        <Page prevExample='/withRowSpacingComplex' nextExample="/flexGap">
            <Container>
                <Flex direction="column">
                    <Flex>
                        <Box randSize />
                        <Box randSize />
                        <Box randSize />
                        <Box randSize />
                    </Flex>
                    <Flex direction="column" alignItems="flex-start">
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
