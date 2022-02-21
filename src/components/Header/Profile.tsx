import { Box, Flex, Text, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Filipe Moura</Text>
          <Text color="gra.300" fontSize="small">
            filipeasm18@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Name" src="https://github.com/filipey.png" />
    </Flex>
  )
}
