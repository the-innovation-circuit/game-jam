import { Box, Link, Text } from "theme-ui";
import Icon from 'supercons'

export default function liveWorkshop({ name, date }) {
  return (
    <Box bg="sunken" p={2} px={3} sx={{ borderRadius: 5, mb: 2, display: 'flex', alignItems: 'center', gap: '6px' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Text sx={{ fontWeight: 500 }} mr={1}>{name}</Text> ({date})
      </Box>
      <Link href="https://www.youtube.com/channel/UCJb8wQnp0SHsN5vyhAZgklg" target="_blank" sx={{ display: 'flex', alignItems: 'center' }}>
        <Icon glyph="youtube" size="28" />
      </Link>
    </Box>
  )
}