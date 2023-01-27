// need to import functionalities
import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect, useDeferredValue } from "react";
import logo from '../assets/img/logo.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import Switch, { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';



// () basically placeholder for function()
const NavBar = () => {

  const [theme, setTheme ] = useState('blue');
  const toggleTheme = () => {
    if (theme === 'blue') {
      setTheme('pink');
    } 
    else {
      setTheme('blue');
    }
  };

    useEffect(() => {
    document.body.className = theme;
    }, [theme]);

    const [activeLink, setActiveLink ]= useState('/');
    // detect whether user scrolled or not
    const [scrolled, setScrolled] = useState('false');

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled('true');
            } else {
                setScrolled('false');
            }
        }

        window.addEventListener("scroll", onScroll);

        // remove event listeners when you don't plan on using them anymore
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }

    // MUI customized switch
    const MUISwitch = styled((props) => (
      <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
    ))(({ theme }) => ({
      width: 52,
      height: 26,
      padding: 0,
      '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
          transform: 'translateX(26px)',
          color: '#fff',
          '& + .MuiSwitch-track': {
            backgroundColor: theme.palette.mode === 'dark' ? 'yellow' : '#03a6d7',
            opacity: 1,
            border: 0,
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: 0.5,
          },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
          color: '#03a6d7',
          border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
          color:
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
      },
      '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
      },
      '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#f3082e' : 'yellow',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
          duration: 500,
        }),
      },
    }));
    

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container style={{paddingLeft: '0', paddingRight: '0'}}>
          <Navbar.Brand href="/">
            <img class='resize' src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" exact className={activeLink === '/' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('/')}>Home</Nav.Link>
              <Nav.Link href="/#/aboutme" exact className={activeLink === '/#/aboutme' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('/#/aboutme')}>About Me</Nav.Link>
              <Nav.Link href="/#/experience" exact className={activeLink === '/#/experience' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('/#/experience')}>Experience</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                  <a href="https://www.facebook.com/kristen.zhang.9655/" target="_blank" ><span style={{width: '59.25%'}}><FacebookIcon sx={{color: 'white'}}/></span></a>
                  <a href="https://www.linkedin.com/in/kristen-zhang/" target="_blank"><span><LinkedInIcon sx={{color: 'white'}}/></span></a>
                  <a href="https://github.com/IntentusKristen" target="_blank"><span style={{width: '59.25%'}}><GitHubIcon sx={{color: 'white'}}/></span></a>
                  <button className="vvd" onClick={() => window.location.href="/#/contact"}><span>Let's Connect</span> </button>
                <FormControlLabel sx = {{marginRight: 0}} control={<MUISwitch sx={{ m: 1, marginRight: 0 }} defaultChecked/>}/>
              </div>
                
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar;