import AutomationPage, { buildAutomationMetadata } from "@/components/automation/AutomationPage"
import { getAutomationPage } from "@/content/automation-pages"

const page = getAutomationPage("crm-integration-data-sync")

export const metadata = buildAutomationMetadata(page)

export default function Page() {
    return <AutomationPage page={page} />
}
