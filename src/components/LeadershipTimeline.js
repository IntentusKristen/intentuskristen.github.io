import React from 'react'
import Timeline from '@mui/lab/Timeline'
import TimelineItem, {timelineItemClasses} from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import { Typography } from '@mui/material'
import GroupsIcon from '@mui/icons-material/Groups'
import DesignServicesIcon from '@mui/icons-material/DesignServices'
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const LeadershipTimeline = () => {
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
                  <GroupsIcon sx={{color: '#000000'}}/>
                </TimelineDot>
                <TimelineConnector sx ={{backgroundColor: '#ffffff'}}/>
            </TimelineSeparator>
            <TimelineContent>
                <div style={{paddingLeft:'25px'}}>
                <Typography variant='h5' >President - Innovation & Entrepreneurship Club</Typography>
                <Typography variant='subtitle1' sx={{color: '#f1eff0'}}>May 2022 - Present</Typography>
                <Typography variant='p' display='block'>- Planned and executed interactive club events to encourage leadership and build business acumen for club members; efforts increased student involvement by 36%.</Typography>
                <Typography variant='p' display='block'>- Managed an executive team of 12 members and directed bi-weekly meetings to delegate important tasks; enhanced team unity and ensured club activities ran smoothly.</Typography>
                </div>
            </TimelineContent>
        </TimelineItem>

        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot sx ={{backgroundColor: '#ffffff'}}>
                <DesignServicesIcon sx={{color: '#000000'}}/>
                </TimelineDot>
                <TimelineConnector sx ={{backgroundColor: '#ffffff'}}/>
            </TimelineSeparator>
            <TimelineContent>
              <div style={{paddingLeft:'25px'}}>
                <Typography variant='h5'>VP Creative - Innovation & Entrepreneurship Club</Typography>
                <Typography variant='subtitle1' sx={{color: '#f1eff0'}}>May 2021 - Apr 2022</Typography>
                <Typography variant='p'>- Designed and renovated club merchandise, sponsorship packages, and the club logo, yielding a stronger and more consistent brand image.</Typography>
                <Typography variant='p' display='block'>- Led recruitment of new club members through club fairs and strategic social media marketing techniques that resulted in over 45 signups.</Typography>
              </div>
            </TimelineContent>
        </TimelineItem>
    </Timeline>
    
    </div>
    </ThemeProvider>
  )
}
