import React from 'react'
import Timeline from '@mui/lab/Timeline'
import TimelineItem, {timelineItemClasses} from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import { Typography } from '@mui/material'
import CodeIcon from '@mui/icons-material/Code'
import QueryStatsIcon from '@mui/icons-material/QueryStats'
import BrushIcon from '@mui/icons-material/Brush'
import { createTheme, ThemeProvider } from '@mui/material/styles'

export const WorkTimeline = () => {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'monospace',
        'sans-serif',
        'Roboto'
    ].join(','),
      h5: {
        fontWeight: 700,
        fontSize: 25
      },
      p: {
        fontWeight: 600
      },
      subtitle1: {
        fontSize: 15
      }}
      
  });

  return (
    <ThemeProvider theme={theme}>
    <div>
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }} >
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot sx ={{backgroundColor: '#ffffff'}}>
                  <CodeIcon sx={{color: '#000000'}}/>
                </TimelineDot>
                <TimelineConnector sx ={{backgroundColor: '#ffffff'}}/>
            </TimelineSeparator>
            <TimelineContent>
                <div style={{paddingLeft:'25px'}}>
                <Typography variant='h5' >Software Developer Intern - Citibank</Typography>
                <Typography variant='subtitle1' sx={{color: '#f1eff0'}}>May 2023 - Aug 2023</Typography>
                <Typography variant='p' display='block'>- Achieved real time accuracy and improved efficiency by automating EOD transaction checkouts through web scraping data and building a summary table visualization using Python, BeautifulSoup and Pandas.</Typography>
                <Typography variant='p' display='block'>- Created a script to sort daily production tasks, parse error log files, and generate monthly job failure reports for a portfolio of 800+ jobs; efforts improved accuracy rate to 100% and boosted efficiency by 180%.</Typography>
                <Typography variant='p' display='block'>- Fully automated scripts through creating and deploying DAG workflow processes using Apache Airflow.</Typography>
                <Typography variant='p' display='block'>- Coded tests to check completion of inbound feeds and send email alerts using Bash and crontab, reducing total job failures.</Typography>
                </div>
            </TimelineContent>
        </TimelineItem>

        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot sx ={{backgroundColor: '#ffffff'}}>
                  <CodeIcon sx={{color: '#000000'}}/>
                </TimelineDot>
                <TimelineConnector sx ={{backgroundColor: '#ffffff'}}/>
            </TimelineSeparator>
            <TimelineContent>
                <div style={{paddingLeft:'25px'}}>
                <Typography variant='h5' >Production Engineering Fellow (MLH) - Meta</Typography>
                <Typography variant='subtitle1' sx={{color: '#f1eff0'}}>May 2022 - Aug 2022</Typography>
                <Typography variant='p' display='block'>- Built an open-source, full-stack personal portfolio website using HTML/CSS and the Jinja templating engine, creating a
flexible and reusable frontend for future scaling.</Typography>
                <Typography variant='p' display='block'>- Created REST API endpoints using Flask; integrated with a MySQL database to handle user input and data
.</Typography>
                <Typography variant='p' display='block'>- Containerized website using Docker to guarantee easy and flexible redeployment of code for future users.</Typography>
                <Typography variant='p' display='block'>- Implemented automated tests into the website’s CI/CD pipeline; contributions improved troubleshooting process.</Typography>
                <Typography variant='p' display='block'>- Set up system and container monitoring and alerting using Prometheus and Grafana to visualize resource utilization
.</Typography>
                
                </div>
            </TimelineContent>
        </TimelineItem>

        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot sx ={{backgroundColor: '#ffffff'}}>
                <QueryStatsIcon sx={{color: '#000000'}}/>
                </TimelineDot>
                <TimelineConnector sx ={{backgroundColor: '#ffffff'}}/>
            </TimelineSeparator>
            <TimelineContent>
              <div style={{paddingLeft:'25px'}}>
                <Typography variant='h5'>Data Science Intern - Western University</Typography>
                <Typography variant='subtitle1' sx={{color: '#f1eff0'}}>May 2021 - Aug 2021</Typography>
                <Typography variant='p'>- Developed a user-friendly recording GUI that encodes the maximum quality and FPS of a camera hardware; creating the
code framework for future video data collection.</Typography>
                <Typography variant='p' display='block'>- Conducted multiple recording tests with the Luxonis Oak-D camera and documented hardware and software limitations,
efforts ensured a smooth transition for future interns.</Typography>
<Typography variant='p' display='block'>- Implemented code for customized file organization, giving users the flexibility to categorize storage of data.</Typography>
                <Typography variant='p' display='block'>- Received the NSERC Undergraduate Student Research Award ($8400), a national research award in Canada.</Typography>
              </div>
            </TimelineContent>
        </TimelineItem>

    </Timeline>
    </div>
    </ThemeProvider>
  )
}
