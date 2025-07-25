import { industries } from '@/data/industries'
import React from 'react'
import OnboardingForm from './_components/Onboarding-form'
import { getUserOnboardingStatus } from '@/action/user'
import { redirect } from 'next/navigation'

const OnboardingPage = async () => {
    // check if user is already onboarding
    const {isOnboarded} = await getUserOnboardingStatus();
    if(isOnboarded){
      redirect("/dashboard");
    }
  return (
    <main>
        <OnboardingForm industries = {industries} /> 
    </main>
  )
}

export default OnboardingPage
