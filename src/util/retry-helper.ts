// Adapted from retry-helper.ts in @actions/tool-cache

import ensureError from 'ensure-error'

/**
 * Internal class for retries
 */
export class RetryHelper {
  private maxAttempts: number
  private minSeconds: number
  private maxSeconds: number

  constructor(maxAttempts: number, minSeconds: number, maxSeconds: number) {
    if (maxAttempts < 1) {
      throw new Error('max attempts should be greater than or equal to 1')
    }

    this.maxAttempts = maxAttempts
    this.minSeconds = Math.floor(minSeconds)
    this.maxSeconds = Math.floor(maxSeconds)
    if (this.minSeconds > this.maxSeconds) {
      throw new Error('min seconds should be less than or equal to max seconds')
    }
  }

  async execute<T>(
    action: () => Promise<T>,
    isRetryable?: (e: Error) => boolean
  ): Promise<T> {
    let attempt = 1
    while (attempt < this.maxAttempts) {
      // Try
      try {
        return await action()
      } catch (error) {
        if (isRetryable && !isRetryable(ensureError(error))) {
          throw error
        }
        logger.info(ensureError(error).message)
      }

      // Sleep
      const seconds = this.getSleepAmount()
      logger.info(`Waiting ${seconds} seconds before trying again`)
      await this.sleep(seconds)
      attempt++
    }

    // Last attempt
    return await action()
  }

  private getSleepAmount(): number {
    return (
      Math.floor(Math.random() * (this.maxSeconds - this.minSeconds + 1)) +
      this.minSeconds
    )
  }

  private async sleep(seconds: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000))
  }
}
