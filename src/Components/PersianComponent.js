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
    font-family: KALAMEH-REGULAR !important;
    direction: rtl;
  }
`

export const PCheckbox = styled(Checkbox)`
  && {
    & .muitypography-root: {
      font-family: KALAMEH-REGULAR !important;
      direction: rtl;
    }
    span: {
      font-family: KALAMEH-REGULAR !important;
      direction: rtl;
    }
  }
`

export const PRadioButton = styled(Radio)`
  && {
    :nth-of-type(1) {
      font-family: KALAMEH-REGULAR !important;
      padding: 9px 0px !important ;
      direction: rtl;
    }
    span: {
      font-family: KALAMEH-REGULAR !important;
      direction: rtl;
    }
  }
`

export const PButton = styled(Button)`
  && {
    font-family: KALAMEH-REGULAR !important;
    direction: rtl;
    border-radius: 50px;
  }
`

export const PRoundButton = styled(Button)`
  && {
    font-family: KALAMEH-REGULAR !important;
    direction: rtl;
    border-radius: 99px;
    padding: 0px 32px;
  }
`

export const PTextField = styled(TextField)`
  && {
    font-family: KALAMEH-REGULAR !important;
    direction: rtl;
  }
`

export const PLink = styled(Link)`
  && {
    font-family: KALAMEH-REGULAR !important;
    direction: rtl;
  }
`

export const PBreadcrumbs = styled(Breadcrumbs)`
  && {
    font-family: KALAMEH-REGULAR !important;
    font-size: x-large;
    direction: rtl;
  }
`