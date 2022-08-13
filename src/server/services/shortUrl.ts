import {nanoid} from 'nanoid'
export const shortenUrl =  (): string => {
  const shortenedUrl = nanoid(6)
  return shortenedUrl
}
