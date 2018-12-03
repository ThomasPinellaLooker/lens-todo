import * as React from 'react'

import { styled } from 'looker-lens'

const InternalDivider: React.SFC<{}> = () => {
  return <hr />
}

export const Divider = styled<{}>(InternalDivider)`
border-top: 1px solid ${props => props.theme.colors.semanticColors.primary.borderColor};
`
