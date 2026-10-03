import AutomationPage, { buildAutomationMetadata } from "@/components/automation/AutomationPage"
import { getAutomationPage } from "@/content/automation-pages"

const page = getAutomationPage("automated-business-reports")

export const metadata = buildAutomationMetadata(page)

export default function Page() {
    return <AutomationPage page={page} />
}
