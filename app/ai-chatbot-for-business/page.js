import AutomationPage, { buildAutomationMetadata } from "@/components/automation/AutomationPage"
import { getAutomationPage } from "@/content/automation-pages"

const page = getAutomationPage("ai-chatbot-for-business")

export const metadata = buildAutomationMetadata(page)

export default function Page() {
    return <AutomationPage page={page} />
}
