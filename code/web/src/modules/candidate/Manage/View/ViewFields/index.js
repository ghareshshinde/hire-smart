// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { CopyToClipboard } from 'react-copy-to-clipboard'

// UI Imports
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles/index'
import styles from './styles'

// App Imports
import { plural } from '../../../../../setup/helpers'

// Component
const ViewFields = (props) => {
  const { classes, candidate } = props

  return (
    <React.Fragment>
      {/* Name */}
      <div className={classes.item}>
        <Typography variant={'caption'} gutterBottom>
          Name
        </Typography>

        <Typography gutterBottom>
          { candidate.name }
        </Typography>
      </div>

      {/* Contact */}
      <div className={classes.item}>
        <Typography variant={'caption'} gutterBottom>
          Contact
        </Typography>

        <Typography gutterBottom>
          <CopyToClipboard text={candidate.email}>
            <span title={'Click to copy'} className={classes.clickToCopy}>{ candidate.email }</span>
          </CopyToClipboard>

          {' '}&bull;{' '}

          <CopyToClipboard text={candidate.mobile}>
            <span title={'Click to copy'} className={classes.clickToCopy}>{ candidate.mobile }</span>
          </CopyToClipboard>
        </Typography>
      </div>

      {/* Client */}
      <div className={classes.item}>
        <Typography variant={'caption'} gutterBottom>
          Client
        </Typography>

        <Typography gutterBottom>
          { candidate.clientId.name }
        </Typography>
      </div>

      {/* Job Role */}
      {
        candidate.jobId && candidate.jobId.role &&
        <div className={classes.item}>
          <Typography variant={'caption'} gutterBottom>
            Job Role
          </Typography>

          <Typography gutterBottom>
            { candidate.jobId.role }
          </Typography>

          <Typography gutterBottom>
            { candidate.jobId.description }
          </Typography>
        </div>
      }

      <Grid item xs={12}>
        <Grid container spacing={24}>
          <Grid item md={6}>
            {/* Experience */}
            <div className={classes.item}>
              <Typography variant={'caption'} gutterBottom>
                Experience
              </Typography>

              <Typography gutterBottom>
                { candidate.experience } year{ plural(candidate.experience) }
              </Typography>
            </div>
          </Grid>

          <Grid item md={6}>
            {/* Resume */}
            <div className={classes.item}>
              <Typography variant={'caption'} gutterBottom>
                Resume
              </Typography>

              <Typography gutterBottom>
                { candidate.resume }
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>

      {/* Salary */}
      <Grid item xs={12}>
        <Grid container spacing={24}>
          {/* Salary Current */}
          <Grid item md={6}>
            <div className={classes.item}>
              <Typography variant={'caption'} gutterBottom>
                Salary Current
              </Typography>

              <Typography gutterBottom>
                { candidate.salaryCurrent }
              </Typography>
            </div>
          </Grid>

          {/* Salary Expected */}
          <Grid item md={6}>
            <div className={classes.item}>
              <Typography variant={'caption'} gutterBottom>
                Salary Expected
              </Typography>

              <Typography gutterBottom>
                { candidate.salaryExpected }
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

// Component Properties
ViewFields.propTypes = {
  classes: PropTypes.object.isRequired,
  candidate: PropTypes.object.isRequired
}

export default withStyles(styles)(ViewFields)

