export const shortenUrl = async (
  url: string,
  userEmail: string
): Promise<string> => {
  if (!url) {
    throw new Error('Missing url')
  }
  if (!userEmail) {
    throw new Error('Missing userEmail')
  }
  const shortenedUrl = Math.random().toString(36).substring(7) // kind of random
  return shortenedUrl
}
