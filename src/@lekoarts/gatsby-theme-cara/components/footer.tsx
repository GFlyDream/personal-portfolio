/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui"

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <Box as="footer" variant="footer">
      <button
        sx={{ variant: `buttons.toggle`, fontWeight: `semibold`, display: `block`, mx: `auto`, mb: 3 }}
        onClick={toggleColorMode}
        type="button"
        aria-label="Toggle dark mode"
      >
        {isDark ? `Light` : `Dark`}
      </button>
      Copyright &copy; {new Date().getFullYear()} Jian Sun. All rights reserved. Inspired by Cara Theme.
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        {isDark ? (
          <img width="30" height="30" src="https://img.lekoarts.de/gatsby/logo_v2-light_w30.png" alt="LekoArts Logo" />
        ) : (
          <img width="30" height="30" src="https://img.lekoarts.de/gatsby/logo_v2_w30.png" alt="LekoArts Logo" />
        )}
        {` `}
        <Link
          aria-label="Link to the repo"
          sx={{ ml: 2 }}
          href="https://github.com/gflydream"
        >
          Made in beautiful Mtl
        </Link>
        <div sx={{ mx: 1 }}>by</div>
        {` `}
        <Link
          aria-label="Link to the theme author's repo"
          href="https://www.github.com/gflydream"
        >
          Jian Sun
        </Link>
      </Flex>
    </Box>
  )
}

export default Footer
