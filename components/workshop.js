import { Box, Text } from "theme-ui";
import Icon from 'supercons'

export default function liveWorkshop({ name, date }) {
  return (
    <Box bg="sunken" p={2} px={3} sx={{ borderRadius: 5, mb: 2, display: 'flex', alignItems: 'center', gap: '6px' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Text sx={{ fontWeight: 500 }} mr={1}>{name}</Text> ({date})
      </Box>
      <Icon glyph="youtube" size="28" />
      <Icon glyph="event-add" size="28" />
    </Box>
  )
}