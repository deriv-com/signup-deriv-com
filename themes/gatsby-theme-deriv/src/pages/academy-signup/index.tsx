import React from 'react'
import SignUpAcademy from 'features/pages/academy-signup'
import { TGatsbyHead } from 'features/types'
import { WithIntl } from 'components/localization'
import { SEO } from 'components/containers'

const SignupPage = ({ pageContext }: TGatsbyHead) => {
    const { region } = pageContext
    return <SignUpAcademy region={region}/>
}

export default WithIntl()(SignupPage)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Sign up for exclusive trading courses | Deriv Academy_t_"
        description="_t_Sign up for Deriv Academy to access trading courses. Create a free account and learn with expert modules on forex, Deriv MT5 and more. _t_"
        pageContext={pageContext}
    />
)
