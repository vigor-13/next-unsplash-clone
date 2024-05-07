export class CustomError extends Error {
  constructor(
    message: string,
    public status: number,
  ) {
    super(message);
    this.name = 'CustomError';
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}
