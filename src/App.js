import React from 'react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';

import {
  Box,
  Flex,
  Heading,
  Text,
  Button
} from 'rebass'

Amplify.configure(aws_exports);

class App extends React.Component {
  render() {
    return (
      <Text
        fontFamily='system-ui,sans-serif'>
        <Box px={3} py={5} color='white' bg='blue'>
          <Heading as='h1' fontSize={[ 4, 5, 6 ]}>
            Hello, Rebass
          </Heading>
        </Box>
        <Flex px={3} py={4} alignItems='center'>
          <Heading color='blue'>Beep</Heading>
          <Box mx='auto' />
          <Button>Boop</Button>
        </Flex>
      </Text>
    )
  }
}
export default withAuthenticator(App)

