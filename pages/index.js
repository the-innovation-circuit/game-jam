import {
  Container,
  Grid,
  Box,
  Flex,
  Heading,
  Image,
  Input,
  Textarea,
  Button,
  Link
} from 'theme-ui'
import Story from '../components/story.mdx'

export default function App() {
  return (
    <Grid columns={[1, 2]} gap={[0, 2]}>
      <Flex
        sx={{
          minHeight: ['20px', '100vh'],
          background: [
            'linear-gradient(107deg, rgba(170,55,80,0.9) 0%, rgba(170,55,80,0.9) 80%), url(https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80)',
            'linear-gradient(107deg, rgba(236,55,80,0.3) 0%, rgba(236,55,80,0.3) 80%), url(https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80)'
          ],
          backgroundSize: 'cover',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexDirection: 'column'
        }}
      >
        <Image
          src="/spaced-heading.png"
          sx={{
            width: ['80vw', '40vw'],
            height: 'auto',
            p: [3, 4],
            pt: [4, 4]
          }}
        />
        <Flex sx={{ p: [3, 4], pb: [3, 4], pt: 0, mt: 2 }}>
          <Link
            href="https://innovationcircuit.com"
            target="_blank"
            sx={{ height: '60px' }}
          >
            <Image
              src="/logo.png"
              sx={{
                height: '60px',
                borderRadius: '11px',
                border: '2.5px solid white',
                transition: 'ease-in-out 0.1s',
                ':hover': {
                  border: '3px solid white'
                }
              }}
            />
          </Link>
        </Flex>
      </Flex>
      <Box
        py={[1, 3]}
        px={[3, 5]}
        sx={{ maxHeight: '100vh', overflow: 'scroll' }}
      >
        <Story />
        <Box as="form" sx={{ borderRadius: 6, mb: 4 }} method="POST" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdf0_7JSuDBd0DBVOz-axXebOokmP8ykPDvmvElOi575zROXw/formResponse">
          <Input placeholder="Your Email Address" name="entry.590954332" type="email" required />
          <Input my={3} placeholder="Your Full Name" name="entry.1875218698" required  />
          <Input placeholder="Your Game's Name" name="entry.875359557" required />
          <Input placeholder="Link To Download / Play Game" my={3} name="entry.929135500" required />
          <Textarea
            placeholder="About Your Game (how to play it and the story behind it)"
            mb={3}
            name="entry.1656399769"
            required
          />
          <Button sx={{ width: '100%', borderRadius: 6 }}>
            Submit Your Game!
          </Button>
        </Box>
      </Box>
    </Grid>
  )
}
