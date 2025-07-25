import { redirect } from "next/navigation";

const { getUserOnboardingStatus } = require("@/action/user");

const IndustryInsightsPage = async () => {
  const {isOnboarded} = await getUserOnboardingStatus();

  if(!isOnboarded) {
    redirect("/onboarding");
  }
  return <div>IndustryInsightsPage</div>


}
export default IndustryInsightsPage;