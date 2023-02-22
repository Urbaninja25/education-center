import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'

import dashboardPhoto from '../../assets/img/dashboard-photo.svg'
import landingPagePhoto from '../../assets/img/landing-page-photo.svg'
import illustrationPagePhoto from '../../assets/img/illustration-page-photo.svg'
import styles from './styles'

const links = [
  'Show all',
  'Desing',
  'Branding',
  'Development',
  'Seo',
  'UX/UI Design',
]

const Experience = () => {
  return (
    <Box sx={styles.experience}>
      <Box sx={styles.wrapper}>
        <Typography variant='h2'>professional experience</Typography>
        <Typography
          variant='body1'
          sx={{ textTransform: 'capitalize', margin: '25px 0' }}
        >
          professional design agency to provide solutions
        </Typography>
        <Box sx={styles.links}>
          {links.map((link, index) => {
            return (
              <Link key={index} sx={styles.link}>
                {link}
              </Link>
            )
          })}
        </Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent='center'
        >
          <Grid item xs={6} sm={4} md={4}>
            <Box>
              <Box component='img' src={dashboardPhoto} sx={styles.imgItem} />
              <Typography sx={styles.contentTitle}>dashborad design</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Box>
              <Box component='img' src={landingPagePhoto} sx={styles.imgItem} />
              <Typography sx={styles.contentTitle}>landing pages</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Box>
              <Box
                component='img'
                src={illustrationPagePhoto}
                sx={styles.imgItem}
              />
              <Typography sx={styles.contentTitle}>
                ilustration design
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Experience
