import { industries } from '@/data/industries'
import React from 'react'
import OnboardingForm from './_components/OnboardingForm'
import { getUserOnboardingStatus } from '@/action/user'
import { redirect } from 'next/dist/server/api-utils'

const OnboardingPage = async () => {
    // check if user is already onboarding
    const {isOnboarded} = await getUserOnboardingStatus();
    if(!isOnboarded){
      redirect("/onboarding");
    }
  return (
    <main>
        <OnboardingForm industries = {industries} /> 
    </main>
  )
}

export default OnboardingPage
