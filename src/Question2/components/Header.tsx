import { AccountCircle } from '@mui/icons-material'
import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
  asideWidth: number
}

const Header = (props: Props) => {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleLogout = () => {
    navigate('/Question2/Login')
  }

  return (
    <AppBar position="fixed" sx={{ width: `calc(100% - ${props.asideWidth}px)`, backgroundColor: 'black', ml: `${props.asideWidth}px` }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" noWrap component="div">
          管理系統
        </Typography>
        <IconButton sx={{ color: 'white' }} onClick={handleClick} size="large">
          <AccountCircle />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleLogout}>登出</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

export default Header
