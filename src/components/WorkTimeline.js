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

export const WorkTimeline = () => {
  return (
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
                <Typography variant='h5' >Production Engineering Fellow - Meta/MLH</Typography>
                <Typography variant='subtitle1' sx={{color: '#f1eff0'}}>May 2022 - Aug 2022</Typography>
                <Typography variant='p' display='block'>- Created an open-source, full-stack, personal portfolio website template using Python, Flask, Jinja, MySQL, Nginx, Docker, and unittest, guaranteeing easy and flexible redeployment of code.</Typography>
                <Typography variant='p' display='block'>- Applied continuous integration and continuous deployment to automated testing and deployment workflows; contributions improved troubleshooting process.</Typography>
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
                <Typography variant='h5'>Data Research Intern - Western University</Typography>
                <Typography variant='subtitle1' sx={{color: '#f1eff0'}}>May 2022 - Aug 2022</Typography>
                <Typography variant='p'>- Developed a user-friendly recording GUI that encodes the maximum quality and FPS of a camera hardware; implemented code set up the framework for future video data collection.</Typography>
                <Typography variant='p' display='block'>- Conducted multiple recording tests with the Luxonis Oak-D camera and documented hardware and software limitations, efforts ensured a smooth transition for future interns.</Typography>
              </div>
            </TimelineContent>
        </TimelineItem>

        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot sx ={{backgroundColor: '#ffffff'}}>
                <BrushIcon sx={{color: '#000000'}}/>
                </TimelineDot>
                <TimelineConnector sx ={{backgroundColor: '#ffffff'}}/>
            </TimelineSeparator>
            <TimelineContent>
            <div style={{paddingLeft:'25px'}}>
                <Typography variant='h5'>Graphic Design & Marketing - GetGrooop Inc.</Typography>
                <Typography variant='subtitle1' sx={{color: '#f1eff0'}}>May 2021 - Jan 2022</Typography>
                <Typography variant='p'>- Analyzed social media algorithms using Planoly and implemented a new marketing strategy, boosting business outreach by 1051% and content interactions by 333%.</Typography>
                <Typography variant='p' display='block'>- Reconstructed numerous marketing programs and platforms such as Instagram, business website, marketing brochures, and advertisements, resulting in a revitalizing rebranding of the company’s brand image.</Typography>
            </div>
            </TimelineContent>
        </TimelineItem>
    </Timeline>
    </div>
  )
}
