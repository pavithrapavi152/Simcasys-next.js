import jwt from "jsonwebtoken";

export function generateToken(user: any) {
  return jwt.sign(
    {
      id: user.Id,
      email: user.Email,
      role: user.Role,
    },

    process.env.JWT_SECRET!,

    {
      expiresIn: "1d",
    },
  );
}
