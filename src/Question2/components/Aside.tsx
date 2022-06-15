import { AccessAlarm, ArrowDropDown, ArrowRight, BarChart, Message, Settings } from '@mui/icons-material'
import { Box, Collapse, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'

type Props = {
  asideWidth: number
}

const Aside = (props: Props) => {
  const [open1, setOpen1] = useState<boolean>(false)
  const [open2, setOpen2] = useState<boolean>(false)
  const [open3, setOpen3] = useState<boolean>(false)
  const [open4, setOpen4] = useState<boolean>(false)

  return (
    <Box component="nav" sx={{ width: { sm: props.asideWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
      <Drawer
        sx={{
          width: props.asideWidth,
          '& .MuiDrawer-paper': {
            width: props.asideWidth,
            backgroundColor: 'lightcyan',
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <List>
          <ListItemButton onClick={() => setOpen1(!open1)}>
            <ListItemIcon>
              <AccessAlarm />
            </ListItemIcon>
            <ListItemText primary="對帳處理" />
            <ListItemIcon>{open1 ? <ArrowDropDown /> : <ArrowRight />}</ListItemIcon>
          </ListItemButton>
          <Collapse in={open1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} autoFocus>
                <ListItemIcon>
                  <AccessAlarm />
                </ListItemIcon>
                <ListItemText primary="對帳處理 1" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} autoFocus>
                <ListItemIcon>
                  <AccessAlarm />
                </ListItemIcon>
                <ListItemText primary="對帳處理 2" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={() => setOpen2(!open2)}>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="監控儀表板" />
            <ListItemIcon>{open2 ? <ArrowDropDown /> : <ArrowRight />}</ListItemIcon>
          </ListItemButton>
          <Collapse in={open2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} autoFocus>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary="監控儀表板 1" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} autoFocus>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary="監控儀表板 2" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={() => setOpen3(!open3)}>
            <ListItemIcon>
              <BarChart />
            </ListItemIcon>
            <ListItemText primary="統計分析" />
            <ListItemIcon>{open3 ? <ArrowDropDown /> : <ArrowRight />}</ListItemIcon>
          </ListItemButton>
          <Collapse in={open3} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <BarChart />
                </ListItemIcon>
                <ListItemText primary="統計分析 1" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <BarChart />
                </ListItemIcon>
                <ListItemText primary="統計分析 2" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={() => setOpen4(!open4)}>
            <ListItemIcon>
              <Message />
            </ListItemIcon>
            <ListItemText primary="即時訊息" />
            <ListItemIcon>{open4 ? <ArrowDropDown /> : <ArrowRight />}</ListItemIcon>
          </ListItemButton>
          <Collapse in={open4} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <Message />
                </ListItemIcon>
                <ListItemText primary="即時訊息 1" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <Message />
                </ListItemIcon>
                <ListItemText primary="即時訊息 2" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Drawer>
    </Box>
  )
}

export default Aside
