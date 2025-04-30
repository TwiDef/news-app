import { useAppSelector } from "../hooks/useAppSelector";

export const publishedTime = (past: Date): string => {

  const { now } = useAppSelector(state => state.news)
  const diff = (now.getTime() - past.getTime()) / 1000

  if (diff < 60) {
    return `${Math.floor(diff)}s ago`
  }
  if (diff < 3600) {
    return `${Math.floor(diff / 60)}m ago`
  }
  if (diff <= 86400) {
    return `${Math.floor(diff / 3600)}h ago`
  }
  if (diff > 86400) {
    return `${Math.floor(diff / 86400)} days ago`
  }
  else {
    return "unknown time published"
  }
}

