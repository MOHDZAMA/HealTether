import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      user?: DecodedToken; // Use the interface for the user object
    }
  }
}

export interface DecodedToken {
  id: string;
  name: string;
  email: string;
}
