import styled from 'styled-components'
import {
  Typography,
  Button,
  TextField,
  Checkbox,
  Radio,
  Link,
  Breadcrumbs,
} from '@mui/material'

export const PTypography = styled(Typography)`
  && {
    direction: rtl;
  }
`

export const PCheckbox = styled(Checkbox)`
  && {
    & .muitypography-root: {
      direction: rtl;
    }
    span: {
      direction: rtl;
    }
  }
`

export const PRadioButton = styled(Radio)`
  && {
    :nth-of-type(1) {
      padding: 9px 0px !important ;
      direction: rtl;
    }
    span: {
      direction: rtl;
    }
  }
`

export const PButton = styled(Button)`
  && {
    direction: rtl;
    border-radius: 50px;
  }
`

export const PRoundButton = styled(Button)`
  && {
    direction: rtl;
    border-radius: 99px;
    padding: 0px 32px;
  }
`

export const PTextField = styled(TextField)`
  && {
    direction: rtl;
  }
`

export const PLink = styled(Link)`
  && {
    direction: rtl;
  }
`

export const PBreadcrumbs = styled(Breadcrumbs)`
  && {
    font-size: x-large;
    direction: rtl;
  }
`