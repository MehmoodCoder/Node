import jwt from "jsonwebtoken";

// const SeesionIdToMap = new Map() // not needed since we are using JWT

export function setUser(user) {
  // return SeesionIdToMap.set(id, user)

  const secretToken = process.env.JWT_SECRET;

  return jwt.sign(
    {
      _id: user?._id,
      email: user?.email,
      role: user?.role,
    },
    secretToken,
  );
}

export function getUser(token) {
  // return SeesionIdToMap.get(id)

  const secretToken = process.env.JWT_SECRET;

  if (!token) return null;

  try {
    return jwt.verify(token, secretToken);
  } catch (error) {
    console.log("JWT Error:", error.message);
    return null;
  }
}
