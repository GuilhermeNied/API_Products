import { Response } from 'express'
export const badRequest = (res: Response, err: string) =>
  res.status(400).json({
    err
  })

export const notFound = (res: Response) => res.status(404).json({})

export const ok = (res: Response) => res.sendStatus(200).json({})

export const internalServerError = (res: Response, err: Error) =>
  res.status(500).json({
    err: err.message
  })
