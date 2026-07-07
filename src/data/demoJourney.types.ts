export type MockupType =
  | "map"
  | "province"
  | "detail"
  | "cultureRasa"
  | "route"
  | "passport"
  | "rani"

export type DemoJourneyStep = {
  id: string
  number: string
  title: string
  shortTitle: string
  description: string
  microcopy: string
  icon: string
  color: string
  features: string[]
  mockupType: MockupType
}

export type DemoJourneySectionProps = {
  steps?: DemoJourneyStep[]
  defaultStepId?: string
  autoPlay?: boolean
  autoPlayIntervalMs?: number
}
