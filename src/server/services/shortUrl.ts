export const shortenUrl = async (
  url: string
): Promise<string> => {
  if (!url) {
    throw new Error('Missing url')
  }
  const shortenedUrl = Math.random().toString(36).substring(7) // kind of random
  return shortenedUrl
}
